<?php

namespace App\Http\Controllers;

use App\Jobs\CompleteOrderTask;
use App\Models\Order;
use Domain\Messages\DTO\MessageDto;
use Domain\Orders\DTO\CheckoutOrderDto;
use Domain\Orders\Repositories\OrderRepository;
use Domain\Stores\Actions\RegisterStoreAction;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Infrastructure\Cander\Contracts\CanderClientContract;
use Infrastructure\Shopify\Services\ShopifyClient;
use Ramsey\Uuid\Uuid;

class CanderController extends Controller
{
    private ShopifyClient $shopifyClient;
    private OrderRepository $orderRepository;
    private CanderClientContract $canderClient;
    private RegisterStoreAction $registerStoreAction;

    public function __construct(
        ShopifyClient $shopifyClient,
        OrderRepository $orderRepository,
        CanderClientContract $canderClient,
        RegisterStoreAction $registerStoreAction
    )
    {
        $this->shopifyClient = $shopifyClient;
        $this->orderRepository = $orderRepository;
        $this->canderClient = $canderClient;
        $this->registerStoreAction = $registerStoreAction;
    }

    /** @throws RequestException */
    public function register(): array
    {
        $this->registerStoreAction->execute();

        return ['message' => 'Store registered successfully.'];
    }

    /** @throws RequestException */
    public function getCards(): array
    {
        return $this->canderClient->getCards($this->getCredentials());
    }

    /** @throws RequestException */
    public function createMessage(Request $request): array
    {
        $messageDto = MessageDto::create($request);
        $orderDto = CheckoutOrderDto::create($request);

        // Get order id
        $orderId = $orderDto->orderId;

        if (!$orderId && $orderDto->checkoutToken) {
            $orderId = $this->shopifyClient->getOrderIdByCheckoutToken($orderDto->checkoutToken);
        }

        // Create Cander message
        $messageId = $this->canderClient->createMessage($this->getCredentials(), $messageDto);

        // Create order
        $order = $this->orderRepository->findByIdentification($orderDto) ?: new Order();
        $order->orderId = $orderId;
        $order->shopId = $orderDto->shopId;
        $order->canderMessageId = $messageId;
        $order->orderIdentity = Uuid::uuid4();
        $order->save();

        if ($orderId) {
            dispatch(new CompleteOrderTask($this->me()->getId(), $orderId));
        }

        Log::info("Store $orderDto->shopId created messageId=$messageId" . ($orderId ? " for orderId=$orderId" : ""));

        return [
            'orderIdentity' => $order->orderIdentity,
            'message' => 'Cander greeting created successfully.'
        ];
    }

    /**
     * @throws RequestException
     * @deprecated
     */
    public function sendNotifications(string $messageId): array
    {
        /** @var Order $order */
        $order = Order::query()
            ->where('cander_message_id', $messageId)
            ->first();

        abort_if($order == null, 404, 'No messages found.');
        abort_if($order->notifiedAt != null, 403, 'Notifications already sent.');

        $this->canderClient->sendNotifications($this->getCredentials(), $messageId);

        $order->notifiedAt = now();
        $order->save();

        return ['message' => 'Notifications sent sucessfully.'];
    }
}
