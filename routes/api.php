<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserInformationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OAuthTokenController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('users/', [ApiController::class, 'list']);

Route::group([
    'prefix'=> 'auth'
], function(){
        Route::post('login',[AuthController::class, 'login']);
        Route::post('signup', [AuthController::class, 'signup']);

    Route::group([
        'middleware'=> 'auth:api'
    ], function(){
        // AuthController
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']); 

        //UserInformationController
        Route::get('show-user-information', [UserInformationController::class, 'show']);
        Route::post('create-user-information', [UserInformationController::class, 'create']);
        Route::put('update-user-information', [UserInformationController::class, 'update']);

        //UserController
        Route::get('show-user', [UserController::class, 'show']);

        //Refresh access token
        Route::post('refresh', [OAuthTokenController::class, 'refresh']);
    });
});

// Email Verification Notice
Route::get('/email/verify', function(){
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

// Email Verification Handler
Route::get('/email/verify/{id}/{hash}', function(EmailVerificationRequest $request){
    $request->fulfill();
    return redirect(env('APP_URL'));
})->middleware(['auth', 'signed'])->name('verification.verify');