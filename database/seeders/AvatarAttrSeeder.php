<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Helpers\Enum;
use App\Models\AvatarAttr;

class AvatarAttrSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dataSeed = [
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Hat"],
                "asset_url" => "https://www.svgrepo.com/show/530597/hat.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Hat"],
                "asset_url" => "https://www.svgrepo.com/show/514354/hat.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Hat"],
                "asset_url" => "https://www.svgrepo.com/show/410455/hat-iv.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Hat"],
                "asset_url" =>
                    "https://www.svgrepo.com/show/423850/hat-origami-paper.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Hat"],
                "asset_url" =>
                    "https://www.svgrepo.com/show/300317/hat-birthday.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Ribbon"],
                "asset_url" => "https://www.svgrepo.com/show/484156/ribbon.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Ribbon"],
                "asset_url" =>
                    "https://www.svgrepo.com/show/423813/ribbon-origami-paper.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Ribbon"],
                "asset_url" => "https://www.svgrepo.com/show/262012/ribbon.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Ribbon"],
                "asset_url" => "https://www.svgrepo.com/show/201313/ribbon.svg",
            ],
            [
                "type" => Enum::AVATAR_ATTRIBUTE_TYPE["Ribbon"],
                "asset_url" => "https://www.svgrepo.com/show/122480/ribbon.svg",
            ],
        ];

        foreach ($dataSeed as $data) {
            AvatarAttr::create($data);
        }
    }
}
