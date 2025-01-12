<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductRecommendationController extends Controller
{
    public function getRecommendations(Product $product){
        $cross_sells = $product->crossSellProducts()
        ->with(['images', 'categories'])
        ->take(4)
        ->get()
        ->map(fn ($product) => [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'thumbnail' => $product->images->first()?->url,
            'category' => $product->categories->first()?->name,
        ]);

    $up_sells = $product->upSellProducts()
        ->with(['images', 'categories'])
        ->take(2)
        ->get()
        ->map(fn ($product) => [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'thumbnail' => $product->images->first()?->url,
            'category' => $product->categories->first()?->name,
            'upgrade_benefits' => $product->upgrade_benefits,
        ]);

        return Inertia::render('FrontPages/Products/ProductDetails',[
            'cross_sells' => $cross_sells,
            'up_sells' => $up_sells,
        ]);
    }
}
