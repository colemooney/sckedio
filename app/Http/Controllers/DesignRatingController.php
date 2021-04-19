<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DesignRating\StoreRequest;
use App\Models\DesignRating;
use App\Models\Designer\Design;

class DesignRatingController extends Controller
{
    public function store(StoreRequest $request)
    {
        $authenticatedUser = auth()->user()->id;
        $designRating = new DesignRating;

        $designRating->user_id = $authenticatedUser;
        $designRating->design_id = $request->design_id;
        $designRating->rate = $request->rate;
        $designRating->save();

        return response()->json([
            'message' => 'Success!'
        ], 200);
    }
}
