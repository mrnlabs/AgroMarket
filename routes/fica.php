<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\FICADocsController;

    Route::prefix('documents')->group(function () {
        Route::post('/store/{docType}', [FICADocsController::class, 'store'])->name('fica.docs.store');
        Route::post('/destroy/{id}', [FICADocsController::class, 'destroy'])->name('fica.docs.destroy');
    });
    

