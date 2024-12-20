<?php

use App\Http\Controllers\Stores\StoreController;
use Illuminate\Support\Facades\Route;



    Route::prefix('store')->group(function () {
        Route::get('/', [StoreController::class, 'index'])->name('stores.index');
    });


