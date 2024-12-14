<?php

namespace App\Http\Controllers\Tasks;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class TaskController extends Controller
{
    function index() {
        return Inertia::render('Tasks/Index');
    }
}
