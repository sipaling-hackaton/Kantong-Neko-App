<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Helpers\Enum;
use App\Models\Account;
use App\Models\MerchantProduct;
use App\Models\Avatar;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            "ktp_id" => "172812672",
            "username" => "NINOKLEKSONO",
            "phone_number" => "081296867118",
            "gender" => Enum::GENDER["Woman"],
            "birthdate" => "2002-12-15",
            "email" => "suga.gmail@gmail.com",
            "password" => Hash::make("adyawerta"),
        ]);

        $accountData = [
            "id" => "5859455693053699",
            "name" => "Rivo Juicer Wowor",
            "gender" => Enum::GENDER["Man"],
            "birthdate" => "2002-06-05",
            "exp" => 50,
        ];

        $acc = new Account($accountData);
        $user->accounts()->save($acc);

        User::create([
            "ktp_id" => "3674092009120002",
            "username" => "ADRIANFINANTYO",
            "phone_number" => "082114188134",
            "gender" => Enum::GENDER["Man"],
            "birthdate" => "2023-07-31",
            "email" => "adrianfinantyo@gmail.com",
            "password" => Hash::make("adrian07"),
        ]);

        User::create([
            "ktp_id" => "098320894",
            "username" => "KOONGH",
            "phone_number" => "92348304",
            "gender" => Enum::GENDER["Man"],
            "birthdate" => "2003-11-11",
            "email" => "koonghiap123@gmail.com",
            "password" => Hash::make("Koongh11103"),
        ]);
    }
}
