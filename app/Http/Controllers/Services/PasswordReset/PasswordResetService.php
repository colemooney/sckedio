<?php

namespace App\Http\Controllers\Services\PasswordReset;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class PasswordResetService
{
    public function handleMailResetLink(string $email)
    {
        if(User::where('email', $email)->first())
        { 
            $status = Password::sendResetLink(['email' => $email]);

            if ($status === Password::RESET_LINK_SENT)
            {
                return redirect(env('APP_URL').'/login')->with(['status'=> __($status)]);
            }
            else
            {
                return redirect(env('APP_URL').'/')->withErrors(['email' => __($status)]);
            }
        } 
        else 
        {
            return response()->json([
                'message' => 'Must be an existing user.'
            ], 422);
        }
    }

    public function updatePassword(object $user_credentials)
    { 
        $status = Password::reset([
                'email' => $user_credentials['email'],
                'password' => $user_credentials['password'],
                'password_confirmation' => $user_credentials['password_credentials'],
                'token' => $user_credentials['token']
                ], function ($user, $password) use ($user_credentials) {
                    $user->forceFill([
                        'password' => Hash::make($password)
                    ])->save();
                   event(new PasswordReset($user)); 
                });
        if($status == Password::PASSWORD_RESET)
        {
            return redirect(env('APP_URL').'/login')->with('status', __($status));
        }
        else
        {
            return redirect(env('APP_URL').'/login')->withErrors(['email' => [__($status)]]);
        }
    }
}