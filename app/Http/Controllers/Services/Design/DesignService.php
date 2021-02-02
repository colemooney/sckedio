<?php

namespace App\Http\Controllers\Services\Design;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Designer\CreateRequest;
use App\Models\Designer\Design;
use App\Models\Designer\DesignInformation;
use App\Models\Designer\StockType;
use App\Models\Designer\IdeaType;
use App\Models\Designer\DesignFile;

class DesignService
{
    public function handleShowDesign()
    {
        $user = Auth::user()->design;
        return json_encode($user,true);
    }

    public function handleCreateDesign(object $request)
    {
        $user = Auth::user();

        // Design
        $design = new Design([
            'idea_name' => $request['idea_name']
        ]);
        $design->user()->associate($user);
        $design->save();
        
        // Types
        $stock_type = StockType::where('stock_type', $request['stock_type'])->first();
        $idea_type = IdeaType::where('idea_type', $request['idea_type'])->first();

        // Design Information
        $design_information = new DesignInformation([
            'category' => $request['category'],
            'description' => $request['description'],
            'design_cost' => $request['design_cost'],
            'stock_type_id' => $stock_type->id,
            'idea_type_id' => $idea_type->id
        ]);
        $design_information->design()->associate($design);
        $design_information->save();

        // Design Upload
        if(!empty($request['public_files']))
        {
            $public_files = $request->file('public_files');
            $modified_idea_name = strtolower(str_replace(' ', '_', $request->idea_name));
            $image_directory = "images/".$user->username."/".$modified_idea_name."/"."public/";

            foreach($public_files as $public_file)
            {
                $filename = $public_file->getClientOriginalName();
                $this->uploadPublicFiles($filename, $image_directory, $design);
                Storage::putFileAs($image_directory, $public_file, $filename);
            }
        }

        if(!empty($request['private_files']))
        {
            $private_files = $request->file('private_files');
            $modified_idea_name = strtolower(str_replace(' ', '_', $request->idea_name));
            $image_directory = "images/".$user->username."/".$modified_idea_name."/"."private/";

            foreach($private_files as $private_file)
            {
                $filename = $private_file->getClientOriginalName();
                $this->uploadPrivateFiles($filename, $image_directory, $design);
                Storage::putFileAs($image_directory, $private_file, $filename);
            }
        }

        return response()->json([
            'message' => 'Successfully uploaded design!'
        ], 200);
    }

    protected function uploadPublicFiles(string $filename, string $image_directory, object $design)
    {
        $design_file = new DesignFile([
                    'file_route' => $image_directory."/".$filename,
                    'is_private' => 0,
                ]);
        $design_file->design()->associate($design);
        $design_file->save();
    }

    protected function uploadPrivateFiles(string $filename, string $image_directory, object $design)
    {
        $design_file = new DesignFile([
                    'file_route' => $image_directory."/".$filename,
                    'is_private' => 1,
                ]);
        $design_file->design()->associate($design);
        $design_file->save();
    }

}