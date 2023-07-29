<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MerchantPartner;
use App\Models\MerchantProduct;
use App\Models\Account;

class MerchantPartnersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bukaLapakProducts = [
            [
                "name" => "Gratis Ongkir Rp 20.000",
                "description" =>
                    "Dapatkan gratis ongkir hingga Rp 20.000 untuk pembelian produk di Bukalapak",
                "image" =>
                    "https://s0.bukalapak.com/athena/microsite-lite/original/3045e220-eb7e-fbc0-d4c9-66d3551fca5e.webp.webp",
                "start_date" => "2023-07-28",
                "end_date" => "2023-09-28",
                "stock" => 50,
                "xp_price" => 1000,
            ],
            [
                "name" => "Gratis Ongkir Rp 10.000",
                "description" =>
                    "Dapatkan gratis ongkir hingga Rp 20.000 untuk pembelian produk di Bukalapak",
                "image" =>
                    "https://s0.bukalapak.com/athena/microsite-lite/original/3045e220-eb7e-fbc0-d4c9-66d3551fca5e.webp.webp",
                "start_date" => "2023-07-28",
                "end_date" => "2023-09-28",
                "stock" => 100,
                "xp_price" => 1000,
            ],
        ];

        $bpMerchant = MerchantPartner::create([
            "name" => "Bukalapak",
            "description" =>
                "Bukalapak adalah salah satu perusahaan e-commerce terbesar di Indonesia. Bukalapak didirikan oleh Achmad Zaky, Nugroho Herucahyono, dan Fajrin Rasyid pada tahun 2010. Bukalapak memiliki lebih dari 100 juta pengguna terdaftar dan lebih dari 4 juta mitra usaha.",
            "logo" =>
                "https://iconlogovector.com/uploads/images/2023/02/lg-40647590fdc8ecf73e94b8c156b8f41451.jpg",
        ]);

        foreach ($bukaLapakProducts as $bpProduct) {
            $product = new MerchantProduct($bpProduct);
            $bpMerchant->merchantProducts()->save($product);
        }

        $product = MerchantProduct::all()->random();
        $account = Account::all()->random();
        $account->claimedRewards()->attach($product->id);
        $account->save();

        $chatimeProducts = [
            [
                "name" => "Chatime Milk Tea",
                "description" => "Chatime Milk Tea",
                "image" =>
                    "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
                "start_date" => "2023-07-28",
                "end_date" => "2023-09-28",
                "stock" => 50,
                "xp_price" => 1000,
            ],
        ];

        $chtMerchant = MerchantPartner::create([
            "name" => "Chatime",
            "description" =>
                "Chatime adalah jaringan kedai minuman teh terbesar di dunia. Chatime didirikan pada tahun 2005 oleh Henry Wang Yao-Hui di Hsinchu, Taiwan. Chatime memiliki lebih dari 1.000 kedai di seluruh dunia.",
            "logo" =>
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chatime_logo.svg/1200px-Chatime_logo.svg.png",
        ]);

        foreach ($chatimeProducts as $chtProduct) {
            $product = new MerchantProduct($chtProduct);
            $chtMerchant->merchantProducts()->save($product);
        }
    }
}
