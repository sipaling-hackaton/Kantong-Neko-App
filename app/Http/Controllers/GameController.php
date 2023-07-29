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


    public function EndlessRun()
    {
        return Inertia::render('Game/Minigame/EndlessRun/EndlessRun');
    }
    public function EatMiniGame()
    {
        return Inertia::render("Game/Minigame/Eat/Eat");
    }

    // wardrobe
    public function Wardrobe(AvatarAttr $avatarAttr, Avatar $avatar, Service $service)
    {
        $avatarAttr = AvatarAttr::all();
        // $current = $service->getUserData(); 
        // $avatar = Avatar::all()->where('user_id', auth()->user()->id)->first();
        return Inertia::render('Game/Wardrobe/Wardrobe', [
            'ItemData' => $avatarAttr,
            'current' => $avatar
        ]);

    }
}
