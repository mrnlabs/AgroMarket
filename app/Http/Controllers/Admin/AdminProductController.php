<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
}
