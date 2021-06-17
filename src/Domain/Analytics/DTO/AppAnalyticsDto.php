<?php

namespace Domain\Analytics\DTO;

use Illuminate\Support\Carbon;
use Infrastructure\DTO\BaseDto;

final class AppAnalyticsDto extends BaseDto
{
    public ?Carbon $widgetInstalledAt;
    public ?Carbon $widgetUninstalledAt;
}
