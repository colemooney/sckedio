<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{

    public function show(Request $request) {
        $user = Auth::user();

        return response()->json([
            'username' => $user->username,
            'email' => $user->email
        ], 200);
    }

}
