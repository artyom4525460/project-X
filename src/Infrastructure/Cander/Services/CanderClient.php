<?php

namespace Infrastructure\Cander\Services;

use Domain\Analytics\DTO\AppAnalyticsDto;
use Domain\Analytics\DTO\WidgetAnalyticsDto;
use Domain\Messages\DTO\MessageDto;
use Domain\Messages\DTO\ParticipantDto;
use Domain\Stores\DTO\StoreDto;
use Illuminate\Http\Client\Factory;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Infrastructure\Cander\Contracts\CanderClientContract;
use Infrastructure\Cander\DTO\CredentialsDto;
use Infrastructure\Cander\Enums\MediaFilename;
use Infrastructure\DTO\BaseDto;
use Throwable;

final class CanderClient implements CanderClientContract
{
    const UserAgent = 'Cander-Shopify/1';
    const CNAccessHeader = 'X-CN-ACCESS';

    private Factory $http;
    private string $baseUrl;

    public function __construct(Factory $http)
    {
        $this->http = $http;
        $this->baseUrl = config('cander.url');
    }

    /**
     * @param CredentialsDto $credentials
     * @return string
     */
    private function getAccessToken(CredentialsDto $credentials): string
    {
        $key = "access_token:{$credentials->shopifyId}";

        return Cache::remember($key, now()->addHour(), fn() => $this->signin($credentials));
    }

    /**
     * @param CredentialsDto $credentials
     * @param string $url
     * @param BaseDto $dto
     */
    private function post(CredentialsDto $credentials, string $url, BaseDto $dto): void
    {
        try {
            $this->http
                ->baseUrl($this->baseUrl)
                ->withUserAgent(CanderClient::UserAgent)
                ->withToken($this->getAccessToken($credentials))
                ->post($url, $dto->toArray())
                ->throw();
        } catch (Throwable $e) {
            Log::error($e);
        }
    }

    /** @inheritdoc */
    public function signup(StoreDto $store): void
    {
        $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->post('api/shopify/signup', $store->toArray())
            ->throw();
    }

    /** @inheritdoc */
    public function signin(CredentialsDto $credentials): string
    {
        $headers = $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->post('api/shopify/signin', $credentials->toArray())
            ->throw()
            ->headers();

        return $headers[CanderClient::CNAccessHeader][0];
    }

    /** @inheritdoc */
    public function getCards(CredentialsDto $credentials): array
    {
        $res = $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->withToken($this->getAccessToken($credentials))
            ->get('api/cards/categories/')
            ->throw()
            ->json();

        return $res['cardCategories'];
    }

    /** @inheritdoc */
    public function getQrCodeByMessage(string $messageId): string
    {
        return $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->get("api/messaging/submissions/qr/$messageId")
            ->throw();
    }

    /** @inheritdoc */
    public function getQrCodeByShop(string $shop): string
    {
        $params = [
            'store' => $shop
        ];

        return $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->get('api/messaging/stores/qr', $params)
            ->throw();
    }

    /** @inheritdoc */
    public function createMessage(CredentialsDto $credentials, MessageDto $message): string
    {
        $json = [
            'mediaUrl' => $message->media->url,
            'mediaType' => $message->media->type->value(),
            'senderName' => $message->sender->name,
            'senderPhoneNumber' => $message->sender->phoneNumber,
            'senderEmailAddress' => $message->sender->emailAddress,
            'recipientName' => $message->recipient->name,
            'recipientPhoneNumber' => $message->recipient->phoneNumber,
            'recipientEmailAddress' => $message->recipient->emailAddress,
            'greetingCardId' => $message->card->id
        ];

        $request = $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->withToken($this->getAccessToken($credentials))
            ->asMultipart();

        if ($message->media->file) {
            $filename = MediaFilename::create($message->media->type);
            $request->attach('mediaFile', file_get_contents($message->media->file), $filename);
        }

        $res = $request
            ->post('api/shopify/submissions', $json)
            ->throw()
            ->json();

        return explode('$', $res['submissionIdSigned'])[0];
    }

    /** @inheritdoc */
    public function updateParticipants(CredentialsDto $credentials, string $messageId, ParticipantDto $sender): void
    {
        $json = [
            'sender' => [
                'name' => $sender->name,
                'phoneNumber' => $sender->phoneNumber,
                'emailAddress' => $sender->emailAddress
            ]
        ];

        $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->withToken($this->getAccessToken($credentials))
            ->put("api/shopify/submissions/$messageId/participants", $json)
            ->throw()
            ->json();
    }

    /** @inheritdoc */
    public function sendNotifications(CredentialsDto $credentials, string $messageId): void
    {
        $this->http
            ->baseUrl($this->baseUrl)
            ->withUserAgent(CanderClient::UserAgent)
            ->withToken($this->getAccessToken($credentials))
            ->post("api/shopify/submissions/${messageId}/send-notifications")
            ->throw()
            ->json();
    }

    /** @inheritdoc */
    public function sendAppAnalytics(CredentialsDto $credentials, AppAnalyticsDto $appAnalyticsDto): void
    {
        $this->post($credentials, 'api/shopify/analytics/app', $appAnalyticsDto);
    }

    /** @inheritdoc */
    public function sendWidgetAnalytics(CredentialsDto $credentials, WidgetAnalyticsDto $widgetAnalyticsDto): void
    {
        $this->post($credentials, 'api/shopify/analytics/widget', $widgetAnalyticsDto);
    }
}
