<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\User;
use Domain\Orders\Actions\FillOrderAction;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Infrastructure\Shopify\Services\ShopifyClient;

class MigrateOrdersCmd extends Command
{
    protected $signature = 'order:migrate';
    protected $description = 'Migrate orders to the database';

    private ShopifyClient $shopifyClient;
    private FillOrderAction $fillOrderAction;

    public function __construct(
        ShopifyClient $shopifyClient,
        FillOrderAction $fillOrderAction
    )
    {
        parent::__construct();

        $this->shopifyClient = $shopifyClient;
        $this->fillOrderAction = $fillOrderAction;
    }

    public function handle(): int
    {
        User::all()->each(function (User $shop) {
            Auth::login($shop);

            $this->info("Processing $shop->name");

            Order::query()
                ->where('shop_id', $shop->name)
                ->whereNotNull('order_id')
                ->each(fn(Order $order) => $this->update($order));
        });

        $this->info('Done');

        return 0;
    }

    private function update(Order $order): void
    {
        $so = $this->shopifyClient->findOrderById($order->orderId);

        if (!$so) {
            $this->warn("Looks like this order is older than 60 days id=$order->orderId");
            return;
        }

        $this->fillOrderAction->execute($order, $so->toArray());

        $order->save();

        $this->line("Order updated for id=$order->orderId");
    }
}
