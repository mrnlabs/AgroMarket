<?php

use App\Http\Controllers\Stores\StoreController;
use Illuminate\Support\Facades\Route;



    Route::prefix('store')->group(function () {
        Route::get('/', [StoreController::class, 'index'])->name('stores.index');
    });
     Route::middleware('auth')->prefix('dashboard/store')->group(function () {
        Route::get('/', [StoreController::class, 'myStores'])->name('dashboard.stores.myStores');
        Route::get('/create', [StoreController::class, 'create'])->name('dashboard.stores.create');
        Route::post('/store', [StoreController::class, 'store'])->name('dashboard.stores.store');
        Route::get('/edit/{slug}', [StoreController::class, 'edit'])->name('dashboard.stores.edit');
        Route::post('/update/{slug}', [StoreController::class, 'update'])->name('dashboard.stores.update');
        Route::post('/update-store-image/{type}', [StoreController::class, 'updateStoreImage'])->name('dashboard.stores.update.store_image');
        Route::delete('/destroy/{slug}', [StoreController::class, 'destroy'])->name('dashboard.stores.destroy');
        Route::post('/remove-store-image/{id}', [StoreController::class, 'removeStoreImage'])->name('dashboard.stores.removeStoreImage');
        Route::post('/set-active-status/{slug}', [StoreController::class, 'setActiveStatus'])->name('dashboard.stores.set_active_status');
    });


