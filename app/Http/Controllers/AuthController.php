<?php

namespace App\Http\Controllers;

use App\Events\UserLoggedIn;
use App\Http\Requests\User\SignInRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signInForm()
    {
        return view('sign-in');
    }

    public function signIn(SignInRequest $request)
    {
        $credentials = $request->validated();

        $check = function ($user) {
            return $user->email_verified_at !== null;
        };

        if (Auth::attemptWhen($credentials, $check)) {
            $user = auth()->user();
            $event = new UserLoggedIn($user);
            event($event);
            session()->flash('success', 'Singed In');
            return redirect()->route('main');
        }
        session()->flash('error', 'The provided credentials are incorrect');
        return redirect()->route('login');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
