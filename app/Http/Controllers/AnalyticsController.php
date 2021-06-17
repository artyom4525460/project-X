<?php

namespace App\Http\Controllers;

use Domain\Analytics\DTO\AppAnalyticsDto;
use Domain\Analytics\DTO\WidgetAnalyticsDto;
use Illuminate\Http\Response;
use Infrastructure\Cander\Contracts\CanderClientContract;

class AnalyticsController extends Controller
{
    private CanderClientContract $canderClient;

    public function __construct(CanderClientContract $canderClient)
    {
        $this->canderClient = $canderClient;
    }

    public function widgetInstalledEvent(): Response
    {
        $dto = new AppAnalyticsDto();
        $dto->widgetInstalledAt = now();
        $dto->widgetUninstalledAt = null;
        $this->canderClient->sendAppAnalytics($this->getCredentials(), $dto);
        return response()->noContent();
    }

    public function widgetUninstalledEvent(): Response
    {
        $dto = new AppAnalyticsDto();
        $dto->widgetUninstalledAt = now();
        $this->canderClient->sendAppAnalytics($this->getCredentials(), $dto);
        return response()->noContent();
    }

    public function widgetImpressionEvent(): Response
    {
        $me = $this->me();

        if (!$me->widget_activated_at) {
            $me->widget_activated_at = now();
            $me->save();
        }

        $dto = new WidgetAnalyticsDto();
        $dto->impressions = 1;
        $this->canderClient->sendWidgetAnalytics($this->getCredentials(), $dto);
        return response()->noContent();
    }

    public function widgetClickEvent(): Response
    {
        $dto = new WidgetAnalyticsDto();
        $dto->clicks = 1;
        $this->canderClient->sendWidgetAnalytics($this->getCredentials(), $dto);
        return response()->noContent();
    }

    public function widgetActionEvent(): Response
    {
        $dto = new WidgetAnalyticsDto();
        $dto->actions = 1;
        $this->canderClient->sendWidgetAnalytics($this->getCredentials(), $dto);
        return response()->noContent();
    }
}
