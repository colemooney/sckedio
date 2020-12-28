<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\UserInformation;
use App\Models\User;

class UserInformationController extends Controller
{
    /**
     * Get authenticated user's information
     * @return [json] user_information object
     */
    public function show(Request $request) {
        $user_id = Auth::id();
        $user_information = User::find($user_id)->user_information;

        if(empty($user_information)){
            return response()->json([
                'message' => 'User Information not found.'
            ], 404);
        }

        return response()->json([$user_information]);
    }

    /**
     * Update user information
     * @param [string] first_name
     * @param [string] last_name
     * @param [string] state
     * @param [string] city
     * @param [string] street
     * @param [string] postal_code
     * @param [string] country
     */
    public function update(Request $request) {
        $request->validate([
            'username' => 'nullable|string',
            'email' => 'nullable|string',
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'state' => 'nullable|string',
            'city' => 'nullable|string',
            'street' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'country' => 'nullable|string'
        ]);
        
        $user_id = Auth::id();

        $user_credentials = User::findOrFail($user_id);
        $user_information = User::find($user_id)->user_information;
        
        // Checks if username and/or email are blank.
        if(empty($request->username)) {
            $request->username = $user_credentials->username;
        }
        if(empty($request->email)) {
            $request->email = $user_credentials->email;
        }

        // Checks if current user has user information data.
        if(!empty($user_information)){
            // Update user information
            $user_credentials->username = $request->username;
            $user_credentials->email = $request->email;
            $user_credentials->save();
            $user_information->first_name = $request->first_name;
            $user_information->last_name = $request->last_name;
            $user_information->state = $request->state;
            $user_information->city = $request->city;
            $user_information->street = $request->street;
            $user_information->postal_code = $request->postal_code;
            $user_information->country = $request->country;
            $user_information->save();

        } else {
            return response()->json([
                'message' => 'User information not found.'
            ], 404);
        }
        
        return response()->json([
            'message' => 'Successfully updated user information.'
        ], 201);
    }
}
