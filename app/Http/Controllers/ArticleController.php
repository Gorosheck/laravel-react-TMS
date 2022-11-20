<?php

namespace App\Http\Controllers;

use App\Http\Requests\Article\CreateRequest;
use App\Http\Requests\Article\EditRequest;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use PhpParser\Node\Expr\Cast\Int_;

class ArticleController extends Controller
{
    public function createForm()
    {
        Gate::authorize('create', Article::class);
        $categories = Category::all();
        return view('articles.create', compact('categories'));
    }

    public function editForm(Article $article)
    {
        Gate::authorize('edit', $article);
//        if (Gate::denies('edit-article')) {
//            abort(403);
//        }

        $categories = Category::all();
        return view('articles.edit', compact('article','categories'));
    }

    public function create(CreateRequest $request)
    {
        $data = $request->validated();
        $article = new Article($data);
        $user = $request->user();
        $article->user()->associate($user);
        $article->save();
        $article->categories()->attach($data['categories']);


        session()->flash('success', 'Success');

        return redirect()->route('article.show', ['article' => $article->id]);
    }

    public function edit(Article $article, EditRequest $request)
    {
        $data = $request->validated();
        $article->fill($data);
        $article->categories()->sync($data['categories']);
        $article->save();
        session()->flash('success', 'Success');
        return redirect()->route('article.show', ['article' => $article->id]);
    }

    public function list()
    {

        $articles = Article::query()->paginate(5);

        return view('articles.list', ['articles' => $articles]);
    }

    public function show(Article $article)
    {

        return view('articles.show', compact('article'));
    }

    public function delete(Article $article)
    {

        Gate::authorize('delete', $article);
        $article->delete();

        session()->flash('success', 'Successfully deleted!');

        return redirect()->route('article.list');
    }
}
