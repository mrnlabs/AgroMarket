<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\User;
use App\Notifications\NewUserRegistered;
use Illuminate\Auth\Events\Registered;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request){
    //   dd($request->all());
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'phone' => 'required|string|max:11',
            'store_name' => 'required|string|max:255',
            'password' => ['required', Rules\Password::defaults()],
        ]);
        $store = Store::create(['name' => $request->store_name]);

        $user = User::create([
            'store_id' => $store->id,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        
        $user->assignRole('Store SuperAdmin');
        $permissions = Permission::all();
        $user->syncPermissions($permissions);

        event(new Registered($user));

        // $admins = User::getAdmins();
        // foreach($admins as $admin) {
        //     $admin->notify(new NewUserRegistered($user));
        // }
    

        // Auth::login($user);

        // return Inertia::location(route('login'));
        return redirect(route('login', absolute: false))->with('success', 'Account created successfully. Please check your email for verification.');
    }
}
