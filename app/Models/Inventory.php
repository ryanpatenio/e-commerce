<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $table = 'inventories';

    protected $fillable = [
        'product_id',
        'quantity',
        'restocked_at'
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
