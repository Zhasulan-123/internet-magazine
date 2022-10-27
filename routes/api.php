<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Auth\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes Login Register
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public routes Categories
Route::get('/categories', [CategoryController::class, 'index']);

// Public routes Products all
Route::get('/products', [ProductsController::class, 'index']);


// Protected routes
Route::group(['middleware' => 'auth:sanctum'], function(){

    // Create Order
    Route::post('/order', [OrderController::class, 'create']);

    // All Order
    Route::get('/order', [OrderController::class, 'index']);

    // Logout admin user
    Route::post('/logout', [AuthController::class, 'logout']);
});
