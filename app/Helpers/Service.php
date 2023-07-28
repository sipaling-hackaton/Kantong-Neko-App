<?php

namespace App\Helpers;

use Exception;
use App\Helpers\Constant;
use Illuminate\Support\Facades\Http;
use App\Models\TermsSavings;
use App\Models\Account;
use App\Models\MerchantPartner;
use App\Models\MerchantProduct;

class Service
{
    /**
     * Get the user's (parent account) information.
     * TESTED: SUCCESS
     */
    public static function getUserData($accessToken)
    {
        try {
            $res = Http::withToken($accessToken)->post(
                env("HACKATHON_API_URL") . "/user/info"
            );
            if (
                $res->successful() &&
                $res->json()["success"] == Constant::STATUS_SUCCESS
            ) {
                return $res->json()["data"];
            }
            throw new Exception("Gagal mengambil data user");
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Get list of user's bank accounts (child accounts)
     * TESTED: SUCCESS
     */
    public static function getListBankAccount($accessToken)
    {
        try {
            $res = Http::withToken($accessToken)->post(
                env("HACKATHON_API_URL") . "/bankAccount/info/all"
            );
            if (
                $res->successful() &&
                $res->json()["success"] == Constant::STATUS_SUCCESS
            ) {
                return $res->json()["data"]["accounts"];
            }
            throw new Exception("Gagal mengambil data list rekening");
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Get specific bank account's information
     * TESTED: SUCCESS
     */
    public static function getBankAccountData($accessToken, $accountNumber)
    {
        try {
            $res = Http::withToken($accessToken)->post(
                env("HACKATHON_API_URL") . "/bankAccount/info",
                [
                    "accountNo" => $accountNumber,
                ]
            );
            if (
                $res->successful() &&
                $res->json()["success"] == Constant::STATUS_SUCCESS
            ) {
                $activeAccount = $res->json()["data"];
                $termsSavings = TermsSavings::where(
                    "account_id",
                    $accountNumber
                )->first();
                $termsSavings["instalment"] = ceil(
                    $termsSavings["target_amount"] /
                        $termsSavings["time_period"]
                );

                // Calculate the progress of the savings in percentage
                $termsSavings["amount_progress"] =
                    $activeAccount["balance"] > 0
                        ? ceil(
                            ($activeAccount["balance"] /
                                $termsSavings["target_amount"]) *
                                100
                        )
                        : 0;
                $activeAccount["termsSavings"] = $termsSavings;
                return $activeAccount;
            }
            throw new Exception("Gagal mengambil data rekening");
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Create a new bank account (child account)
     * TESTED: UNTESTED
     */
    public static function createBankAccount(
        $accessToken,
        $userId,
        Account $account,
        $startBalance = 0
    ) {
        try {
            $res = Http::withToken($accessToken)->post(
                env("HACKATHON_API_URL") . "/bankAccount/create",
                [
                    "balance" => $startBalance,
                ]
            );
            if (
                $res->successful() &&
                $res->json()["success"] == Constant::STATUS_SUCCESS
            ) {
                $user = User::find($userId);
                $user->accounts()->save($account);
                return $user;
            }
            throw new Exception("Gagal membuat rekening baru");
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Create a terms savings (tabungan berjangka)
     * TESTED: UNTESTED
     */
    public static function createTermsSavings(
        $accessToken,
        TermsSavings $termsSavings,
        $accountNumber
    ) {
        try {
            $tempAcc = Account::where("account_id", $accountNumber)
                ->first()
                ->termsSavings()
                ->save($termsSavings);
            $tempAcc->termSavings()->save($termsSavings);
            return $tempAcc;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
