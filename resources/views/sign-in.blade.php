@extends('layout')

@section('title', 'Sign in')

@section('content')
    <div class="row w-50 d-flex">
        <form action="{{ route('sign-in') }}" method="post">
            @csrf

            <div class="form-group">
                <label for="email">{{__('validation.attributes.email') }}</label>
                <input value="{{ old('email') }}" name="email" type="email" class="form-control @error('email') is-invalid @enderror">
                @error('email')
                <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <div class="form-group">
                <label for="password">{{__('validation.attributes.password') }}</label>
                <input value="{{ old('password') }}" name="password" type="password" class="form-control @error('password') is-invalid @enderror">
                @error('password')
                <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <button class="btn btn-primary w-100 mt-3">Sign In</button>
        </form>
    </div>
@endsection
