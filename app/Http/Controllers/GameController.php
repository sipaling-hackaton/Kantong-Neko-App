<?php

namespace App\Http\Controllers;

use App\Models\Avatar;
use App\Models\AvatarAttr;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
// use Helpers\Service;
use App\Helpers\Service;

class GameController extends Controller
{
    public function __invoke(Request $request, AvatarAttr $avatarAttr)
    {
        $avatarAttr = AvatarAttr::all();
        return Inertia::render('Game/Game', [
            'ItemData' => $avatarAttr,
            "activeAccount" => $request->activeAccount,
        ]);
    }


    public function Minigames()
    {
        return Inertia::render("Game/Minigame/Minigame");
    }


    public function EndlessRun(Request $request)
    {
        return Inertia::render('Game/Minigame/EndlessRun/EndlessRun',[
            "activeAccount" => $request->activeAccount,
        ]);
    }
    public function EatMiniGame(Request $request)
    {
        return Inertia::render("Game/Minigame/Eat/Eat", [
            "activeAccount" => $request->activeAccount,
        ]);
    }

    // wardrobe
    public function Wardrobe(Request $request, AvatarAttr $avatarAttr)
    {
        $avatarAttr = AvatarAttr::all();
        return Inertia::render('Game/Wardrobe/Wardrobe', [
            'ItemData' => $avatarAttr,
            "activeAccount" => $request->activeAccount,
            "avatar" => "avatar cek",
        ]);
    }
}