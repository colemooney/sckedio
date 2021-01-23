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
    public function update(Request $request) 
    {
        $validData = $request->validate([
            'username' => 'nullable|string',
            'email' => 'nullable|string',
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'state' => 'nullable|string',
            'city' => 'nullable|string',
            'street' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'country' => 'nullable|string',
            'role' => 'nullable|string',
        ]);

        $user = Auth::user();
        $user_credentials = User::findOrFail($user->id);
        $user_information = $user_credentials->user_information;
        
        // Checks if username, role and/or email are blank.
        if(!empty($request->username) || !empty($request->email)) 
        {
            $user_credentials->fill($validData)->save();
        }

        if(!empty($user_information))
        {
           $user_information->user()->associate($user);
           $user_information->fill($validData);
           $user_information->save();
        } 
        else 
        {
            return response()->json([
                'message' => 'User information not found.'
            ], 404);
        }

        if(!empty($request->role))
        {
            $role = $user->getRoleNames();
            $user->syncRoles($validData['role']);
        }

        return response()->json([
            'message' => 'Successfully updated user information.'
        ], 201);
    }
}
