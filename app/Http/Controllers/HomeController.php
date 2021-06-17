<?php

namespace App\Http\Controllers;

use Domain\Billing\Repositories\ChargeRepository;
use Domain\Orders\Repositories\OrderRepository;

class HomeController extends Controller
{
    private OrderRepository $orderRepository;
    private ChargeRepository $chargeRepository;

    public function __construct(
        OrderRepository $orderRepository,
        ChargeRepository $chargeRepository
    )
    {
        $this->orderRepository = $orderRepository;
        $this->chargeRepository = $chargeRepository;
    }

    public function __invoke()
    {
        $stats = [
            'greetings' => $this->orderRepository->get($this->me(), now())->count(),
            'amount' => $this->chargeRepository->getTotalAmount($this->me(), now())
        ];
        return view('dashboard', ['user' => $this->me(), 'stats' => $stats]);
    }
}
