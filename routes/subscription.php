<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\SubscriptionController;

Route::middleware('auth')->group(function () {
    Route::prefix('subscriptions')->group(function () {
        Route::get('/', [SubscriptionController::class, 'index'])->name('subscriptions.index');
    });
    
});


