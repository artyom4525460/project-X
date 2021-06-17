<?php

namespace Infrastructure\Concerns;

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Infrastructure\Shopify\Exceptions\ShopifyException;
use Osiset\ShopifyApp\Contracts\Queries\Shop as IShopQuery;
use Osiset\ShopifyApp\Objects\Values\ShopDomain;
use Osiset\ShopifyApp\Objects\Values\ShopId;

trait Login
{
    /** @return User|Authenticatable */
    public function loginUsingShopId(ShopId $shopId): User
    {
        return Auth::loginUsingId($shopId->toNative());
    }

    /** @throws ShopifyException */
    public function login(IShopQuery $shopQuery, string $domain): User
    {
        $user = $shopQuery->getByDomain(ShopDomain::fromNative($domain));

        if (!$user) {
            throw new ShopifyException("User not found for domain=$domain");
        }

        Auth::login($user);

        return $user;
    }
}
