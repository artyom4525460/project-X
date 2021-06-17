<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\RequestException;
use Infrastructure\Cander\Contracts\CanderClientContract;

class HealthController extends Controller
{
    private CanderClientContract $canderClient;

    public function __construct(
        CanderClientContract $canderClient
    )
    {
        $this->canderClient = $canderClient;
    }

    public function __invoke(): array
    {
        $connected = true;
        try {
            $this->canderClient->signin($this->getCredentials());
        } catch (RequestException $e) {
            $connected = false;
        }

        return [
            'cander' => [
                'api' => $connected ? 'active' : 'inactive'
            ]
        ];
    }
}
