<?php

namespace App\Jobs;

use Domain\Stores\Actions\RegisterStoreAction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\Client\RequestException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Infrastructure\Concerns\Me;

class AfterAuthenticateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Me;

    /** @throws RequestException */
    public function handle(RegisterStoreAction $registerStoreAction): void
    {
        Log::info("Registering {$this->me()->name} store");

        $registerStoreAction->execute();

        Log::info("Registering {$this->me()->name} store | done");
    }
}
