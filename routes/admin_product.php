<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;


    Route::prefix('admin')->group(function () {
        Route::get('/products', [AdminProductController::class, 'index'])->name('admin.products.index');
        Route::get('/user/products/{slug}', [AdminProductController::class, 'userProducts'])->name('admin.user.products');
        Route::get('/products/create/{slug}', [AdminProductController::class, 'create'])->name('admin.products.create');
        Route::post('/products/store/{slug}', [AdminProductController::class, 'store'])->name('admin.products.store');
        Route::get('/products/edit/{slug}', [AdminProductController::class, 'show'])->name('admin.products.show');
        Route::post('/products/update/{slug}', [AdminProductController::class, 'update'])->name('admin.products.update');
        Route::post('/products/remove-product-image/{id}', [AdminProductController::class, 'removeProductImage'])->name('admin.products.removeProductImage');
        // Route::delete('/users/destroy/{slug}', [UserController::class, 'destroy'])->name('users.destroy');
    });


