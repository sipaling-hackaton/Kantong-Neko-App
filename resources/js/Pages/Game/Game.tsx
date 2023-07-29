import React from "react";
import Guest from "@/Layouts/GuestLayout";
import Eatgame from "@/Components/Game/Minigames/Eatgame/Eatgame";
import { Avatar } from "@/Components/Game/Avatar";
import EndlessRun from "@/Components/Game/Minigames/EndlessRun/EndlessRun";
import { Link } from "@inertiajs/react";
import BG from "@/Pages/Game/Minigame/Assets/Images/background.svg";
import Chest from "@/Components/Game/Chest/Chest";
import "./Game.scss";
// import useSound from "use-sound";
// import ReactHowler, { } from "react-howler";
import { Howl } from "howler";
import ClickSfx from "@/Pages/Game/Minigame/Assets/Sounds/click.mp3";
import PingSfx from "@/Pages/Game/Minigame/Assets/Sounds/ping.mp3";
import WardrobeData from "@/Pages/Game/Wardrobe/WardrobeData.json";
import AppLayout from "@/Layouts/AppLayout";
export default function Game() {
    var Sound = new Howl({
        src: [ClickSfx],
    });

    var soundTwo = new Howl({
        src: [PingSfx],
    });

    // placeholder
    const wardrobe = WardrobeData[0];

    return (
        <div id="Game_page">
            <img src={BG} id="bg" />
            <Chest />

            {/* <div className="Container" style={{
            // scale: 0.1,
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #fff",
            backgroundColor: "white",
            position: "relative",
        }}
        >
            <Avatar outfit={wardrobe} size="0.23" />
        </div> */}
            <Avatar outfit={wardrobe} />
            <div id="Navigate">
                <Link
                    onClick={() => {
                        Sound.play();
                    }}
                    href="/game/minigames"
                    className="ButtonNav"
                >
                    <img
                        src="https://www.svgrepo.com/show/95376/game-controller.svg"
                        alt=""
                    />
                    {/* Mini Games */}
                </Link>
                <Link
                    onClick={() => {
                        soundTwo.play();
                    }}
                    href="/game/wardrobe"
                    className="ButtonNav"
                >
                    <img
                        src="https://www.svgrepo.com/show/234613/clothes-shirt.svg"
                        alt=""
                    />
                    {/* Wardrobe */}
                </Link>
            </div>
        </div>
    );
}

Game.layout = (page: any, logo: any) => <AppLayout children={page} />;
