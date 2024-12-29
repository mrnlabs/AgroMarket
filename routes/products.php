<?php

use App\Http\Controllers\Products\ProductController;
use Illuminate\Support\Facades\Route;



    Route::prefix('shop')->group(function () {
        Route::get('/all', [ProductController::class, 'index'])->name('products.index');
    });


