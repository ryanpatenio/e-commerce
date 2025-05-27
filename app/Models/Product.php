<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'category_id'
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function feedbacks() {
        return $this->hasMany(Feedback::class);
    }

    public function cartItems() {
        return $this->hasMany(CartItem::class);
    }

    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }
    public function inventory(){
        return $this->hasOne(Inventory::class);
    }

}
