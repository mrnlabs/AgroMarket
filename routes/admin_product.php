<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;


    Route::prefix('admin')->group(function () {
        Route::get('/products', [AdminProductController::class, 'index'])->name('admin.products.index');
        Route::get('/user/products/{slug}', [AdminProductController::class, 'userProducts'])->name('admin.user.products');
        Route::get('/products/create/{slug}', [AdminProductController::class, 'create'])->name('admin.products.create');
        // Route::post('/users/store', [UserController::class, 'store'])->name('users.store');
        // Route::get('/users/edit/{slug}', [UserController::class, 'edit'])->name('users.edit');
        // Route::post('/users/update/{slug}', [UserController::class, 'update'])->name('users.update');
        // Route::delete('/users/destroy/{slug}', [UserController::class, 'destroy'])->name('users.destroy');
    });


