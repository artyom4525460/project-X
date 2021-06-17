<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public array $singletons = [
        /** @extends */
        \Infrastructure\Cander\Contracts\CanderClientContract::class => \Infrastructure\Cander\Services\CanderClient::class
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /** @extends */
        \Illuminate\Support\Facades\URL::forceScheme('https');
    }
}
