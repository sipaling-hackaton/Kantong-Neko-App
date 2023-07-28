<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Account;
use App\Models\MerchantProduct;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Account::create([
            "id" => "5859455693053699",
            "name" => "Rivo Juicer Wowor",
            "gender" => "male",
            "birthdate" => "2002-06-05",
            "exp" => 50,
        ]);
    }
}
