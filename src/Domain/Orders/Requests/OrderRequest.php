<?php

namespace Domain\Orders\Requests;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Infrastructure\DTO\BaseDto;
use InvalidArgumentException;

final class OrderRequest extends BaseDto
{
    public Carbon $period;

    public static function create(Request $request): OrderRequest
    {
        $period = $request->input('period', Carbon::now()->format('Y-m'));
        $parsed = Carbon::createFromFormat('Y-m', $period);
        if (!$parsed instanceof Carbon) {
            throw new InvalidArgumentException('The [period] field is invalid. Format should be [Y-m].');
        }

        $dto = new OrderRequest();
        $dto->period = $parsed;
        return $dto;
    }
}
