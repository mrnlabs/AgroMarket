<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
{
    $isCreateRoute = request()->routeIs('dashboard.products.store');
    // or check against the route name pattern
    // $isCreateRoute = request()->route()->getName() === 'dashboard.products.store';
// dd($isCreateRoute);
    $imageRule = $isCreateRoute 
        ? 'required|image|mimes:jpeg,webp,png,jpg|max:2048'
        : 'nullable|image|mimes:jpeg,webp,png,jpg|max:2048';

    return [
        'title' => 'required',
        'short_description' => 'required',
        'description' => 'required',
        'price' => 'required',
        'quantity' => 'required',
        'category_id' => 'required|exists:categories,id',
        'image' => $imageRule,
        'images.*' => 'nullable|image|mimes:jpeg,webp,png,jpg|max:2048',
        'tags' => 'nullable|array',
        'tags.*' => 'exists:tags,id'
    ];
}
}
