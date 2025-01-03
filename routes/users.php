<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;


    Route::prefix('dashboard')->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/users/store', [UserController::class, 'store'])->name('users.store');
        Route::get('/users/edit/{slug}', [UserController::class, 'edit'])->name('users.edit');
        Route::post('/users/update/{slug}', [UserController::class, 'update'])->name('users.update');
        Route::post('/users/set-active-status/{slug}', [UserController::class, 'setActiveStatus'])->name('users.set_active_status');
        Route::delete('/users/destroy/{slug}', [UserController::class, 'destroy'])->name('users.destroy');
    });


