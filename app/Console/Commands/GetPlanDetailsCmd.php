<?php

namespace App\Console\Commands;

use App\Models\User;
use Domain\Billing\Actions\CalculateMessageCostAction;
use Domain\Billing\Actions\IsActiveTrialAction;
use Domain\Stores\Repositories\StoreRepository;
use Illuminate\Console\Command;

class GetPlanDetailsCmd extends Command
{
    protected $signature = 'plan:details {shop}';
    protected $description = 'Get plan details';

    private StoreRepository $storeRepository;
    private IsActiveTrialAction $isActiveTrialAction;
    private CalculateMessageCostAction $calculateMessageCostAction;

    public function __construct(
        StoreRepository $storeRepository,
        IsActiveTrialAction $isActiveTrialAction,
        CalculateMessageCostAction $calculateMessageCostAction
    )
    {
        parent::__construct();

        $this->storeRepository = $storeRepository;
        $this->isActiveTrialAction = $isActiveTrialAction;
        $this->calculateMessageCostAction = $calculateMessageCostAction;
    }

    public function handle(): int
    {
        $me = $this->storeRepository->findByName($this->argument('shop'));
        if (!$me) {
            $this->error('User not found');
            return 1;
        }

        $trialDaysLeft = $this->getTrialDaysLeft($me);
        $cost = $this->calculateMessageCostAction->execute($me);

        $this->table(['Description', 'Value'], [
            ['Free trial', $trialDaysLeft ? "$trialDaysLeft days left" : 'None'],
            ['Current plan', $me->plan ? $me->plan->name : 'None'],
            ['Price per message', $cost ? "$$cost" : 'Free'],
        ]);

        return 0;
    }

    private function getTrialDaysLeft(User $me): int
    {
        if ($this->isActiveTrialAction->execute($me)) {
            return today()->subDays($me->plan->trial_days)->diffInDays($me->widget_activated_at);
        }

        return 0;
    }
}
