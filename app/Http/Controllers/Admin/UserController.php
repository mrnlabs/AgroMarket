<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    function index() {
        return Inertia::render('Admin/Users/Index');
    }

    function create() {
        return Inertia::render('Admin/Users/Create');
    }
}
