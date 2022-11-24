<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App - @yield('title')</title>

@viteReactRefresh
@vite(['resources/js/app.js', 'resources/sass/app.scss'])
        </head>
<body>

<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ route('main') }}">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                @if(!auth()->check())
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('sign-up.form') }}">Sign Up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">Sign In</a>
                </li>
                @endif
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('report') }}">Report</a>
                </li>
                    @if(auth()->check())
                        @can('create', \App\Models\Article::class)
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('article.create.form') }}">Create article</a>
                </li>
                        @endcan
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('article.list') }}">Articles List</a>
                </li>
                    @endif
            </ul>
            @if(auth()->check())
            <form action="{{ route('logout') }}" method="post" class="form-inline">
                @csrf
                <button class="btn btn-danger">Logout</button>
            </form>
            @endif
        </div>
    </div>
</nav>
<div class="container">
    @include('flash-messages')
    @yield('content')
</div>
</body>
</html>
