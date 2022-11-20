<?php

namespace App\Services;

use App\Mail\EmailConfirm;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class UserService
{
    public function register(array $data): User
    {
        $user = new User($data);
        $user->save();

        Mail::to($user->email)->send(new EmailConfirm($user));

        return $user;
    }
}
