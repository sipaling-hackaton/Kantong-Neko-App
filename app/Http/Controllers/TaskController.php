<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("Task/Task");
    }

    public function QuestRewards(Request $request)
    {
        return Inertia::render("Task/Quest");
    }

    public function QuestDetail($id, Request $request)
    {
        $data = [
            [
                "id" => 1,
                "title" => "MENCARI SI NEKO",
                "step" => [
                    "Lakukan penabungan sebesar Rp.10000",
                    "Berikan neko makan",
                    "Mainkan neko run",
                ],
            ],
            [
                "id" => 2,
                "title" => "SEBUAH RAHASIA",
                "step" => [
                    "Lakukan penabungan sebesar Rp.10000",
                    "Berikan neko pakaian",
                ],
            ],
            [
                "id" => 3,
                "title" => "SIAPAKAH ITU",
                "step" => [
                    "Lakukan penabungan sebesar Rp.10000",
                    "Gacha pakaian",
                ],
            ],
            [
                "id" => 4,
                "title" => "SIAPAKAH ITU",
                "step" => [
                    "Lakukan penabungan sebesar Rp.10000",
                    "Berikan neko makan",
                ],
            ],
        ];

        return Inertia::render("Task/QuestDetail", [
            "data" => $data[$id],
        ]);
    }

    public function TopUp()
    {
        return Inertia::render("TopUp/TopUp");
    }

    public function PostTopUp()
    {
    }
}
