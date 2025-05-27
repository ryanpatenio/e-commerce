<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payments';

    protected $fillable = [
        'method',
        'gatewayname',      
    ];

    public function orders() {
        return $this->hasMany(Order::class);
    }

    public function transactions(){
        return $this->hasMany(Transaction::class);
    }
}
