<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Dashboard\FICADocsController;
use App\Http\Controllers\Stores\StoreManagerUserController;

    Route::prefix('documents')->group(function () {
        // Route::get('/users', [UserController::class, 'index'])->name('users.index');
        // Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/store/{docType}', [FICADocsController::class, 'store'])->name('fica.docs.store');
    });
    

