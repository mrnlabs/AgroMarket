<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Tasks\TaskController;

    Route::prefix('tasks')->group(function () {
        Route::get('/', [TaskController::class, 'index'])->name('tasks.index');
    });


