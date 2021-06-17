<?php

namespace Domain\Orders\DTO;

use Illuminate\Http\Request;
use Infrastructure\DTO\BaseDto;

final class CheckoutOrderDto extends BaseDto
{
    public ?int $orderId;
    public ?string $orderIdentity;
    public string $shopId;
    public ?string $checkoutToken;

    public static function create(Request $request): CheckoutOrderDto
    {
        $dto = new CheckoutOrderDto();
        $dto->orderId = $request->input('order.id');
        $dto->orderIdentity = $request->input('order.identity');
        $dto->shopId = $request->input('order.domain');
        $dto->checkoutToken = $request->input('order.checkout.token', '');
        return $dto;
    }
}
