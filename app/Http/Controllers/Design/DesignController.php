<?php

namespace App\Http\Controllers\Design;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\Design\DesignService;
use App\Http\Requests\Designer\CreateRequest;

class DesignController extends Controller
{
    protected $service;

    public function __construct(DesignService $service)
    {
        $this->designService = $service;
    }

    public function show()
    {
        $status = $this->designService->handleShowDesign();
        return $status;
    }

    public function create(CreateRequest $request)
    {
        $status = $this->designService->handleCreateDesign($request);
        return $status;
    }
}

