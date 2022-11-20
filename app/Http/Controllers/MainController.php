<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MainController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::query()
            ->published()
            ->with(['user', 'categories'])
            ->latest();


//        if ($request->has('category')) {
//            $query->whereHas('categories', function ($q) use ($request) {
//                $q->where('categories.id', $request->get('category'));
//            });
//        }

        if ($request->has('categories')) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->whereIN('categories.id', $request->get('categories'));
            });
        }

        if ($request->has('title')) {
            $search = '%' . $request->get('title') . '%';
            $query->where(function ($q) use ($search) {
            $q->where('title', 'like', $search);
            $q->orWhere('text', 'like', $search);
            });
        }

        $articles = $query
            ->paginate(3)
            ->appends($request->query());

        $categories = Category::all();

        return view('welcome', compact('articles', 'categories'));

    }

    public function todayArticles()
    {

        $articles = Article::query()
            ->published()
            ->whereDate('created_at', Carbon::today())
            ->paginate(3);
        return view('today', compact('articles'));
    }
}
