<?php namespace App\Jobs;

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

class FulfillmentsCreateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Login, Me;

    private string $domain;
    private array $data;

    public function __construct(string $domain, stdClass $data)
    {
        $this->domain = $domain;
        $this->data = (array)$data;
    }

    /** @throws RequestException|ShopifyException */
    public function handle(
        IShopQuery $shopQuery,
        OrderRepository $orderRepository,
        CanderClientContract $canderClient
    ): void
    {
        $orderId = $this->data['order_id'];

        // Log::debug("Handling $this->domain [fulfillments/create] topic for orderId=$orderId");

        // Log::debug("Fulfillment created {$this->json(['shipment_status', 'tracking_company'])}");

        // Send notifications when product is delivered
        if (!in_array($this->data['shipment_status'], ['delivered', 'picked_up'])) {
            return;
        }

        $order = $orderRepository->findByOrderId($orderId);
        if (!$order || !$order->canderMessageId || $order->notifiedAt) {
            return;
        }

        if ($this->notificationsEnabled()) {
            // Send notifications
            $this->login($shopQuery, $this->domain);
            $canderClient->sendNotifications($this->getCredentials(), $order->canderMessageId);
            Log::info("Notifications for canderMessageId=$order->canderMessageId sent successfully");

            // Update order
            $order->notifiedAt = now();
            $order->save();
        }

        Log::debug("Handling $this->domain [fulfillments/create] topic for orderId=$orderId | done");
    }

    private function notificationsEnabled(): bool
    {
        return false;
    }

    private function json(array $keys): string
    {
        $json = [];
        foreach ($keys as $key) {
            $json[$key] = $this->data[$key];
        }
        return json_encode($json);
    }
}
