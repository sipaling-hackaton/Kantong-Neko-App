<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;
use App\Helpers\Service;

class HomeController extends Model
{
    public function __invoke(Request $request)
    {
        $user = Service::getUserData($request->session()->get("token"));
        $user["bankAccounts"] = Service::getListBankAccount(
            $request->session()->get("token")
        );
        $activeAccount = Service::getBankAccountData(
            $request->session()->get("token"),
            5859455693053699
        );
        return Inertia::render("Home/Home", [
            "token" => $request->session()->get("token"),
            "user" => $user,
            "activeAccount" => $activeAccount,
            "errors" => session("errors"),
            "auth" => $request->user(),
        ]);
    }
}
