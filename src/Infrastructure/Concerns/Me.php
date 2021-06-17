<?php

namespace Infrastructure\Concerns;

use App\Models\User;
use DomainException;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Infrastructure\Cander\DTO\CredentialsDto;

trait Me
{
    /** @return User|Authenticatable */
    public function me(): User
    {
        $me = Auth::user();
        if (!$me) {
            throw new DomainException('To perform this action you must be logged in to Shopify.');
        }
        return $me;
    }

    public function getCredentials(): CredentialsDto
    {
        return CredentialsDto::from($this->me());
    }
}
