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
        return Inertia::render('Admin/Users/Index');
    }

    function create() {
        $roles = Role::pluck('name', 'id');
        return Inertia::render('Admin/Users/Create',[
            'roles' => $roles,
        ]);
    }

    function store(UserRequest $request) {
        try {
            $request->validated();
        // $userLocation = IpGeolocation::lookup($request->ip());
        $location = IpGeolocation::lookup('197.185.140.98');
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'alt_phone' => $request->alt_phone,
            'email' => $request->email,
            'password' => $request->password,
            'role_id' => $request->role_id,
            'address' => $request->address,
            'city' => $location->city,
            'state' => $location->state_prov,
            'country' => $location->country_name,
            'zip_code' => $location->zipcode,
            'coordinates' => $location->coordinates,
        ]);
        if($request->hasFile('photo_path')) {
            $imagePath = $request->file('photo_path')->store('users', 'public');
            $user->photo_path = $imagePath;
            $user->save();
        }
        $user->assignRole($request->role);
        } catch (\Throwable $th) {
            throw $th;
        }
        
    }
}
