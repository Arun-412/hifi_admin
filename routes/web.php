<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/login',  ['as'=>'auth.login','uses'=>'auth\UserController@login']);
Route::get('/register',  ['as'=>'auth.register','uses'=>'auth\UserController@register']);
Route::post('/authentication',  ['as'=>'auth.authentication','uses'=>'auth\UserController@authentication']);
Route::get('/viewOtp',  ['as'=>'auth.verifyOtp','uses'=>'auth\UserController@viewOtp']);
Route::post('/Otp',  ['as'=>'auth.Otp','uses'=>'auth\UserController@verifyOtp']);
Route::post('/verifyUser',  ['as'=>'auth.verifyUser','uses'=>'auth\UserController@verifyUser']);