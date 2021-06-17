<?php

namespace Domain\Stores\Actions;

use Domain\Stores\DTO\StoreDto;
use Illuminate\Http\Client\RequestException;
use Infrastructure\Cander\Contracts\CanderClientContract;
use Infrastructure\Shopify\Services\ShopifyClient;

final class RegisterStoreAction
{
    private ShopifyClient $shopifyClient;
    private CanderClientContract $canderClient;

    public function __construct(
        ShopifyClient $shopifyClient,
        CanderClientContract $canderClient
    )
    {
        $this->shopifyClient = $shopifyClient;
        $this->canderClient = $canderClient;
    }

    /**
     * @throws RequestException
     */
    public function execute(): void
    {
        $user = $this->shopifyClient->me();
        $shop = $this->shopifyClient->shop();

        $dto = new StoreDto();
        $dto->shopifyId = $shop['id'];
        $dto->name = $user->name;
        $dto->email = $shop['email'];
        $dto->token = $user->getToken()->toNative();
        $dto->country = $shop['country'];
        $dto->zip = $shop['zip'];
        $dto->city = $shop['city'];
        $dto->address = $shop['address1'];
        $dto->installedAt = now();
        $this->canderClient->signup($dto);

        $user->shop_id = $shop['id'];
        $user->save();
    }
}
