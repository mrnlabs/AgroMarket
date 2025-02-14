<?php

namespace App\Http\Controllers\Stores;

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

class StoreController extends Controller
{
  
    public function index(){
          // pull all stores  here  and  paginate  with  10
          $query = Store::query();
          $stores = $query->paginate(10)->onEachSide(1);

         
          return Inertia("FrontPages/AllStores/Stores", [
              "stores" => $stores
          ]);
  
      
    }

 
    
    

    public function myStores(){
        $query = Product::query();
     
        // Search filter
        if (request('search')) {
            $search = request('search');
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('price', 'like', "%{$search}%");
            });
        }
     
        // Status filter
        if (request('status')) {
            $query->where('status', request('status'));
        }
     
   
     
        $products = $query->with('store')->get();
     
        $canCreateStore = auth()->user()->store()->count() === 0;
     
        return Inertia::render('Dashboard/Stores/Index', [
            'products' => $products,
            'canCreateStore' => $canCreateStore,
            'filters' => [
                'search' => request('search'),
                'status' => request('status')
            ]
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

            $store = $user->stores()->create([
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
                    $path = $image->storeAs('stores', $filename, 'public');
                    StoreImage::create([
                        'image' => $path,
                        'store_id' => $store->id
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
        // pull all stores  here  and  paginate  with  10
        $query = Store::query();
        $stores = $query->paginate(10)->onEachSide(1);
        return Inertia("FrontPages/AllStores/Stores", [
            "stores" => $stores
        ]);

    }
    
    public function updateStoreImage(Request $request, string $type)
    {
        $propertyToUpdate = '';
        if($request->hasFile('image')) {
                $filename = time() . '_' . $request->file('image')->getClientOriginalName();
                $path = $request->file('image')->storeAs('stores', $filename, 'public');
                if($type == 'cover') {
                    $propertyToUpdate = 'cover_image';
                }else{
                    $propertyToUpdate = 'image';
                }
                auth()->user()->store()->update([
                    $propertyToUpdate => $path
                ]);
                return back()->with('success','Image updated successfully.');
        }else{
            return back()->with('error','Failed to update image.');
        }
        
    }

 
    public function edit(string $slug)
    {
        if(request("ref")){
        $notification = auth()->user()->store->notifications->findOrFail(request("ref"));//ref is the notification id
        $notification->markAsRead();
        }
        

        $store = Store::with('store_images','store_documents')->where('slug', $slug)->first();
        return Inertia::render('Dashboard/Stores/Create',[
            'store' => $store,
        ]);
    }

   
    public function update(Request $request, string $slug)
    {
        // dd($request->all());
        try {
            $store = Store::where('slug', $slug)->firstOrFail();
            $updateData = [
                'name' => $request->name,
                'description' => $request->description,
                'address' => $request->address,
            ];
    
            if ($request->hasFile('image')) {
                $updateData['image'] = $request->file('image')->store('stores', 'public');
            }
    
            $store->update($updateData);
            auth()->user()->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone' => $request->phone,
                'email' => $request->email
            ]);
    
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $path = $image->storeAs('stores', $filename, 'public');
                    StoreImage::create([
                        'image' => $path,
                        'store_id' => $store->id
                    ]);
                }
            }
    
            return back()->with('success', 'Store updated successfully.');
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    function removeStoreImage($id) {
        $storeImage = StoreImage::whereId($id)->first();
        $storeImage->delete();
        return back()->with('success', 'Image removed successfully.');
    }
   
    public function setActiveStatus(string $slug, Request $request)
    {
        $store = Store::where('slug', $slug)->first();
        if($request->status == 'delete') {
            $store->delete();
            Auth::logout();
            return back()->with('success', 'Store deleted successfully.');
        }

            if($request->status == 'deactivate') {
                $store->update([
                    'status' => 'active'
                ]);
            }else{
                $store->update([
                    'status' => 'inactive'
                ]);
            }
        return back()->with('success', 'Store status updated successfully.');
    }
}
