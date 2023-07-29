<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class GameController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("Game/Game", [
            "activeAccount" => $request->activeAccount,
        ]);
    }

    public function Minigames()
    {
        return Inertia::render("Game/Minigame/Minigame");
    }

    public function EatMiniGame()
    {
        return Inertia::render("Game/Minigame/Eat/Eat");
    }

    // wardrobe
    public function Wardrobe()
    {
        return Inertia::render("Game/Wardrobe/Wardrobe");
    }
}
