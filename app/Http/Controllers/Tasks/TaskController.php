<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function index() {
        $tasks = Task::orderBy('order')->get();
        return Inertia::render('Tasks/Index',[
            'initialTasks' => $tasks
        ]);
    }

    public function updateStatus(Request $request, Task $task)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:in_progress,pending,on_hold,done,cancelled'],
        ]);

        $task->update([
            'status' => $validated['status'],
        ]);

        return response()->json(['message' => 'Task status updated']);
    }
}
