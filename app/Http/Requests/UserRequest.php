<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
            'phone' => ['required', 'string', 'max:11'],
            'alt_phone' => ['required', 'string', 'max:11'],
            'role' => ['required', 'exists:roles,id'],
            'address' => ['required', 'string', 'max:255'],
            // 'city' => ['required', 'string', 'max:255'],
            // 'state' => ['required', 'string', 'max:255'],
            // 'country' => ['required', 'string', 'max:255'],
            // 'zip_code' => ['required', 'string', 'max:255'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],

        ];
    }
}
