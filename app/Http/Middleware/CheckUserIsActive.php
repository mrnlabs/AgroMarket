<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckUserIsActive
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && !Auth::user()->is_active) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Your account has been suspended.',
                    'status' => 'blocked'
                ], 403);
            }
            
            // For web routes, redirect to a blocked page
            return Inertia::render('Auth/BlockedUser', [
                'message' => 'Your account has been suspended. Please contact support for assistance.'
            ]);
        }

        return $next($request);
    }
}