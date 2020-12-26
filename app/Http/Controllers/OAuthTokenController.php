<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OAuthTokenController extends Controller
{

    /**
     * Refreshes access token
     * @param [string] refresh_token
     */
    public function refresh(Request $request) {
        $request->validate([
            'refresh_token' => 'required|string'
        ]);

        $response = Http::asForm()->post(env('APP_URL') . '/oauth/token', [
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->refresh_token,
            'client_id' => env('PROXY_OAUTH_CLIENT_ID'),
            'client_secret' => env('PROXY_OAUTH_CLIENT_SECRET'),
            'scope' => ''
        ]);

        return $response->json();
    }
}
