<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


     Route::middleware('auth')->prefix('dashboard/admin')->group(function () {
        Route::get('/store', [AdminController::class, 'allStores'])->name('admin.stores');
        // Route::get('/create', [StoreController::class, 'create'])->name('dashboard.stores.create');
        // Route::post('/store', [StoreController::class, 'store'])->name('dashboard.stores.store');
        // Route::get('/edit/{slug}', [StoreController::class, 'edit'])->name('dashboard.stores.edit');
        // Route::post('/update/{slug}', [StoreController::class, 'update'])->name('dashboard.stores.update');
        // Route::post('/update-store-image/{type}', [StoreController::class, 'updateStoreImage'])->name('dashboard.stores.update.store_image');
        // Route::delete('/destroy/{slug}', [StoreController::class, 'destroy'])->name('dashboard.stores.destroy');
        // Route::post('/remove-store-image/{id}', [StoreController::class, 'removeStoreImage'])->name('dashboard.stores.removeStoreImage');
        // Route::post('/set-active-status/{slug}', [StoreController::class, 'setActiveStatus'])->name('dashboard.stores.set_active_status');
    });


