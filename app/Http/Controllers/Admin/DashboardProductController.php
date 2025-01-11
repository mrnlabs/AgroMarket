<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Store;

class DashboardProductController extends Controller
{
    function index() {
        if(auth()->user()->hasRole('Admin')) {
            $products = Product::with('user')->get();
        }else{
            $products = auth()->user()->store()->with('products')->get()->pluck('products')->flatten();
            
        }
        return Inertia::render('Dashboard/Products/Index',[
            'products' => $products
        ]);
    }
    
    function userProducts($slug) {
        return Inertia::render('Dashboard/Products/UserProducts');
    }
    
    function create($slug) {
        $categories = Category::pluck('name', 'id')->toArray();
        $stores = Store::where('user_id',auth()->id())->pluck('name', 'id')->toArray();
        return Inertia::render('Dashboard/Products/Create',[
            'categories' => $categories,
            'stores'   => $stores
        ]);
    }

    function store(ProductRequest $request, $slug) {
        try {
            $user= User::where('slug', $slug)->first();
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('products', 'public');
            }

            $store = $user->stores()->findOrFail($request->store_id);

            $product = $store->products()->create([
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'store_id' => $request->store_id,
                'is_on_sale' => $request->is_on_sale,
                'sale_price' => $request->sale_price,
                'minimum_order' => $request->minimum_order,
                'is_featured' => $request->is_featured,
                'image' => $imagePath,
            ]);
            $categoryIds = $request->category_id;
            $product->categories()->sync($categoryIds);

            if($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $path = $image->storeAs('products', $filename, 'public');
                    ProductImage::create([
                        'image' => $path,
                        'product_id' => $product->id
                    ]);
                }
            }
        return back()->with('success','Product created succesfully.');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    function show($slug) {
        $product = Product::with('user','categories','product_images')->where('slug', $slug)->first();
        // dd($product );
        $categories = Category::pluck('name', 'id')->toArray();
        return Inertia::render('Dashboard/Products/Create',[
            'product' => $product,
            'categories' => $categories
        ]);
    }
    function update(Request $request, $slug) {
        try {
            $product = Product::where('slug', $slug)->firstOrFail();
            
            $updateData = [
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'is_on_sale' => $request->is_on_sale,
                'sale_price' => $request->sale_price,
                'minimum_order' => $request->minimum_order,
                'is_featured' => $request->is_featured,
            ];
    
            if ($request->hasFile('image')) {
                $updateData['image'] = $request->file('image')->store('products', 'public');
            }
    
            $product->update($updateData);
    
            // Only sync categories if they are provided in the request
            if ($request->has('category_id') && !empty($request->category_id)) {
                $categoryIds = $request->category_id;
                if (!empty($categoryIds)) {
                    $product->categories()->sync($categoryIds);
                }
            }
    
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $path = $image->storeAs('products', $filename, 'public');
                    ProductImage::create([
                        'image' => $path,
                        'product_id' => $product->id
                    ]);
                }
            }
    
            return back()->with('success', 'Product updated successfully.');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    function removeProductImage($id) {
        $image = ProductImage::find($id);
        if($image->delete()){
            return back()->with('success', 'Image removed successfully.');
        } else {
            return back()->with('error', 'Image could not be removed.');
        }
    }
}
