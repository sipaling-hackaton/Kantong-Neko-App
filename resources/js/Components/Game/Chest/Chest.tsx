import React, { useRef, useState } from "react";
import "./Chest.scss"
import Sparkles from "@/Components/General/Sparkle/Sparkle";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ChestAnimation from "./Assets/Chest.json"
import { Button } from 'antd'
import { Howl } from "howler";
import { Progress } from 'antd';
import PingSfx from "@/Pages/Game/Minigame/Assets/Sounds/ping.mp3";
import BonusSfx from "@/Pages/Game/Minigame/Assets/Sounds/bonus.mp3";
import { Modal } from "antd";
// import 'antd/dist/antd.css'; // Import Ant Design CSS

export default function Chest({ }: any) {
    const [points, setPoints] = useState(80);

    var soundTwo = new Howl({
        src: [PingSfx]
    });
    var BonusSound = new Howl({
        src: [BonusSfx]
    });


    const lottieRef = useRef<any>();
    const [opened, setOpened] = useState(false); // on false chest is closed, on true chest is open
    const [modal, setModal] = useState(false); // on true modal is open, on true chest is open
    const [notif, setNotif] = useState(false); // on true modal is open, on true chest is open






    const handleOk = () => {
        setNotif(false);
        setModal(false);

    };

    const handleCancel = (e: any) => {
        e.stopPropagation();
        setNotif(false);
        setModal(false);
    };



    // to trigger the chest open
    const handleChestClick = (e: any) => {
        if (points < 50) return;
        e.stopPropagation();
        soundTwo.play();
        setOpened(false);
        setModal(true);
        setPoints(points - 50);
    };

    const handlePlayButtonClick = (e: any) => {
        // e.stopPropagation();
        if (opened === true) {
            setModal(false);
        } else {
            BonusSound.play();
        }
        lottieRef.current.play();
        setOpened(true);
        setTimeout(() => {
            setNotif(true);
        }, 1300);
    };
    return (
        <>
            <div id="Chest" onClick={handleChestClick}>
                {points >= 50 ?
                    <Sparkles>
                        <div id="Chest_image_container">
                            <img id="Chest_image" src="https://www.svgrepo.com/show/275527/treasure-chest.svg" alt="chest" />
                        </div>
                    </Sparkles>
                    :
                    <div id="Chest_image_container">
                        <img id="Chest_image" src="https://www.svgrepo.com/show/275527/treasure-chest.svg" alt="chest" />
                    </div>
                }
                <div id="right">
                    <h1 id="Chest_title" className={points >= 50 ? "text-green-500" : "text-red-500"}>
                        50/{points} Point
                    </h1>

                    {
                        points >= 50 ?
                            <p>Klaim Peti!</p>
                            :
                            <p>Butuh {50 - points} lagi untuk klaim</p>
                    }
                    <Progress percent={points >= 50 ? 100 : points} strokeColor={"green"} />
                </div>
            </div>

            {
                modal &&
                <div onClick={(e: any) => handlePlayButtonClick(e)} id="Open_Chest">
                    <Player
                        className="lottie-player"
                        ref={lottieRef}
                        // autoplay
                        // loop
                        src={ChestAnimation}
                    // style={{ height: '300px', width: '300px' }}
                    >
                        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                    </Player>
                    <h1>Tekan untuk buka peti harta!</h1>
                </div>
            }
            <Modal className="Chest_notif" open={notif} onOk={handleOk} onCancel={handleCancel}>
                Selamat anda mendapatkan 1000 koin!
            </Modal>
        </>
    )
}