<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function index() {
        $completedTasks = Task::where('status', 'done')->orderBy('order')->get();
        $inProgressTasks = Task::where('status', 'in_progress')->orderBy('order')->get();
        $onHoldTasks = Task::where('status', 'on_hold')->orderBy('order')->get();
        $cancelledTasks = Task::where('status', 'cancelled')->orderBy('order')->get();
        return Inertia::render('Tasks/Index',[
            'dcompletedTasks' => $completedTasks,
            'dinProgressTasks' => $inProgressTasks,
            'donHoldTasks' => $onHoldTasks,
            'dcancelledTasks' => $cancelledTasks,
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        // dd($request->status);
        $task = Task::whereId($id)->first();
        $validated = $request->validate([
            'status' => ['required', 'in:in_progress,pending,on_hold,done,cancelled'],
        ]);

        $task->update([
            'status' => $validated['status'],
        ]);

        return back()->with('message','Task status updated');
    }
}
