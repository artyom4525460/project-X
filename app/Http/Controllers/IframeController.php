<?php

namespace App\Http\Controllers;

use Domain\Billing\Repositories\PlanRepository;
use Infrastructure\Shopify\Services\ShopifyClient;
use Infrastructure\Cander\Contracts\CanderClientContract;

class IframeController extends Controller
{
    public function __construct(
        private ShopifyClient $shopifyClient,
        private PlanRepository $planRepository,
        private CanderClientContract $canderClient,
    )
    {
        $this->shopifyClient = $shopifyClient;
        $this->planRepository = $planRepository;
        $this->canderClient = $canderClient;
    }

    public function getIframe()
    {
        $cards = $this->canderClient
            ->getCards($this->getCredentials());

        return view('iframe', [
            'cards' => $cards
        ]);
    }
}
