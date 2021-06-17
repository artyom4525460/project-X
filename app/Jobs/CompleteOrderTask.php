<?php

namespace App\Jobs;

use Domain\Billing\Actions\CalculateMessageCostAction;
use Domain\Orders\Actions\FillOrderAction;
use Domain\Orders\Repositories\OrderRepository;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Infrastructure\Concerns\Login;
use Infrastructure\Shopify\Exceptions\ShopifyException;
use Infrastructure\Shopify\Services\ShopifyClient;
use Infrastructure\Utils\Strings;
use Osiset\BasicShopifyAPI\ResponseAccess;
use Osiset\ShopifyApp\Actions\ActivateUsageCharge;
use Osiset\ShopifyApp\Exceptions\ChargeNotRecurringException;
use Osiset\ShopifyApp\Objects\Transfers\UsageChargeDetails as UsageChargeDetailsTransfer;
use Osiset\ShopifyApp\Objects\Values\ShopId;

class CompleteOrderTask implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Login;

    private ShopId $shopId;
    private int $orderId;

    public function __construct(ShopId $shopId, int $orderId)
    {
        $this->shopId = $shopId;
        $this->orderId = $orderId;
    }

    /** @throws ShopifyException|ChargeNotRecurringException */
    public function handle(
        ShopifyClient $shopifyClient,
        OrderRepository $orderRepository,
        FillOrderAction $fillOrderAction,
        ActivateUsageCharge $activateUsageCharge,
        CalculateMessageCostAction $calculateMessageCostAction
    ): void
    {
        $this->log("Complete order for shopId={$this->shopId->toNative()} orderId=$this->orderId");

        // Login
        $me = $this->loginUsingShopId($this->shopId);

        // Get order
        $so = $shopifyClient->findOrderById($this->orderId);
        if (!$so) {
            throw new ShopifyException("Shopify order not found by id=$this->orderId");
        }

        // Update order information
        if ($order = $orderRepository->findByOrderId($this->orderId)) {
            $fillOrderAction->execute($order, $so->toArray());
            $order->save();
            $this->log("Order information updated for orderId=$this->orderId");
        }

        // Create usage charge
        if ($price = $calculateMessageCostAction->execute($me)) {
            $transfer = new UsageChargeDetailsTransfer();
            $transfer->price = $price;
            $transfer->description = 'Create a Cander greeting';
            $activateUsageCharge($me->getId(), $transfer);
            $this->log("Usage charge price=$price created for orderId=$this->orderId");
        }

        // Update order tags
        $this->updateOrderTags($shopifyClient, $so);

        $this->log("Complete order for shopId={$this->shopId->toNative()} orderId=$this->orderId | done");
    }

    private function updateOrderTags(ShopifyClient $shopifyClient, ResponseAccess $so): void
    {
        $tags = Strings::split($so['tags'], ', ');
        $tags[] = 'Cander QR';
        try {
            $shopifyClient->updateOrderTags($this->orderId, array_unique($tags));
            $this->log("Order tags created for orderId=$this->orderId");
        } catch (ShopifyException $e) {
            Log::error("Failed to update order tags", ['id' => $this->orderId]);
        }
    }

    private function log(string $message): void
    {
        Log::info($message);
    }
}
