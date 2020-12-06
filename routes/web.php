<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;

// Route::get('/{path?}', [ReactController::class, 'show']);


Route::view('/{path?}', 'app');