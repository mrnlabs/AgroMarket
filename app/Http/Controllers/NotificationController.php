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
            return back();
        }
        
        return response()->json([
            'notifications' => auth()->user()->store->unreadNotifications,
            'unreadCount' => auth()->user()->store->unreadNotifications->count(),
        ]);
        
    }

    function viewAllNotifications() {
        $notifications =auth()->user()->store->notifications;
        $unreadCount = auth()->user()->store->unreadNotifications->count();
        return Inertia::render('Dashboard/Notifications/Index', [
            'notifications' => $notifications,
            'unreadCount' => $unreadCount,
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
        auth()->user()->store->unreadNotifications->markAsRead();
        
        return back()->with('success', 'All notifications marked as read');
    }

    function redirectToModel($id) {
        $notification = auth()->user()->store->notifications->findOrFail($id);
        dd($notification);
        $notification->markAsRead();
        return redirect($notification->data['url']);
        
    }
}
