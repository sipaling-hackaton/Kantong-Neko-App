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
    }
}
