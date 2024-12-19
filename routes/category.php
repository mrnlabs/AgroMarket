<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories\CategoryController;

    Route::prefix('categories')->group(function () {
        Route::post('/store', [CategoryController::class, 'store'])->name('categories.store');
    });


