<?php

namespace App\Http\Controllers\Stores;

use App\Facades\IpGeolocation;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Models\Store;
use App\Models\StoreImage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
  
    public function index(){
      return Inertia::render('FrontPages/AllStores/Stores');
    }

 
    public function myStores()
    {
        $store = Store::where('user_id', auth()->id())->get();
        return Inertia::render('Dashboard/Stores/Index',[
            'stores' => $store,
        ]);
    } 
    
    public function create()
    {
        return Inertia::render('Dashboard/Stores/Create');
    }

   
    public function store(StoreRequest $request){
        try {
            $user= User::whereId(auth()->id())->first();
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('stores', 'public');
            }

            $location = IpGeolocation::lookup('197.185.140.98');
        
            $locationObject = [
                'city' => $location['city'],
                'state' => $location['state_prov'],
                'country' => $location['country_name'],
                'zip_code' => $location['zipcode'],
                'lat' => (float) $location['latitude'],
                'lng' => (float) $location['longitude']
            ];

            $product = $user->stores()->create([
                'name' => $request->name,
                'description' => $request->description,
                'address' => $request->address,
                'location' => $locationObject,
                'user_id' => $user->id,
                'image' => $imagePath,
            ]);

            if($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $path = $image->storeAs('products', $filename, 'public');
                    StoreImage::create([
                        'image' => $path,
                        'store_id' => $product->id
                    ]);
                }
            }
        return back()->with('success','Store created succesfully.');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

   
    public function show(string $id)
    {
        //
    }

 
    public function edit(string $id)
    {
        //
    }

   
    public function update(Request $request, string $id)
    {
        //
    }

   
    public function destroy(string $id)
    {
        //
    }
}
