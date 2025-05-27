<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{

    protected $table = 'feedbacks';

    protected $fillable = [
        'user_id',
        'product_id',
        'stars',
        'comment'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }

}
