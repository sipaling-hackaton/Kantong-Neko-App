<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */

    public function handle($request, $next, ...$guards)
    {
        $this->authenticate($request, $guards);

        $authPasport = $request->session()->get("authPasport");

        if (!$authPasport) {
            $request->session()->flush();
            return redirect()->route("first");
        }

        $authPasport = decrypt($authPasport);
        $request->username = $authPasport[0];
        $request->password = $authPasport[1];
        $response = Http::post(env("HACKATHON_API_URL") . "/user/auth/token", [
            "username" => $request->username,
            "loginPassword" => $request->password,
        ]);

        if (
            !$response->successful() &&
            $response->json()["success"] == Constant::STATUS_FAILED
        ) {
            $request->session()->flush();
            return redirect()
                ->route("first")
                ->with(
                    "error",
                    "Sesi anda telah habis, silahkan login kembali"
                );
        }
        $res = $response->json();
        $request->session()->put("token", $res["data"]["accessToken"]);

        return $next($request);
    }

    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route("first");
    }
}
