<?php

namespace Domain\Analytics\DTO;

use Infrastructure\DTO\BaseDto;

final class WidgetAnalyticsDto extends BaseDto
{
    public int $impressions = 0;
    public int $clicks = 0;
    public int $actions = 0;
}
