<?php

namespace App\Http\Controllers\Admin;

use App\Facades\IpGeolocation;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Models\Product;
use App\Models\Store;
use App\Models\StoreImage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
  

    public function allStores(){
    $query = Store::query();

    // Search filter
    if (request('search')) {
        $search = request('search');
        $query->where(function($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
              ->orWhere('location', 'like', "%{$search}%")
              ->orWhereHas('users', function($userQuery) use ($search) {
                  $userQuery->where('name', 'like', "%{$search}%");
              });
        });
    }

    // Status filter
    if (request('status')) {
        $query->where('status', request('status'));
    }

    $stores = $query->with('users')->get();

    // Products for non-admin users
    $products = isInternalPortalUser()
        ? collect() 
        : auth()->user()->store()->get()->pluck('products')->flatten();

    $canCreateStore = false;

    return Inertia::render('Dashboard/InternalPortal/AdminStores/Index', [
        'stores' => $stores,
        'products' => $products,
        'canCreateStore' => $canCreateStore,
        'filters' => [
            'search' => request('search'),
            'status' => request('status')
        ]
    ]);
}

}
