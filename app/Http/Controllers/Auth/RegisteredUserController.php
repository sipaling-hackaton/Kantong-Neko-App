<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render("Auth/Register");
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            "ktp_id" => "required|string|max:255|unique:" . User::class,
            "username" => "required|string|max:255|unique:" . User::class,
            "phone_number" => "required|string|max:255",
            "birthdate" => "required|date",
            "gender" => "required|in:0,1",
            "email" => "required|string|email|max:255|unique:" . User::class,
            "password" => ["required", "confirmed", Rules\Password::defaults()],
        ]);

        $res = Http::post(env("HACKATHON_API_URL") . "/user/auth/create", [
            "ktpId" => $request->ktp_id,
            "username" => $request->username,
            "loginPassword" => $request->password,
            "phoneNumber" => $request->phone_number,
            "birthDate" => $request->birthdate,
            "gender" => $request->gender,
            "email" => $request->email,
        ]);

        if (
            !$res->successful() &&
            $res->json()["success"] == Constant::STATUS_FAILED
        ) {
            return redirect()
                ->back()
                ->withErrors("Gagal membuat akun baru");
        }

        $user = User::create([
            "ktp_id" => $request->ktp_id,
            "username" => $request->username,
            "phone_number" => $request->phone_number,
            "birthdate" => $request->birthdate,
            "gender" => $request->gender,
            "email" => $request->email,
            "password" => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
