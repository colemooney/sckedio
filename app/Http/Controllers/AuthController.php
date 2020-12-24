<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;
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
     * Initial values for user information
     * @param [string] first_name
     * @param [string] last_name
     * @param [string] state
     * @param [string] city
     * @param [string] street
     * @param [string] postal_code
     * @param [string] country
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

        // Save the for new user
        $user->save();
        
        // Initial value for user_information
        $user_information = new UserInformation([
            'first_name' => "",
            'last_name' => "",
            'state' => "",
            'city' => "",
            'street' => "",
            'postal_code' => "",
            'country' => "" 
        ]);

        // Save data for user_information
        $user_information->user()->associate($user);
        $user_information->save();

        $success = $user->createToken('Sckedio');
        return response()->json([
            'success' => $success->accessToken,
            'message' => 'Successfully created user!'
        ], 201);
     }


     /**
      * Login user and create token
      * @param [string] email
      * @param [string] password
      * @return [string] token_type
      * @return [string] expires_at
      */

      public function login(Request $request){
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = request(['username', 'password']);
        
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        $response = Http::asForm()->post(env('APP_URL') . '/oauth/token', [
                'client_id' => env('PROXY_OAUTH_CLIENT_ID'),
                'client_secret' => env('PROXY_OAUTH_CLIENT_SECRET'),
                'grant_type' => env('PROXY_OAUTH_GRANT_TYPE'),
                'username' => $request->username,
                'password' => $request->password,
                'scopes' => '[*]'
        ]);
        
        return $response->json();
      }

      /**
       * Logout user (Revoke the token)
       * @return [string] message
       */

       public function logout(Request $request){
           $request->user()->token()->revoke();

           return response()->json([
                'message' => 'Successfully logged out',
           ], 200);
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
