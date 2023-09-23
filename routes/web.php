<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('hifimoney');
});

Route::get('/login', [UserController::class,'login'])->name('auth.login');
Route::get('/register', [UserController::class,'register'])->name('auth.register');
Route::get('/authentication', [UserController::class,'authentication'])->name('auth.authentication');
Route::get('/viewOtp', [UserController::class,'viewOtp'])->name('auth.viewOtp');
Route::get('/Otp', [UserController::class,'Otp'])->name('auth.Otp');
Route::get('/verifyUser', [UserController::class,'verifyUser'])->name('auth.verifyUser');
