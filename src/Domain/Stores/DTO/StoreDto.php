<?php

namespace Domain\Stores\DTO;

use Illuminate\Support\Carbon;
use Infrastructure\DTO\BaseDto;

final class StoreDto extends BaseDto
{
    public int $shopifyId;
    public string $name;
    public string $email;
    public string $token;
    public string $country;
    public string $zip;
    public string $city;
    public string $address;
    public Carbon $installedAt;
}
