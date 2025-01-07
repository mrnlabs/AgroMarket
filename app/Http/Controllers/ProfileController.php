<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        $user = $request->user();
        $user->fill($request->validated());
            $request->user()->email_verified_at = null;
        if($request->hasFile('photo_path')) {
            $imagePath = $request->file('photo_path')->store('users', 'public');
            $user->photo_path = $imagePath;
        }else{
            $fuck = User::whereId($user->id)->first(['photo_path']);
            $user->photo_path = $fuck->photo_path;
        }
        // if (Auth::user()->isDirty('email')) {
        //     Auth::user()->email_verified_at = null;
        // }
        Auth::user()->save();

        return Redirect::back()->with('status', 'Profile updated successfully');
    }

    

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
