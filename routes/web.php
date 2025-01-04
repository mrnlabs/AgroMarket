<?php

use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name(
    'products.welcome',
);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.show');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::prefix('products')->group(function () {
    Route::get('/view', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/chat', [ProfileController::class, 'update'])->name('profile.chat');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/file-manager', function () {return Inertia::render('Admin/FileManager/Index');});


require __DIR__.'/auth.php';
require __DIR__.'/subscription.php';
require __DIR__.'/stores.php';
require __DIR__.'/products.php';
require __DIR__.'/users.php';

Route::middleware('auth')->group(function () {
    require __DIR__.'/task.php';
    require __DIR__.'/role.php';
    require __DIR__.'/category.php';
    require __DIR__.'/admin_product.php';
});
