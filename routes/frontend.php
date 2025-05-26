<?php

use App\Http\Controllers\FrontEnd\HomeController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth',HandleInertiaRequests::class])->group(function(){
    
});
Route::get('/', [HomeController::class, 'index']);