<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Courier extends Model
{
    protected $table = 'couriers';

    protected $fillable = [
        'name',
        'base_fee'
        
    ];

    public function orders() {
        return $this->hasMany(Order::class);
    }

}
