<?php

namespace Domain\Orders\Actions;

use Domain\Orders\DTO\OrderIdDto;
use Infrastructure\Shopify\Services\ShopifyClient;
use Osiset\BasicShopifyAPI\ResponseAccess;

final class FindOrderByIdentificationAction
{
    private ShopifyClient $shopifyClient;

    public function __construct(ShopifyClient $shopifyClient)
    {
        $this->shopifyClient = $shopifyClient;
    }

    public function execute(OrderIdDto $dto, array $fields = []): ?ResponseAccess
    {
        if ($dto->orderId) {
            return $this->shopifyClient->findOrderById($dto->orderId, $fields);
        }

        if ($dto->checkoutToken) {
            return $this->shopifyClient->findOrderByCheckoutToken($dto->checkoutToken);
        }

        return null;
    }
}
