<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;
use App\Helpers\Service;
use App\Models\Account;
use Illuminate\Support\Facades\Http;
use App\Models\TermsSavings;

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
        $request->validate([
            "name" => "required|string",
            "gender" => "required",
            "birthdate" => "required|date",
            "target_amount" => "required|integer|min:100000",
            "time_period" => "required|integer|min:18|max:120",
        ]);

        $accessToken = $request->session()->get("token");
        $user = Service::getUserData($accessToken);

        $newAcc = new Account([
            "name" => $request->name,
            "gender" => $request->gender,
            "birthdate" => $request->birthdate,
            "exp" => 0,
        ]);

        $newTermsSavings = new TermsSavings([
            "target_amount" => $request->target_amount,
            "time_period" => $request->time_period,
        ]);

        try {
            $parentAcc = Service::createBankAccount(
                $accessToken,
                $user["serverUserId"],
                $newAcc,
                $newTermsSavings
            );
            return redirect()->intended("/daftar-rekening/select-account");
        } catch (Exception $e) {
            return redirect()
                ->back()
                ->with("error", $e->getMessage());
        }
    }
}
