<?php

use App\Http\Controllers\Admin\DashboardProductController;
use Illuminate\Support\Facades\Route;


    Route::prefix('dashboard')->group(function () {
        Route::get('/products', [DashboardProductController::class, 'index'])->name('admin.products.index');
        Route::get('/user/products/{slug}', [DashboardProductController::class, 'userProducts'])->name('admin.user.products');
        Route::get('/products/create/{slug}', [DashboardProductController::class, 'create'])->name('admin.products.create');
        Route::post('/products/store/{slug}', [DashboardProductController::class, 'store'])->name('admin.products.store');
        Route::get('/products/edit/{slug}', [DashboardProductController::class, 'show'])->name('admin.products.show');
        Route::post('/products/update/{slug}', [DashboardProductController::class, 'update'])->name('admin.products.update');
        Route::post('/products/remove-product-image/{id}', [DashboardProductController::class, 'removeProductImage'])->name('admin.products.removeProductImage');
        // Route::delete('/users/destroy/{slug}', [UserController::class, 'destroy'])->name('users.destroy');
    });


