<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\User;
use App\Models\UserInformation;

class AuthController extends Controller
{
    /**
     * Create user
     * @param [string] username
     * @param [string] email
     * @param [string] password
     * @param [string] password_confirmation
     */

     public function signup(Request $request){
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();
        /*
        $user_information = new UserInformation([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'state' => $request->state,
            'city' => $request->city,
            'street' => $request->street,
            'postal_code' => $request->postal_code,
            'country' =>$request->country
        ]);

        $user_information->user()->associate($user);
        $user_information->save();
*/
        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
     }

     /**
      * Login user and create token
      * @param [string] email
      * @param [string] password
      * @param [boolean] remember_me
      * @return [string] access_token
      * @return [string] token_type
      * @return [string] expires_at
      */

      public function login(Request $request){
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);
        
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        
        $user = $request->user();
        
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);

        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString()
        ]);
      }

      /**
       * Logout user (Revoke the token)
       * @return [string] message
       */

       public function logout(Request $request){
           $request->user()->token()->revoke();

           return response()->json([
                'message' => 'Successfully logged out'
           ]);
       }

       /**
        * Get the authenticated user
        *
        * @return [json] user object 
        */

        public function user(Request $request){
            return response()->json($request->user());
        }
}
