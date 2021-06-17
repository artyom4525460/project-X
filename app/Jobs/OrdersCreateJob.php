<?php namespace App\Jobs;

use Domain\Messages\DTO\ParticipantDto;
use Domain\Orders\Enums\OrderNoteAttributeEnum;
use Domain\Orders\Repositories\OrderRepository;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\Client\RequestException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Infrastructure\Cander\Contracts\CanderClientContract;
use Infrastructure\Concerns\Login;
use Infrastructure\Concerns\Me;
use Infrastructure\Shopify\Exceptions\ShopifyException;
use Osiset\ShopifyApp\Contracts\Queries\Shop as IShopQuery;
use stdClass;

class OrdersCreateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Login, Me;

    private string $domain;
    private array $order;

    public function __construct(string $domain, stdClass $order)
    {
        $this->domain = $domain;
        $this->order = (array)$order;
    }

    /** @throws RequestException|ShopifyException */
    public function handle(
        IShopQuery $shopQuery,
        OrderRepository $orderRepository,
        CanderClientContract $canderClient
    ): void
    {
        $orderId = $this->order['id'];

        // Log::debug("Handling $this->domain [orders/create] topic for orderId=$orderId");

        $me = $this->login($shopQuery, $this->domain);

        $orderIdentity = $this->getNoteAttribute(OrderNoteAttributeEnum::IDENTITY);
        if (!$orderIdentity) {
            return;
        }

        $order = $orderRepository->findByOrderIdentity($orderIdentity);
        if (!$order) {
            $this->warning("Cannot find order by orderIdentity=$orderIdentity");
            return;
        }

        if ($order->orderId) {
            if ($order->orderId != $orderId) {
                $this->warning("Duplicate orderIdentity=$orderIdentity on shopify.orderId=$orderId");
            }
            return;
        }

        // Update order id
        $order->orderId = $orderId;
        $order->save();

        // Update message participants
        $customer = $this->order['customer'];
        $sender = new ParticipantDto();
        $sender->name = "$customer->first_name $customer->last_name";
        $sender->phoneNumber = $customer->phone;
        $sender->emailAddress = $customer->email;
        $canderClient->updateParticipants($this->getCredentials(), $order->canderMessageId, $sender);

        // Complete order
        dispatch(new CompleteOrderTask($me->getId(), $orderId));

        Log::debug("Handling $this->domain [orders/create] topic for orderId=$orderId | done");
    }

    private function getNoteAttribute(string $name): ?string
    {
        foreach ($this->order['note_attributes'] as $attribute) {
            if ($attribute->name == $name) {
                return $attribute->value;
            }
        }
        return null;
    }

    private function warning(string $message): void
    {
        Log::warning("Handling $this->domain [orders/create]: $message");
    }
}
