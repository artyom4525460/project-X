<?php namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Infrastructure\Concerns\Login;
use Infrastructure\Concerns\Me;
use stdClass;

class OrdersFulfilledJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Login, Me;

    private string $domain;
    private array $data;

    public function __construct(string $domain, stdClass $data)
    {
        $this->domain = $domain;
        $this->data = (array)$data;
    }

    public function handle(): void
    {
        $orderId = $this->data['id'];

        // Log::debug("Handling $this->domain [orders/fulfilled] topic for orderId=$orderId");
    }
}
