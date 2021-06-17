<?php

namespace Infrastructure\Shopify\Services;

use Illuminate\Support\Carbon;
use Infrastructure\Concerns\Me;
use Infrastructure\Shopify\Exceptions\ShopifyException;
use Infrastructure\Utils\Arrays;
use Osiset\BasicShopifyAPI\ResponseAccess;
use RuntimeException;

final class ShopifyClient
{
    use Me;

    /** @throws ShopifyException */
    private function validate(array $res, string $message = null): void
    {
        if (!$this->successful($res)) {
            throw new ShopifyException($message ?: $res['body']);
        }
    }

    private function successful(array $res): bool
    {
        return $res['status'] >= 200 && $res['status'] < 300;
    }

    public function shop(): ResponseAccess
    {
        return $this->me()->api()->rest('GET', '/admin/shop.json')['body']['shop'];
    }

    public function scripts(): ResponseAccess
    {
        return $this->me()->api()->rest('GET', '/admin/script_tags.json')['body']['script_tags'];
    }

    public function getOrders(Carbon $datetime): ResponseAccess
    {
        $params = [
            'created_at_min' => $datetime->firstOfMonth()->toIso8601String(),
            'created_at_max' => $datetime->lastOfMonth()->endOfDay()->toIso8601String(),
            'status' => 'any',
            'limit' => 250
        ];

        return $this->me()->api()->rest('GET', '/admin/orders.json', $params)['body']['orders'];
    }

    public function findOrderById(int $id, array $fields = []): ?ResponseAccess
    {
        $params = [
            'fields' => Arrays::join($fields, ',')
        ];

        $res = $this->me()->api()->rest('GET', "/admin/orders/$id.json", $params);

        return $this->successful($res) ? $res['body']['order'] : null;
    }

    public function findOrderByCheckoutToken(string $checkoutToken): ?ResponseAccess
    {
        $params = [
            'limit' => 5
        ];

        $orders = $this->me()->api()->rest('GET', '/admin/orders.json', $params)['body']['orders'];

        foreach ($orders as $order) {
            if ($order['checkout_token'] == $checkoutToken) {
                return $order;
            }
        }

        return null;
    }

    public function getOrderIdByCheckoutToken(string $checkoutToken): int
    {
        $order = $this->findOrderByCheckoutToken($checkoutToken);

        if (!$order) {
            throw new RuntimeException("Order not found for checkoutToken=$checkoutToken");
        }

        return $order['id'];
    }

    /** @throws ShopifyException */
    public function updateOrderTags(int $orderId, array $tags): void
    {
        $params = [
            'order' => [
                'id' => $orderId,
                'tags' => Arrays::join($tags, ', ')
            ]
        ];

        $res = $this->me()->api()->rest('PUT', "/admin/orders/$orderId.json", $params);

        $this->validate($res);
    }
}
