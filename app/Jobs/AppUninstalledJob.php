<?php

namespace App\Jobs;

use Illuminate\Support\Facades\Log;
use Osiset\ShopifyApp\Actions\CancelCurrentPlan;
use Osiset\ShopifyApp\Contracts\Commands\Shop as IShopCommand;
use Osiset\ShopifyApp\Contracts\Queries\Shop as IShopQuery;

class AppUninstalledJob extends \Osiset\ShopifyApp\Messaging\Jobs\AppUninstalledJob
{
    public function handle(
        IShopCommand $shopCommand,
        IShopQuery $shopQuery,
        CancelCurrentPlan $cancelCurrentPlanAction
    ): bool
    {
        $res = parent::handle($shopCommand, $shopQuery, $cancelCurrentPlanAction);

        if ($res) {
            Log::info("App {$this->domain->toNative()} uninstalled successfully");
        }

        return $res;
    }
}
