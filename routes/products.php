<?php

use App\Http\Controllers\Products\ProductController;
use Illuminate\Support\Facades\Route;



    Route::prefix('shop')->group(function () {
        Route::get('/all', [ProductController::class, 'shop'])->name('products.index');
        Route::get('/product-details', [ProductController::class, 'index'])->name('products.index');
        Route::get('/product-details/{id}', [ProductController::class, 'show'])->name('products.show');
    });


