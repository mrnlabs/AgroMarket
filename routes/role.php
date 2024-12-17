<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;

    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index'])->name('roles.index');
    });


