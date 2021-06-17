<?php

namespace Domain\Billing\Actions;

use App\Models\User;
use Domain\Orders\Repositories\OrderRepository;
use Osiset\ShopifyApp\Services\ChargeHelper;
use Osiset\ShopifyApp\Storage\Models\Plan;

final class CalculateMessageCostAction
{
    private ChargeHelper $chargeHelper;
    private OrderRepository $orderRepository;
    private IsActiveTrialAction $isActiveTrialAction;

    public function __construct(
        ChargeHelper $chargeHelper,
        OrderRepository $orderRepository,
        IsActiveTrialAction $isActiveTrialAction
    )
    {
        $this->chargeHelper = $chargeHelper;
        $this->orderRepository = $orderRepository;
        $this->isActiveTrialAction = $isActiveTrialAction;
    }

    public function execute(User $me): float
    {
        $plan = $me->plan;

        if ($this->isActiveTrialAction->execute($me)) {
            return 0;
        }

        if ($plan->free_messages_per_month) {
            $messages = $this->orderRepository->getTotalMessagesForCurrentMonth($me->name);
            if ($messages <= $plan->free_messages_per_month) {
                return 0;
            }
        }

        return $plan->price_per_message;
    }

    /** @param \App\Models\Plan $plan */
    private function isActiveTrial(Plan $plan, User $me): bool
    {
        $pc = $this->chargeHelper->chargeForPlan($plan->getId(), $me);

        if (!$pc) {
            return $plan->trial_days > 0;
        }

        $this->chargeHelper->useCharge($pc->getReference());

        return $this->chargeHelper->isActiveTrial();
    }
}
