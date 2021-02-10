<?php

namespace App\Http\Controllers\Design;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\Design\DesignService;
use App\Http\Requests\Designer\CreateRequest;
use App\Http\Requests\Designer\UpdateRequest;
use App\Http\Requests\Designer\UploadFileRequest;

class DesignController extends Controller
{
    protected $service;

    public function __construct(DesignService $service)
    {
        $this->designService = $service;
    }

    public function list()
    {
        $status = $this->designService->handleList();
        return response()->json([
            'designs' => $status
        ]);
    }

    public function show($id)
    {
        $status = $this->designService->handleShow($id);
        return $status;
    }

    public function create(CreateRequest $request)
    {
        $status = $this->designService->handleCreateDesign($request);
        return $status;
    }

    public function uploadFiles($id, UploadFileRequest $request)
    {
        $status = $this->designService->handleUploadFile($id, $request);
        return $status;
    }

    public function update($id, UpdateRequest $request)
    {
        $status = $this->designService->handleUpdate($id, $request);
        return $status;
    }
}
