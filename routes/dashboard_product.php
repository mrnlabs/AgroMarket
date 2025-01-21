<?php

use App\Http\Controllers\Admin\DashboardProductController;
use Illuminate\Support\Facades\Route;


    Route::prefix('dashboard')->group(function () {
        Route::get('/products', [DashboardProductController::class, 'index'])->name('dashboard.products.index');
        Route::get('/user/products', [DashboardProductController::class, 'userProducts'])->name('dashboard.user.products');
        Route::get('/products/create', [DashboardProductController::class, 'create'])->name('dashboard.products.create');
        Route::post('/products/store', [DashboardProductController::class, 'store'])->name('dashboard.products.store');
        Route::get('/products/edit/{slug}', [DashboardProductController::class, 'show'])->name('dashboard.products.show');
        Route::post('/products/update/{slug}', [DashboardProductController::class, 'update'])->name('dashboard.products.update');
        Route::post('/products/remove-product-image/{id}', [DashboardProductController::class, 'removeProductImage'])->name('dashboard.products.removeProductImage');
        Route::delete('/products/destroy/{slug}', [DashboardProductController::class, 'destroy'])->name('dashboard.products.destroy');
    });


