<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;

// Route::get('/{path?}', [ReactController::class, 'show']);
<<<<<<< HEAD
Route::get('/{path?}', function() {
    return view('app');
})->where('path','.*' );
=======


// Route::view('/{path?}', 'app');

Route::get('/{path?}', function() {
    return view('app');
})->where('path','.*' );
>>>>>>> 42c268b549624cbc15c7afcde4714e018406499c
