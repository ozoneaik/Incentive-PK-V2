<?php

use App\Http\Controllers\ProductQcController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkDayController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Main/Home');
    })->name('home');

    Route::prefix('/product')->group(function(){
        Route::get('/', [ProductQcController::class,'index'])->name('product.index');
    });

    Route::prefix('work-day')->group(function(){
        Route::get('/',[WorkDayController::class,'index'])->name('workday.index');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
