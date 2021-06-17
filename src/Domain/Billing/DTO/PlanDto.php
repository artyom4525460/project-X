<?php

namespace Domain\Billing\DTO;

use Infrastructure\DTO\BaseDto;
use Osiset\ShopifyApp\Storage\Models\Plan;

final class PlanDto extends BaseDto
{
    public ?int $id = null;
    public string $name = 'None';
    public string $terms = 'None';
    public bool $default = false;
    public int $trialDays = 0;
    public float $pricePerMonth = 0;
    public float $pricePerMessage = 0;
    public float $freeMessagesPerMonth = 0;
    public array $additionalInclusions = [];
    public string $colorBackground = '#000000';
    public string $colorText = '#FFFFFF';

    /** @param \App\Models\Plan|null $plan */
    public static function create(?Plan $plan): PlanDto
    {
        if (!$plan) {
            return new PlanDto();
        }

        $dto = new PlanDto();
        $dto->id = $plan->id;
        $dto->name = $plan->name;
        $dto->terms = $plan->terms;
        $dto->default = $plan->on_install;
        $dto->trialDays = $plan->trial_days;
        $dto->pricePerMonth = $plan->price;
        $dto->pricePerMessage = $plan->price_per_message;
        $dto->freeMessagesPerMonth = $plan->free_messages_per_month;
        $dto->additionalInclusions = json_decode($plan->additional_inclusions, true);
        $dto->colorBackground = $plan->color_background;
        $dto->colorText = $plan->color_text;
        return $dto;
    }
}
