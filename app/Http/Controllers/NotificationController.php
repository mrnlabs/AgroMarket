<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        // dd(auth()->user()->store->notifications);
        if (!auth()->user()->store) {
            // Handle case where user doesn't have a store
            return response()->json(['error' => 'No store found for this user'], 404);
        }
        
        return response()->json([
            'notifications' => auth()->user()->store->notifications,
            'unreadCount' => auth()->user()->unreadNotifications()->count(),
        ]);
        
    }

    public function markAsRead(Request $request, $id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->markAsRead();
        
        return response()->json(['success' => true]);
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();
        
        return response()->json(['success' => true]);
    }
}
