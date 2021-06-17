<?php

namespace Domain\Messages\DTO;

use Infrastructure\DTO\BaseDto;

final class ParticipantDto extends BaseDto
{
    public ?string $name;
    public ?string $phoneNumber;
    public ?string $emailAddress;
}
