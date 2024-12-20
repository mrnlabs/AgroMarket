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

     public function update(Request $request, $id)
     {
         $category = Category::find($id);
     
         if (!$category) {
             return back()->with('error', 'Failed to update category.');
         }
     
         // Validate the name separately
         $request->validate([
             'name' => 'required|string|max:255',
         ]);
     
         // Start with just the name for updating
         $data = [
             'name' => $request->name
         ];
     
         // Only handle image if it's actually uploaded
         if ($request->hasFile('image')) {
             // Validate the image
             $request->validate([
                 'image' => 'image|mimes:jpeg,png|max:5120',
             ]);
     
             // Store the new image
             $data['image'] = $request->file('image')->store('categories', 'public');
         }
     
         $category->update($data);
     
         return back()->with('success', 'Category updated successfully.');
     }

     function destroy($id) {
        $category = Category::find($id);
        if($category){
            $category->delete();
            return back()->with('success', 'Category deleted successfully.');
        }
        return back()->with('error', 'Failed to delete category.');
     }
}
