<?php

use App\Http\Controllers\Stores\StoreController;
use Illuminate\Support\Facades\Route;



    Route::prefix('store')->group(function () {
        Route::get('/', [StoreController::class, 'index'])->name('stores.index');
    });
     Route::middleware('auth')->prefix('dashboard/stores')->group(function () {
        Route::get('/', [StoreController::class, 'myStores'])->name('dashboard.stores.myStores');
        Route::get('/create', [StoreController::class, 'create'])->name('dashboard.stores.create');
        Route::post('/store', [StoreController::class, 'store'])->name('dashboard.stores.store');
        Route::get('/edit/{id}', [StoreController::class, 'edit'])->name('dashboard.stores.edit');
        Route::post('/update/{id}', [StoreController::class, 'update'])->name('dashboard.stores.update');
        Route::delete('/destroy/{id}', [StoreController::class, 'destroy'])->name('dashboard.stores.destroy');
    });


