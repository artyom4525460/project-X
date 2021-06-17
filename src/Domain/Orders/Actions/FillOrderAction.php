<?php

namespace Domain\Orders\Actions;

use App\Models\Order;
use Illuminate\Support\Arr;

final class FillOrderAction
{
    public function execute(Order $order, array $so): void
    {
        $order->orderNumber = Arr::get($so, 'order_number');
        $order->customer = Arr::get($so, 'billing_address.name');
        $order->email = Arr::get($so, 'email');
        $order->title = Arr::get($so, 'line_items.0.title');
        $order->status = Arr::get($so, 'financial_status');
    }
}
