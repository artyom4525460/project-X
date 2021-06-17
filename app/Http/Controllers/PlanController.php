<?php

namespace App\Http\Controllers;

use Domain\Billing\DTO\PlanDto;
use Domain\Billing\Repositories\PlanRepository;
use Illuminate\Contracts\View\View;
use Osiset\ShopifyApp\Storage\Models\Plan;

class PlanController extends Controller
{
    private PlanRepository $planRepository;

    public function __construct(
        PlanRepository $planRepository
    )
    {
        $this->planRepository = $planRepository;
    }

    public function index(): View
    {
        $plans = $this->planRepository
            ->getAvailablePlans($this->me())
            ->map(fn(Plan $plan) => PlanDto::create($plan));

        return view('plans', [
            'plans' => $plans,
            'currentPlan' => PlanDto::create($this->me()->plan)
        ]);
    }
}
