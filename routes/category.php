<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories\CategoryController;

    Route::prefix('categories')->group(function () {
        Route::post('/store', [CategoryController::class, 'store'])->name('categories.store');
        Route::delete('/destroy/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');
        Route::post('/update/{id}', [CategoryController::class, 'update'])->name('categories.update');
    });


