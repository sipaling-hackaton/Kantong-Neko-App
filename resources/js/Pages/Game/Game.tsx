import React from "react";
import Guest from "@/Layouts/GuestLayout";
import Eatgame from "@/Components/Game/Minigames/Eatgame/Eatgame";
import { Avatar } from "@/Components/Game/Avatar";
import EndlessRun from "@/Components/Game/Minigames/EndlessRun/EndlessRun";
import { Link } from "@inertiajs/react";
import BG from "@/Pages/Game/Minigame/Assets/Images/background.svg";


export default function Game() {
    return <div style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: BG,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <img src={BG} alt="" className="z-[-1] absolute" style={{
            filter: 'brightness(0.8)',
        }} />
        {/* <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
            </div> */}
        <Link href="/game/minigames" className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Mini Games</span>
        </Link>
        test
        <Avatar />
    </div>;
}



Game.layout = (page: any, logo: any) => <Guest children={page} />;