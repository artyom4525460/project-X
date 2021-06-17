<?php

namespace Infrastructure\Cander\Contracts;

use Domain\Analytics\DTO\AppAnalyticsDto;
use Domain\Analytics\DTO\WidgetAnalyticsDto;
use Domain\Messages\DTO\MessageDto;
use Domain\Messages\DTO\ParticipantDto;
use Domain\Stores\DTO\StoreDto;
use Illuminate\Http\Client\RequestException;
use Infrastructure\Cander\DTO\CredentialsDto;

interface CanderClientContract
{
    /**
     * @param StoreDto $store
     * @throws RequestException
     */
    public function signup(StoreDto $store): void;

    /**
     * @param CredentialsDto $credentials
     * @return string
     * @throws RequestException
     */
    public function signin(CredentialsDto $credentials): string;

    /**
     * @param CredentialsDto $credentials
     * @return array
     * @throws RequestException
     */
    public function getCards(CredentialsDto $credentials): array;

    /**
     * @param string $messageId
     * @return string
     * @throws RequestException
     */
    public function getQrCodeByMessage(string $messageId): string;

    /**
     * @param string $shop
     * @return string
     * @throws RequestException
     */
    public function getQrCodeByShop(string $shop): string;

    /**
     * @param CredentialsDto $credentials
     * @param MessageDto $message
     * @return string
     * @throws RequestException
     */
    public function createMessage(CredentialsDto $credentials, MessageDto $message): string;

    /**
     * @param CredentialsDto $credentials
     * @param string $messageId
     * @param ParticipantDto $sender
     * @return void
     * @throws RequestException
     */
    public function updateParticipants(CredentialsDto $credentials, string $messageId, ParticipantDto $sender): void;

    /**
     * @param CredentialsDto $credentials
     * @param string $messageId
     * @throws RequestException
     */
    public function sendNotifications(CredentialsDto $credentials, string $messageId): void;

    /**
     * @param CredentialsDto $credentials
     * @param AppAnalyticsDto $appAnalyticsDto
     */
    public function sendAppAnalytics(CredentialsDto $credentials, AppAnalyticsDto $appAnalyticsDto): void;

    /**
     * @param CredentialsDto $credentials
     * @param WidgetAnalyticsDto $widgetAnalyticsDto
     */
    public function sendWidgetAnalytics(CredentialsDto $credentials, WidgetAnalyticsDto $widgetAnalyticsDto): void;
}
