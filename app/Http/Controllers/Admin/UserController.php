<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    function index() {
        return Inertia::render('Admin/Users/Index');
    }

    function create() {
        return Inertia::render('Admin/Users/Create');
    }
}
