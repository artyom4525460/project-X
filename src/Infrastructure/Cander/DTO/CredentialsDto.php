<?php

namespace Infrastructure\Cander\DTO;

use App\Models\User;
use Infrastructure\DTO\BaseDto;

final class CredentialsDto extends BaseDto
{
    public ?int $shopifyId;
    public ?string $token;

    public static function from(User $user): CredentialsDto
    {
        $credentials = new CredentialsDto();
        $credentials->shopifyId = $user->shop_id;
        $credentials->token = $user->password;
        return $credentials;
    }
}
