<?php

namespace App\Http\Controllers\Categories;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function store(Request $request){
       
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'image' => 'required|image|mimes:jpeg,png,gif|max:5120',
    ]);

    $imagePath = null;
    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('categories', 'public');
    }

    $category = Category::create([
        'name' => $validated['name'],
        'image' => $imagePath,
    ]);

    if($category){
        return back()->with('success', 'Category created successfully.');
    }
        return back()->with('error', 'Failed to create category.');
     }
}
