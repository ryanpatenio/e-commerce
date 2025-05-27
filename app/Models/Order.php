<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'user_id',
        'courier_id',
        'payment_id',
        'coupon_id',
        'total',
        'status',
        'note'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function courier() {
        return $this->belongsTo(Courier::class);
    }

    public function payment() {
        return $this->belongsTo(Payment::class);
    }

    public function coupon() {
        return $this->belongsTo(Coupon::class);
    }

    public function items() {
        return $this->hasMany(OrderItem::class);
    }

    public function transaction(){
        return $this->hasOne(Transaction::class);
    }
}
