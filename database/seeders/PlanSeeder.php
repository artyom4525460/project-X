<?php

namespace Database\Seeders;

use Domain\Billing\DTO\PlanDto;
use Illuminate\Database\Seeder;
use Osiset\ShopifyApp\Objects\Enums\PlanInterval;
use Osiset\ShopifyApp\Objects\Enums\PlanType;
use Osiset\ShopifyApp\Storage\Models\Plan;

class PlanSeeder extends Seeder
{
    public function run(): void
    {
        $free = new PlanDto();
        $free->id = 1;
        $free->name = 'Free';
        $free->default = true;
        $free->trialDays = 30;
        $free->pricePerMessage = 2;
        $free->freeMessagesPerMonth = 0;
        $free->additionalInclusions = [
            "Cander website delivery",
            "300+ greeting cards",
            "QR code for gift messages",
            "SMS delivery"
        ];
        $free->colorBackground = '#DAF2F5';
        $free->colorText = '#13455E';

        $basic = new PlanDto();
        $basic->id = 2;
        $basic->name = 'Basic';
        $basic->pricePerMonth = 99;
        $basic->pricePerMessage = 1;
        $basic->freeMessagesPerMonth = 100;
        $basic->additionalInclusions = [
            "Cander website delivery",
            "300+ greeting cards",
            "QR code for gift messages",
            "SMS delivery"
        ];
        $basic->colorBackground = '#91CBD3';
        $basic->colorText = '#13455E';

        $pro = new PlanDto();
        $pro->id = 3;
        $pro->name = 'Pro';
        $pro->pricePerMonth = 499;
        $pro->pricePerMessage = 1;
        $pro->freeMessagesPerMonth = 1000;
        $pro->additionalInclusions = [
            "In-store delivery",
            "Customized call-to-action",
            "300+ greeting cards",
            "Customized QR code",
            "SMS Delivery"
        ];
        $pro->colorBackground = '#2B9AA9';
        $pro->colorText = '#FFFFFF';

        $this->create([$free, $basic, $pro]);
    }

    /** @param PlanDto[] $dtos */
    private function create(array $dtos): void
    {
        foreach ($dtos as $dto) {
            /** @var \App\Models\Plan $plan */
            $plan = Plan::query()->find($dto->id) ?: new Plan();
            $plan->type = PlanType::RECURRING()->toNative();
            $plan->name = $dto->name;
            $plan->price = $dto->pricePerMonth;
            $plan->capped_amount = 1000;
            $plan->terms = $dto->freeMessagesPerMonth ? "$dto->freeMessagesPerMonth messages" : "\$$dto->pricePerMessage per message.";
            $plan->trial_days = $dto->trialDays;
            $plan->test = !app()->environment('production');
            $plan->on_install = $dto->default;
            $plan->interval = PlanInterval::EVERY_30_DAYS()->toNative();
            $plan->price_per_message = $dto->pricePerMessage;
            $plan->free_messages_per_month = $dto->freeMessagesPerMonth;
            $plan->additional_inclusions = json_encode($dto->additionalInclusions);
            $plan->color_background = $dto->colorBackground;
            $plan->color_text = $dto->colorText;
            $plan->save();
        }
    }
}
