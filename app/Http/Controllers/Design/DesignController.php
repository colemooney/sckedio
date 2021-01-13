<?php

namespace App\Http\Controllers\Design;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\Designer\CreateRequest;
// To be removed.
use Illuminate\Http\Request;
use App\Models\Designer\Design;
use App\Models\Designer\DesignInformation;
use App\Models\Designer\StockType;
use App\Models\Designer\IdeaType;
// end
class DesignController extends Controller
{
    public function create(CreateRequest $request)
    {
        $user = Auth::user();
        
        $design = new Design([
            'idea_name' => $request->idea_name
        ]);

        $design->user()->associate($user);
        $design->save();
        
        //TODO. This will affect performance.
        $stock_type = StockType::where('stock_type', $request->stock_type)->first();
        $idea_type = IdeaType::where('idea_type', $request->idea_type)->first();

        $design_information = new DesignInformation([
            'category' => $request->category,
            'total_cost' => $request->total_cost,
            'stock_type_id' => $stock_type->id,
            'idea_type_id' => $idea_type->id,
        ]);

        $design_information->design()->associate($design);
        $design_information->save();

        return response()->json([
            'message' => 'Success'
        ], 200);
    }
}
