<?php

namespace App\Http\Controllers;

use App\Http\Requests\PasswordReset\UpdateRequest;
use App\Http\Requests\PasswordReset\EmailRequest;
use App\Http\Controllers\Services\PasswordReset\PasswordResetService;

class PasswordController extends Controller
{
    protected $passwordService;

    public function __construct(PasswordResetService $passwordService)
    {
        $this->passwordService = $passwordService;
    }

    public function mail_reset_link(EmailRequest $request) 
    {
        $status = $this->passwordService->handleMailResetLink($request->email);
        return $status;
    }

    public function reset_password($token) {
        return redirect()->route('password.reset');
    }

    public function update_password(UpdateRequest $request) 
    {
        $status = $this->passwordService->updatePassword($request);
        return $status;
    }
}
