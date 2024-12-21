<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;


    Route::prefix('dashboard')->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/users/store', [UserController::class, 'store'])->name('users.store');
    });


