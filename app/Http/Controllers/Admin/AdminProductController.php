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
use Illuminate\Http\RedirectResponse;

class AdminProductController extends Controller
{
    function index() {
        $products = Product::with('user')->get();
        return Inertia::render('Admin/Products/Index',[
            'products' => $products
        ]);
    }
    
    function userProducts($slug) {
        return Inertia::render('Admin/Products/UserProducts');
    }
    
    function create($slug) {
        $categories = Category::pluck('name', 'id')->toArray();
        return Inertia::render('Admin/Products/Create',[
            'categories' => $categories
        ]);
    }

    function store(ProductRequest $request, $slug) {
        try {
            // dd($request->all());
            $user= User::where('slug', $slug)->first();
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('products', 'public');
            }

            $product = $user->product()->create([
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'user_id' => $user->id,
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
        return Inertia::render('Admin/Products/Create',[
            'product' => $product,
            'categories' => $categories
        ]);
    }
}
