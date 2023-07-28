<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;
use App\Helpers\Constant;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render("Auth/Login", [
            "canResetPassword" => Route::has("password.request"),
            "status" => session("status"),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Login to the user's account via Hackathon API
        $reponse = Http::post(env("HACKATHON_API_URL") . "/user/auth/token", [
            "username" => $request->email,
            "loginPassword" => $request->password,
        ]);

        if ($response->successfull()) {
            $res = $response->json();
            $request->session()->put("token", $res["token"]);

            return redirect()->intended(RouteServiceProvider::HOME);
        }

        return redirect()
            ->back()
            ->withErrors("Invalid credentials");

        // $request->authenticate();

        // $request->session()->regenerate();

        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard("web")->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect("/");
    }
}
