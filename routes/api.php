<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::group(['prefix' => 'auth', 'middleware' => ['web']], function () {
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::controller(AuthController::class)->prefix('auth')->group(function () {
        Route::get('user', 'user');
    });

    Route::controller(AuthController::class)->prefix('auth')->group(function () {
        Route::get('user', 'user');
        Route::post('logout', 'logout');
    });
});
