<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Model;
use Infrastructure\Eloquent\Traits\SnakeCaseable;

/**
 * @property int id
 * @property int orderId
 * @property string shopId
 * @property string orderIdentity
 * @property string canderMessageId
 * @property DateTime notifiedAt
 * @property DateTime createdAt
 * @property int orderNumber
 * @property string customer
 * @property string email
 * @property string title
 * @property string status
 */
class Order extends Model
{
    use SnakeCaseable;

    protected $casts = [
        'order_id' => 'int',
        'notified_at' => 'datetime',
    ];
}
