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
use App\Models\Designer\IdeaType;
use App\Models\Designer\DesignFile;

class DesignService
{
    protected function getAuthenticatedUser()
    {
        return Auth::user();
    }

    public function handleList()
    {
        $authenticatedUserDesign = $this->getAuthenticatedUser()->design;
        return $authenticatedUserDesign;
    }

    public function handleShow($id)
    {
        $authenticatedUser = $this->getAuthenticatedUser();
        $design = Design::where('id', $id)->where('owner_id', $authenticatedUser->id)->first();
        
        if(empty($design))
        {
            return response()->json([
                'message' => 'Error! Could not find design associated with the user.'
            ]);
        }
        $designInformation = $this->getDesignInformation($design);
        $publicFiles = $this->getPublicFiles($design);

        return response()->json([
            'idea_name' => $design->idea_name,
            'design_information' => $designInformation,
            'public_files' => $publicFiles
        ], 200);
    }
    
    //TODO: Update design
    public function handleUpdate($id, object $request)
    {
        $authenticatedUser = $this->getAuthenticatedUser();
        $design = $authenticatedUser->design->where('id', $id)->where('owner_id', $authenticatedUser->id)->first();
        $designInformation = $this->getDesignInformation($design)
        ->update([ 
            'category_id' => $request['category_id'],
            'description' => $request['description'],
            'design_cost' => $request['design_cost'],
            'idea_type_id' => $request['idea_type']
         ]);

        return response()->json([
            'message' => 'Successfully updated design information.',
        ], 200);
    }

    public function handleUploadFile($id, object $request)
    {
        $authenticatedUser = $this->getAuthenticatedUser();
        $design = $authenticatedUser->design->where('id', $id)->where('owner_id', $authenticatedUser->id)->first();

        if(!empty($request['public_files']))
        {
            $this->storePublicFiles($request, $authenticatedUser, $design, $design->idea_name);
        }

        if(!empty($request['private_files']))
        {
            $this->storePrivateFiles($request, $authenticatedUser, $design, $design->idea_name);
        }

        return response()->json([
            'message' => 'Successfully added files!'
        ], 200);
    }

    public function handleCreateDesign(object $request)
    {
        $authenticatedUser = $this->getAuthenticatedUser();

        // Design
        $design = new Design([
            'idea_name' => $request['idea_name']
        ]);
        $design->user()->associate($authenticatedUser);
        $design->save();

        // Design Information
        $design_information = new DesignInformation([
            'category_id' => $request['category'],
            'description' => $request['description'],
            'design_cost' => $request['design_cost'],
            'idea_type_id' => $request['idea_type']
        ]);
        $this->saveDesign($design_information, $design);

        // Design Upload
        if(!empty($request['public_files']))
        {
            $this->storePublicFiles($request, $authenticatedUser, $design, $request->idea_name);
        }

        if(!empty($request['private_files']))
        {
            $this->storePrivateFiles($request, $authenticatedUser, $design, $request->idea_name);
        }

        return response()->json([
            'message' => 'Successfully uploaded design!'
        ], 200);
    }

    protected function storePublicFiles(object $request, object $authenticatedUser, object $design, string $idea_name)
    {
        $public_files = $request->allFiles('public_files');
        $modified_idea_name = strtolower(str_replace(' ', '_', $idea_name));
        $image_directory = "images/".$authenticatedUser->username."/".$modified_idea_name."/"."public";
        foreach($public_files as $public_file)
            {
                $filename = $public_file->getClientOriginalName();
                $this->uploadPublicFiles($filename, $image_directory, $design);
                Storage::putFileAs($image_directory, $public_file, $filename);
            }
    }

    protected function storePrivateFiles(object $request, object $authenticatedUser, object $design,string $idea_name)
    {
        $private_files = $request->file('private_files');
        $modified_idea_name = strtolower(str_replace(' ', '_', $idea_name));
        $image_directory = "images/".$authenticatedUser->username."/".$modified_idea_name."/"."private";

        foreach($private_files as $private_file)
        {
            $filename = $private_file->getClientOriginalName();
            $this->uploadPrivateFiles($filename, $image_directory, $design);
            Storage::putFileAs($image_directory, $private_file, $filename);
        }
    }

    protected function uploadPublicFiles(string $filename, string $image_directory, object $design)
    {
        $designFile = new DesignFile([
                    'file_route' => $image_directory."/".$filename,
                    'is_private' => 0,
                ]);
        $this->saveDesign($designFile, $design);
    }

    protected function uploadPrivateFiles(string $filename, string $image_directory, object $design)
    {
        $designFile = new DesignFile([
                    'file_route' => $image_directory."/".$filename,
                    'is_private' => 1,
                ]);
        $this->saveDesign($designFile, $design);
    }

    protected function saveDesign(object $data, object $design)
    {
        $data->design()->associate($design);
        $data->save();
    }

    protected function getPublicFiles(object $design)
    {
        $publicFiles = $design->design_files->where('is_private', '0');
        return $publicFiles;
    }

    protected function getPrivateFiles(object $design)
    {
        $privateFiles = $design->design_files->where('is_private', '1');
        return $privateFiles;
    }

    protected function getDesignInformation(object $design)
    {
        $designInformation = $design->design_information;

        return $designInformation;
    }
}
