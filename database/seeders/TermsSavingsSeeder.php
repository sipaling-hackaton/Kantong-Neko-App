<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TermsSavings;

class TermsSavingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TermsSavings::create([
            "account_id" => "5859455693053699",
            "target_amount" => 100000000,
            "time_period" => 36,
        ]);
    }
}
