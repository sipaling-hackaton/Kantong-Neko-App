<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use App\Helpers\Service;

class TaskController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("Task/Task");
    }

    public function QuestRewards(Request $request)
    {
        $rewardList = Service::getRewardList();
        return Inertia::render("Task/Quest", [
            "rewardList" => $rewardList,
        ]);
    }
}
