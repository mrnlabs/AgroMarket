<?php

namespace App\Http\Controllers\Admin;

use App\Facades\IpGeolocation;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    function index() {
        $users = User::with('roles')->latest()->get();
        return Inertia::render('Admin/Users/Index',[
            'users' => $users,
        ]);
    }

    function create() {
        $roles = Role::pluck('name', 'id');
        return Inertia::render('Admin/Users/Create',[
            'roles' => Inertia::defer(fn () => $roles),
        ]);
    }

    function store(UserRequest $request) {
        try {
        $location = IpGeolocation::lookup('197.185.140.98');
        
        $coordinates = [
            'lat' => (float) $location['latitude'],
            'lng' => (float) $location['longitude']
        ];
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'alt_phone' => $request->alt_phone,
            'email' => $request->email,
            'password' => $request->password,
            'address' => $request->address,
            'city' => $location['city'],
            'state' => $location['state_prov'],
            'country' => $location['country_name'],
            'zip_code' => $location['zipcode'],
            'coordinates' => $coordinates,
        ]);
        if($request->hasFile('photo_path')) {
            $imagePath = $request->file('photo_path')->store('users', 'public');
            $user->photo_path = $imagePath;
            $user->save();
        }
        $user->assignRole($request->role);
        return back()->with('success', 'User created successfully.');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    function edit($slug) {
        $user = User::where('slug', $slug)->first();
        $roles = Role::pluck('name', 'id');
        return Inertia::render('Admin/Users/Create',[
            'user' => $user,
            'roles' => Inertia::defer(fn () => $roles),
        ]);
    }
}
