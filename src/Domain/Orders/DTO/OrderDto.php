<?php

namespace Domain\Orders\DTO;

use DateTime;
use Infrastructure\DTO\BaseDto;

final class OrderDto extends BaseDto
{
    public int $id;
    public ?int $orderNumber;
    public ?string $customer;
    public ?string $email;
    public ?string $title;
    public ?string $status;
    public string $createdAt;
    public ?DateTime $notifiedAt;
    public string $canderMessageId;
}
