<?php

namespace App\Helpers;

class Constant
{
    public const HACKATHON_API_ENDPOINT = [
        "createUser" => "/user/auth/create",
        "generateToken" => "/user/auth/token",
        "getUserInfo" => "/user/info",
        "createBankAccount" => "/bankAccount/create",
        "getAccountInfo" => "/bankAccount/info",
        "getAllAccount" => "/bankAccount/info/all",
        "addBalance" => "/bankAccount/addBalance",
        "createTransaction" => "/bankAccount/transaction/create",
        "getTransactionInfo" => "/bankAccount/transaction/info",
    ];

    public const STATUS_SUCCESS = 1;

    public const STATUS_FAILED = 0;
}
