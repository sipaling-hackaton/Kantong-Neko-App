<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "ktp_id" => "required|string|max:255|unique:" . User::class,
            "username" => "required|string|max:255|unique:" . User::class,
            "phone_number" => "required|string|max:255",
            "birthdate" => "required|date",
            "gender" => "required|in:0,1",
            "email" => "required|string|email|max:255|unique:" . User::class,
            "password" => ["required", "confirmed", Rules\Password::defaults()],
        ];
    }
}
