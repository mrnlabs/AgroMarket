<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
        $isCreateRoute = request()->routeIs('dashboard.stores.store');
        $imageRule = $isCreateRoute 
            ? 'required|image|mimes:jpeg,webp,png,jpg|max:2048'
            : 'nullable|image|mimes:jpeg,webp,png,jpg|max:2048';

        return [
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'image' => $imageRule,
            'images.*' => 'nullable|image|mimes:jpeg,webp,png,jpg|max:2048',
        ];
    }
}
