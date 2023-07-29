<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Account;
use App\Helpers\Service;

class IsActiveAccount
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $activeAccountId = $request->session()->get("activeAccountId");
        $accessToken = $request->session()->get("token");
        if (!$activeAccountId) {
            return redirect()->intended("/daftar-rekening/select-account");
        }
        $account = Service::getBankAccountData($accessToken, $activeAccountId);
        if (!$account) {
            return redirect()->intended("/daftar-rekening/select-account");
        }
        $request->activeAccount = $account;

        return $next($request);
    }
}
