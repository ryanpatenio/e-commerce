<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $order_id
 * @property int $user_id
 * @property int $payment_id
 * @property string $transaction_ref
 * @property float $amount_paid
 * @property string $status
 * @property string|null $payload
 * @property \Carbon\Carbon|null $paid_at
 */

class Transaction extends Model
{
    protected $table = 'transactions';
    
    protected $fillable = [
        'order_id',
        'user_id',
        'payment_id',
        'transaction_ref',
        'amount_paid',
        'status',
        'payload',
        'paid_at',
    ];

    protected $casts = [
        'payload' => 'array',
        'paid_at' => 'datetime',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function payment(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }
}
