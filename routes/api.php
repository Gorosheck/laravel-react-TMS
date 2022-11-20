<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/sign-up', [UserController::class, 'signUp']);

Route::get('/articles/{article}', function (\App\Models\Article $article) {
    return response()->json($article->toArray());
});

Route::get('/articles/{article}', function (\App\Models\Article $article) {
    return new \App\Http\Resources\Article($article);
});

Route::get('/articles', function () {
   $articles = \App\Models\Article::query()->published()->latest()->paginate(1);

   return \App\Http\Resources\Article::collection($articles);
});