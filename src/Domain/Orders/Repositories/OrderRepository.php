<?php

namespace Domain\Orders\Repositories;

use App\Models\Order;
use App\Models\User;
use Domain\Orders\DTO\CheckoutOrderDto;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

final class OrderRepository
{
    public function get(User $me, Carbon $month): Collection
    {
        return Order::query()
            ->where('shop_id', $me->name)
            ->whereNotNull('order_number')
            ->whereDate('created_at', '>=', $month->firstOfMonth())
            ->whereDate('created_at', '<=', $month->lastOfMonth())
            ->orderByDesc('id')
            ->get();
    }

    /** @return Order|Model|null */
    public function findByOrderId(int $orderId, array $columns = ['*']): ?Order
    {
        return Order::query()
            ->where('order_id', $orderId)
            ->orderByDesc('id')
            ->first($columns);
    }

    /** @return Order|Model|null */
    public function findByOrderNumber(string $shop, int $orderNumber): ?Order
    {
        return Order::query()
            ->where('shop_id', $shop)
            ->where('order_number', $orderNumber)
            ->first();
    }

    /** @return Order|Model|null */
    public function findByOrderIdentity(string $orderIdentity): ?Order
    {
        return Order::query()
            ->where('order_identity', $orderIdentity)
            ->first();
    }

    /** @return Order|Model|null */
    public function findByIdentification(CheckoutOrderDto $dto): ?Order
    {
        if (!$dto->orderId && !$dto->orderIdentity) {
            return null;
        }

        $query = Order::query();

        if ($dto->orderId) {
            $query->where('order_id', $dto->orderId);
        }

        if ($dto->orderIdentity) {
            $query->where('order_identity', $dto->orderIdentity);
        }

        return $query
            ->orderByDesc('id')
            ->first();
    }

    public function getTotalMessagesForCurrentMonth(string $shop): int
    {
        $month = now();

        return Order::query()
            ->where('shop_id', $shop)
            ->whereNotNull('cander_message_id')
            ->whereDate('created_at', '>=', $month->firstOfMonth())
            ->whereDate('created_at', '<=', $month->lastOfMonth())
            ->count();
    }
}
