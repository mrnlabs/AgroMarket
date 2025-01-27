<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\FICADocsController;

    Route::prefix('documents')->group(function () {
        Route::get('/file-manager', [FICADocsController::class, 'fileManager'])->name('fica.docs.file-manager');
        Route::post('/store/{docType}', [FICADocsController::class, 'store'])->name('fica.docs.store');
        Route::post('/trashed', [FICADocsController::class, 'trashed'])->name('fica.docs.trashed');
        Route::post('/restore/{id}', [FICADocsController::class, 'restore'])->name('dashboard.store.restore_document');
        Route::post('/destroy/{id}', [FICADocsController::class, 'destroy'])->name('fica.docs.destroy');
        Route::post('/destroy/{id}', [FICADocsController::class, 'verify'])->name('dashboard.store.verify_document');
    });
    

