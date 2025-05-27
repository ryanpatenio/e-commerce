<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('courier_id')->nullable();
            $table->foreignId('payment_id')->nullable();
            $table->foreignId('coupon_id')->nullable();
            $table->decimal('total', 10, 2);
            $table->enum('status', ['pending', 'approved', 'shipped', 'cancelled', 'returned', 'completed']);
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
