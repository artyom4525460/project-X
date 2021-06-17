<?php

namespace Domain\Billing\Repositories;

use App\Models\User;
use Illuminate\Support\Carbon;
use Osiset\ShopifyApp\Objects\Enums\ChargeType;
use Osiset\ShopifyApp\Storage\Models\Charge;

final class ChargeRepository
{
    /**
     * @param User $me
     * @param Carbon $month
     * @return float
     */
    public function getTotalAmount(User $me, Carbon $month): float
    {
        return Charge::query()
            ->where('type', ChargeType::USAGE()->toNative())
            ->where('user_id', $me->getId()->toNative())
            ->whereDate('created_at', '>=', $month->firstOfMonth())
            ->whereDate('created_at', '<=', $month->lastOfMonth())
            ->sum('price');
    }
}
