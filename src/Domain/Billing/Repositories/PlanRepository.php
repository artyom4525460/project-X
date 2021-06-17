<?php

namespace Domain\Billing\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Osiset\ShopifyApp\Storage\Models\Plan;

final class PlanRepository
{
    /** @return Collection|Plan[] */
    public function getAvailablePlans(User $me): Collection
    {
        return Plan::query()
            ->whereNull('created_for_user_id')
            ->orWhere('created_for_user_id', $me->getId()->toNative())
            ->get();
    }
}
