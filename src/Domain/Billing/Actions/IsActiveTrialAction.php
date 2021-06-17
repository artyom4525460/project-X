<?php

namespace Domain\Billing\Actions;

use App\Models\User;

final class IsActiveTrialAction
{
    public function execute(User $me): bool
    {
        if (!$me->plan->trial_days || !$me->widget_activated_at) {
            return false;
        }

        return today()->subDays($me->plan->trial_days)->lte($me->widget_activated_at);
    }
}
