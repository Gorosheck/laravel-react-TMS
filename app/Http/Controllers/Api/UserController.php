<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SignUpRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(private UserService $userService)
    {

    }

    public function signUp(SignUpRequest $request)
    {
        $data = $request->validated();
        $this->userService->register($data);

        return response('');
    }
}
