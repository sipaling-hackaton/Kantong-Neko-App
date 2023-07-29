<?php

namespace App\Helpers;

use Exception;
use App\Helpers\Constant;
use Illuminate\Support\Facades\Http;
use App\Models\TermsSavings;
use App\Models\Account;
use App\Models\MerchantPartner;
use App\Models\MerchantProduct;
use App\Models\Avatar;

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
                $arrAccount = [];
                foreach ($res->json()["data"]["accounts"] as $account) {
                    $account = Account::find($account["accountNo"]);
                    array_push($arrAccount, $account);
                }
                return $arrAccount;
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
                $account = Account::find($accountNumber);
                $termsSavings = $account->currentSavings;
                $termsSavings["instalment"] = ceil(
                    $termsSavings["target_amount"] /
                        $termsSavings["time_period"]
                );
                $avatar = Avatar::with("hat", "ribbon")->find(
                    $account->avatar->id
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
                $activeAccount["avatar"] = $avatar;
                $activeAccount["exp"] = $account->exp;
                $activeAccount["fullName"] = $account->name;
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

    /**
     * Get list of rewards from merchant partners
     */
    public static function getRewardList()
    {
        try {
            $merch = MerchantProduct::with("merchantPartner")->get();
            return $merch;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Add exp to the account
     */
    public static function addExp($accountId, $value)
    {
        try {
            $account = Account::find($accountId);
            if (!$account) {
                throw new Exception("Akun tidak ditemukan");
            }
            $account->exp += $value;
            $account->save();
            return $account;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Reduce exp from the account
     */
    public static function reduceExp($accountId, $value)
    {
        try {
            $account = Account::find($accountId);
            if (!$account) {
                throw new Exception("Akun tidak ditemukan");
            }
            $account->exp -= $value;
            $account->save();
            return $account;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Get list of avatar attributes
     */
    public static function getListAvatarAttr()
    {
        try {
            return AvatarAttr::all();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Update avatar attributes
     */
    public static function updateAvatar(
        $accountId,
        $hatId = null,
        $ribbonId = null
    ) {
        try {
            $account = Account::find($accountId);
            if (!$account) {
                throw new Exception("Akun tidak ditemukan");
            }
            $account->avatar->hat_id = $hatId;
            $account->avatar->ribbon_id = $ribbonId;
            $account->avatar->save();
            return $account;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Add balance to the account
     */
    public static function AddBalance(Request $request)
    {
        try {
            $res = Http::withToken($accessToken)->post(
                env("HACKATHON_API_URL") . "/bankAccount/addBalance",
                [
                    "receiverAccountNo" => $activeAccount,
                    "amount" => $balance,
                ]
            );

            return $res;

            throw new Exception("Gagal menambahkan balance");
        } catch (Exception $err) {
            throw new Exception($e->getMessage());
        }
    }
}
