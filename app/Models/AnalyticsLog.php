<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnalyticsLog extends Model
{
    protected $table = 'analytics_logs';

    protected $fillable = [
        'user_id',
        'action',
        'description',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

}
