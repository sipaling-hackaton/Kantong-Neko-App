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

        // $activeAccount = Service::getBankAccountData(
        //     $request->session()->get("token"),
        //     5859455693053699
        // );

        // $request->session()->put("accessToken", $request);

        // $activeAccount = Service::getBankAccountData(
        //     $request->session()->get("token"),
        //     5859455693053699
        // );

        return Inertia::render("Home/Home", [
            "token" => $request->session()->get("token"),
            "user" => $user,
            // "activeAccount" => $activeAccount,
            "errors" => session("errors"),
            "auth" => $request->user(),
        ]);
    }

    public function DaftarAccount()
    {
        $user = Service::getUserData($request->session()->get("token"));
        $user["bankAccounts"] = Service::getListBankAccount(
            $request->session()->get("token")
        );

        $request->session()->put("accessToken", $request);

        return Inertia::render("DaftarRekening/SelectAccount", [
            "token" => $request->session()->get("token"),
            "user" => $user,
            "accountsNo" => $user->accountsNo,
            "errors" => session("errors"),
            "auth" => $request->user(),
        ]);
    }

    public function CreateRekening()
    {
        $user = Service::getUserData($request->session()->get("token"));
        $user["bankAccounts"] = Service::getListBankAccount(
            $request->session()->get("token")
        );

        $request->session()->put("accessToken", $request);

        dd($user);
        $id = Http::post(env("HACKATHON_API_URL") . "/bankAccount/create", [
            "balance" => 0,
        ]);

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
