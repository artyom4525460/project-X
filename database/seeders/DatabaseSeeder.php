<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /** @extends */
        $this->call(PlanSeeder::class);
        $this->call(WidgetActivateSeeder::class);
    }
}
