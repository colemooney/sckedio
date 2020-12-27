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
     * Create new user information
     * @param [string] first_name
     * @param [string] last_name
     * @param [string] state
     * @param [string] city
     * @param [string] street
     * @param [string] postal_code
     * @param [string] country
     */
    public function create(Request $request) {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'street' => 'string',
            'postal_code' => 'required|string',
            'country' => 'required|string'
        ]);

        $user_information = new UserInformation([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'state' => $request->state,
            'city' => $request->city,
            'street' => $request->street,
            'postal_code' => $request->postal_code,
            'country' => $request->country
        ]);

        $user = Auth::user();
        $user_id = Auth::id();

        $duplicate_catcher = DB::table('users_information')->where('user_id','=',$user_id)->get();
        $dp_counter = $duplicate_catcher->count();

        if($dp_counter > 0) {
            return response()->json([
                'message' => 'Current user already has user information.'
            ], 409);
        }
        else {
            $user_information->user()->associate($user);
            $user_information->save();
        }
        
        return response()->json([
            'message' => 'Successfully created user information!'
        ], 201);
    }


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
        $user_id = Auth::id();
        
        $request->validate([
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'state' => 'nullable|string',
            'city' => 'nullable|string',
            'street' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'country' => 'nullable|string'
        ]);
        
        $user_information = User::find($user_id)->user_information;
        
        // Checks if current user has user information data.
        if(!empty($user_information)){
            // Update user information
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
