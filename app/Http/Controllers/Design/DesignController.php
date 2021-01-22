<?php

namespace App\Http\Controllers\Design;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\Designer\CreateRequest;
//For testing

// To be removed.

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Designer\Design;
use App\Models\Designer\DesignInformation;
use App\Models\Designer\StockType;
use App\Models\Designer\IdeaType;
use App\Models\Designer\DesignFile;
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

        // TODO: Protected function
        $design_information = new DesignInformation([
            'category' => $request->category,
            'total_cost' => $request->total_cost,
            'stock_type_id' => $stock_type->id,
            'idea_type_id' => $idea_type->id,
        ]);

        $design_information->design()->associate($design); 
        $design_information->save();

        //TODO: Design files logic 
        
        
        $public_files = $request->allFiles('public_files');
        $request->idea_name = strtolower(str_replace(' ', '_', $request->idea_name));
        
        if(!empty($request->public_files))
        {
            $image_directory = "images/".$user->username."/".$request->idea_name."/"."public/";
            //TODO: CLEAN THIS!
            foreach($public_files as $public_file)
            {
                $name = $public_file->getClientOriginalName();
                $file_name = $name;
                $design_file = new DesignFile([
                            'file_route' => $image_directory.$file_name,
                            'is_private' => 0,
                        ]);
                $design_file->design()->associate($design);
                $design_file->save();

                Storage::putFileAs($image_directory, $public_file, $file_name);
            }
        } 
        
        if(!empty($request->private_files))
        {
            $image_directory = "images/".$user->username."/".$request->idea_name."/"."private/";
            //TODO: CLEAN THIS!
            foreach($public_files as $public_file)
            {
                $name = $public_file->getClientOriginalName();
                $file_name = $name;
                $design_file = new DesignFile([
                            'file_route' => $image_directory.$file_name,
                            'is_private' => 0,
                        ]);
                $design_file->design()->associate($design);
                $design_file->save();

                Storage::putFileAs($image_directory, $public_file, $file_name);
            }
        }
        // Optional logic
        // if($request->hasFile('public_files'))
        // {
        //     $public_files = $request->File('public_files');
        //     if(empty($public_files))
        //     {
        //         return $request->all();
        //     }
        //     return $public_files;
        //     foreach ($request->public_files as $public_file)
        //     {
        //         return $request->all();
        //         $design_file = new DesignFile([
        //             'file_route' => 'delete this',
        //             'is_private' => 0,
        //         ]);
        //         $design_file->design()->associate($design);
        //         $design_file->save();
        //         Storage::disk('local')->put('app/images', $public_file);
        //     }
        // }

        return response()->json([
            'message' => 'Success'
        ], 200);
    }
}
