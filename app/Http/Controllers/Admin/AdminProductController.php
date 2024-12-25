<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    function index() {
        return Inertia::render('Admin/Products/Index');
    }
    
    function userProducts($slug) {
        return Inertia::render('Admin/Products/UserProducts');
    }
    
    function create($slug) {
        $categories = Category::pluck('name', 'id');
        return Inertia::render('Admin/Products/Create',[
            'categories' => $categories
        ]);
    }
}
