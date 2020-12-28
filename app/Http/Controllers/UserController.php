<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class UserController extends Controller
{

    /**
     * Update username and/or email
     * @param [string] username
     * @param [string] email
     */
    public function update(Request $request) {
        $user_id = Auth::id();

        $request->validate([
            'username' => 'nullable|string',
            'email' => 'nullable|string'
        ]);
        
        $user_credentials = User::findOrFail($user_id);

        if(empty($request->username)) {
            $request->username = $user_credentials->username;
        }

        if(empty($request->email)) {
            $request->email = $user_credentials->email;
        }

        if (!empty($user_credentials)){
            $user_credentials->username = $request->username;
            $user_credentials->email = $request->email;
            $user_credentials->save();
        } else {
            return response()->json([
                'message' => 'User not found!'
            ], 404);
        }

        return response()->json([
            'message' => "Successfully updated user and/or email!"
        ], 201);
    }


    public function show(Request $request) {
        $user = Auth::user();

        return response()->json([
            'username' => $user->username,
            'email' => $user->email
        ], 200);
    }

}
