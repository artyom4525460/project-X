<?php

namespace Domain\Stores\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

final class StoreRepository
{
    /** @return User|Model|null */
    public function findByName(string $name): ?User
    {
        return User::query()->firstWhere('name', $name);
    }
}
