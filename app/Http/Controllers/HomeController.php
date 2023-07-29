<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;
use App\Helpers\Service;
use App\Models\Account;

class HomeController extends Model
{
    public function index(Request $request)
    {
        $user = Service::getUserData($request->session()->get("token"));
        $user["bankAccounts"] = Service::getListBankAccount(
            $request->session()->get("token")
        );

        return Inertia::render("Home/Home", [
            "token" => $request->session()->get("token"),
            "user" => $user,
            "errors" => session("errors"),
            "auth" => $request->user(),
            "activeAccount" => $request->activeAccount,
        ]);
    }

    public function store(Request $request)
    {
        $request->session()->put("activeAccountId", $request->account_id);
        return redirect()->intended("/");
    }

    public function DaftarAccount(Request $request)
    {
        $listAccount = Service::getListBankAccount(
            $request->session()->get("token")
        );

        // $request->session()->put("accessToken", $request);

        return Inertia::render("DaftarRekening/SelectAccount", [
            "token" => $request->session()->get("token"),
            "listAccount" => $listAccount,
            "errors" => session("errors"),
            "auth" => $request->user(),
        ]);
    }

    public function ViewCreateRekening()
    {
        return Inertia::render("DaftarRekening/DaftarRekening");
    }

    public function CreateRekening(Request $request)
    {
        $user = Service::getUserData($request->session()->get("token"));
        $user["bankAccounts"] = Service::getListBankAccount(
            $request->session()->get("token")
        );

        $request->session()->put("accessToken", $request);

        $id = Http::withToken($accessToken)->pos(
            env("HACKATHON_API_URL") . "/bankAccount/create",
            [
                "balance" => 0,
            ]
        );

        $request->validate([
            "id" => $id,
            "name" => "required|string",
            "gender" => "required|in:0,1",
            "birthdate" => "required|date",
            "exp" => 50,
        ]);

        return Inertia::render("DaftarRekening/SelectAccount", [
            "token" => $request->session()->get("token"),
            "user" => $user,
            "errors" => session("errors"),
            "auth" => $request->user(),
        ]);
    }
}
