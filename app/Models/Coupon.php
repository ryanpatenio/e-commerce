<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $table = 'coupons';

    protected $fillable = [
        'code',
        'discount',
        'expiry_date',
        'limit'      
    ];

    public function orders() {
        return $this->hasMany(Order::class);
    }

}
