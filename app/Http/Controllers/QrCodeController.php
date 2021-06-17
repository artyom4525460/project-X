<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Client\RequestException;
use Infrastructure\Cander\Contracts\CanderClientContract;

class QrCodeController extends Controller
{
    private CanderClientContract $canderClient;

    public function __construct(
        CanderClientContract $canderClient
    )
    {
        $this->canderClient = $canderClient;
    }

    /** @throws RequestException */
    public function getQrCodeByMessage(string $messageId): string
    {
        return base64_encode($this->canderClient->getQrCodeByMessage($messageId));
    }

    /** @throws RequestException */
    public function getQrCodeByShop(): string
    {
        return base64_encode($this->canderClient->getQrCodeByShop($this->me()->name));
    }

    /** @throws RequestException */
    public function index(): View
    {
        $qrCode = base64_encode($this->canderClient->getQrCodeByShop($this->me()->name));

        return view('qrcode', compact('qrCode'));
    }
}
