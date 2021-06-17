<?php

namespace App\Models;

/**
 * @property int id
 * @property string type
 * @property string name
 * @property float price
 * @property string interval
 * @property float capped_amount
 * @property string terms
 * @property int trial_days
 * @property bool test
 * @property bool on_install
 * @property float price_per_message
 * @property int created_for_user_id
 * @property int free_messages_per_month
 * @property array additional_inclusions
 * @property string color_background
 * @property string color_text
 */
class Plan extends \Osiset\ShopifyApp\Storage\Models\Plan
{

}
