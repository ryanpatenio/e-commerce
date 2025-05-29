<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Middleware\HandleAdminInertiaRequests;
use Illuminate\Support\Facades\Route;


Route::middleware(['admin.and.staff',HandleAdminInertiaRequests::class])->group(function () {
    
});
Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::resource('products',ProductController::class)->except('index');
 