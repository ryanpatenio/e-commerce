<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSearchLog extends Model
{
    protected $table = 'product_search_logs';

    protected $fillable = [
        'user_id',
        'keyword'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
