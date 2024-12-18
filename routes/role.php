<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;

    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index'])->name('roles.index');
        Route::post('/store', [RoleController::class, 'store'])->name('roles.store');
        Route::post('/edit/{slug}', [RoleController::class, 'edit'])->name('roles.edit');
        Route::post('/update/{slug}', [RoleController::class, 'update'])->name('roles.update');
        Route::post('/destroy/{slug}', [RoleController::class, 'destroy'])->name('roles.destroy');
        Route::post('/assign-role-to-user', [RoleController::class, 'assignRoleToUser'])->name('roles.assign-role-to-user');
        Route::post('/remove-role-from-user', [RoleController::class, 'removeRoleFromUser'])->name('roles.remove-role-from-user');
    });


