import React from "react";
import Guest from "@/Layouts/GuestLayout";
import Eatgame from "@/Components/Game/Minigames/Eatgame/Eatgame";

export default function Game() {
    return (
        <div>
            <h1>Game</h1>
            <h2>Minigames</h2>

            <Eatgame />
        </div>
    );
}

Game.layout = (page: any, logo: any) => <Guest children={page} />;
