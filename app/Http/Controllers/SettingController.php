<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Domain\Billing\Repositories\PlanRepository;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Infrastructure\Shopify\Services\ShopifyClient;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    private ShopifyClient $shopifyClient;
    private PlanRepository $planRepository;

    public function __construct(
        ShopifyClient $shopifyClient,
        PlanRepository $planRepository
    )
    {
        $this->shopifyClient = $shopifyClient;
        $this->planRepository = $planRepository;
    }

    public function configureTheme(): array
    {
        $shop = Auth::user();

        Setting::updateOrCreate(
            ['shop_id' => $shop->name],
            ['activated' => true]
        );

        return ['message' => 'Theme setup successfully'];
    }

    public function index(): View
    {
        $shop = Auth::user();

        $settings = Setting::whereShopId($shop->name)->first();

        return view('settings', ['settings' => $settings, 'url' => $shop->name]);
    }

    public function insertWidget($scope = 'all'): array
    {
        $shop = Auth::user();

        $scripts = $shop->api()->rest('GET', '/admin/script_tags.json');

        $canderJssId = "";
        foreach ($scripts['body']->container['script_tags'] as $script) {
            if (strpos($script["src"], 'cander-app.js')) {
                $canderJssId = $script['id'];
            }
        }

        $url = Config::get('app.url');

        if ($canderJssId != "") {
            $array = array(
                'script_tag' => array(
                    'id' => $canderJssId,
                    'src' => ($url . '/js/cander-app.js?hash=' . time()),
                    'display_scope' => $scope
                )
            );
            $result = $shop->api()->rest('PUT', '/admin/script_tags/' . $canderJssId . '.json', $array);
        } else {
            $array = array(
                'script_tag' => array(
                    'event' => 'onload',
                    'src' => ($url . '/js/cander-app.js?hash=' . time()),
                    'display_scope' => $scope
                )
            );
            $result = $shop->api()->rest('POST', '/admin/script_tags.json', $array);
        }

        logger("Store {$shop->name} installed script");

        return ['message' => 'Script updated successfully'];
    }

    public function deleteWidget(): array
    {
        $shop = Auth::user();

        $scripts = $shop->api()->rest('GET', '/admin/script_tags.json');

        $canderJssId = "";
        foreach ($scripts['body']->container['script_tags'] as $script) {
            if (strpos($script["src"], 'cander-app.js')) {
                $canderJssId = $script['id'];
            }
        }

        $result = $shop->api()->rest('DELETE', '/admin/script_tags/' . $canderJssId . '.json');

        logger("Store {$shop->name} deleted script");

        return ['message' => 'Script deleted successfully'];
    }


    public function updateSettings(Request $request): array
    {
        $shop = Auth::user();
        $activated = $request->input('activated');
        $showing = $request->input('showing');

        $showOnCart = $showOnOrder = false;
        switch ($showing) {
            case 'showOrder':
                $showOnOrder = true;
                break;
            case 'showCart':
                $showOnCart = true;
                break;
            case 'showAll':
                $showOnOrder = $showOnCart = true;
                break;
            default:
                $showOnCart = $showOnOrder = false;
                break;
        }

        if($activated){
            if(!$showOnOrder){
                $this->insertWidget('online_store');
            } else {
                $this->insertWidget('all');
            }
        } else {
            $this->deleteWidget();
        }

        $setting = Setting::updateOrCreate(
            ['shop_id' => $shop->name],
            ['activated' => $activated]
        );
        $setting->show_on_cart = $showOnCart;
        $setting->show_on_order = $showOnOrder;
        $setting->save();

        return ['message' => 'Settings update successfully'];
    }

    public function getSettings()
    {
        $shop = Auth::user();

        $setting = Setting::whereShopId($shop->name)->first();

        if(!$setting){
            return ['error' => 'please, activate the cander widget in admin panel'];
        }

        return ['activated' => $setting->activated, 'showOnCart' => $setting->show_on_cart, 'showOnOrder' => $setting->show_on_order];
    }
}
