<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Setting;
use Exception;
use Illuminate\Support\Facades\Log;

class WidgetActivateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shops = User::get();
        foreach($shops as $shop){

            $scripts = $shop->api()->rest('GET', '/admin/script_tags.json');
            try{
                foreach ($scripts['body']->container['script_tags'] as $script) {
                    if (strpos($script["src"], 'cander-app.js')) {
                        $setting = Setting::updateOrCreate(
                            ['shop_id' => $shop->name],
                            ['activated' => true]
                        );
                        $setting->show_on_order = true;
                        $setting->save();
                        break;
                    }
                }
            } catch(Exception $e) {
                Log::error("Failed to set settings", ['shop' => $shop->name ,'error' => $e, 'scripts' => $scripts]);
            }
        }
    }
}
