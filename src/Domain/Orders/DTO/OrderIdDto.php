<?php

namespace Domain\Orders\DTO;

use Illuminate\Http\Request;
use Infrastructure\DTO\BaseDto;

final class OrderIdDto extends BaseDto
{
    public ?int $orderId;
    public ?string $checkoutToken;

    public static function create(Request $request): OrderIdDto
    {
        $dto = new OrderIdDto();
        $dto->orderId = $request->input('orderId');
        $dto->checkoutToken = $request->input('checkoutToken');
        return $dto;
    }
}
