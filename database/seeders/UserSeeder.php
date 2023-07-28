<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Helpers\Enum;
use App\Models\Account;
use App\Models\MerchantProduct;

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
    }
}
