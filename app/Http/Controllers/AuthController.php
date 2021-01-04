<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;
use App\Models\User;
use App\Models\UserInformation;
use App\Utilities\ProxyRequest;

class AuthController extends Controller
{

    protected $proxy;

    public function __construct(ProxyRequest $proxy) {
        $this->proxy = $proxy;
    }

     public function signup(Request $request) {
        $this->validate(request(), [
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:7',
        ]);

        $user = User::create([
            'username' => request('username'),
            'email' => request('email'),
            'password' => bcrypt(request('password')),
        ]);

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

        // Tokens
         $resp = $this->proxy->grantPasswordToken(
             $user->username,
             request('password'),
         );

        return response()->json([
            'access_token' => $resp['access_token'],
            'expires_in' => $resp['expires_in'],
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

      public function login(Request $request) {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = request(['username', 'password']);
        
        if(!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        } else {
            $response = $this->proxy->grantPasswordToken($request->username, $request->password);
        }
        
        return response()->json([
            'access_token' => $response['access_token'],
            'expires_in' => $response['expires_in'],
            'message' => 'You are now logged in.'
        ], 200);
      }

      /**
       * Logout user (Revoke the token)
       * @return [string] message
       */

       public function logout(Request $request) {
            // $request->user()->token()->revoke();
            $tokenId = $request->user()->token()->id;
            $result = $this->proxy->revokeTokens($tokenId);
            
           // remove httponly cookie
           cookie()->queue(cookie()->forget('refresh_token'));
        
           return $result;
       }

       /**
        * Get the authenticated user
        *
        * @return [json] user object 
        */

        public function user(Request $request) {
            $user = Auth::user();
            $user_information = User::find($user->id)->user_information;
            return response()->json([$user,$user_information]);
        }
}
