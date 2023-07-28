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

export default function Chest() {

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




    const handleChestClick = (e: any) => {
        e.stopPropagation();
        soundTwo.play();
        setOpened(false);
        setModal(true);
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
        setNotif(true);

    };
    return (
        <>
            <div id="Chest" onClick={handleChestClick}>
                <Sparkles>
                    <div id="Chest_image_container">
                        <img id="Chest_image" src="https://www.svgrepo.com/show/275527/treasure-chest.svg" alt="chest" />
                    </div>
                </Sparkles>
                <div id="right">
                    <h1 id="Chest_title">
                        Claim your chest!
                    </h1>
                    <Progress percent={100} strokeColor={"green"} />
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
            <Modal style={{
                background: "transparent",
                boxShadow: "none",
            }} title="Basic Modal" open={notif} onOk={handleOk} onCancel={handleCancel}>
                test
            </Modal>
        </>
    )
}