<?php

namespace Domain\Orders\Utils;

use Osiset\BasicShopifyAPI\ResponseAccess;

final class OrderUtils
{
    public static function getNoteAttribute(ResponseAccess $order, string $name): ?string
    {
        foreach ($order['note_attributes'] as $attribute) {
            if ($attribute->name == $name) {
                return $attribute->value;
            }
        }
        return null;
    }
}
