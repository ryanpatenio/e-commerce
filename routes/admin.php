<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Middleware\HandleAdminInertiaRequests;
use Illuminate\Support\Facades\Route;


Route::middleware(['admin.and.staff',HandleAdminInertiaRequests::class])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});
 