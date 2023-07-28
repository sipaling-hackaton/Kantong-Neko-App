import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from '../../Avatar'
import { motion, useDragControls } from "framer-motion"
import { elementsColliding } from '../EndlessRun/utils/Colide'
import { useInterval } from '../EndlessRun/utils/UseInterval'
import "./Eatgame.scss"
import { Object } from './Object'
import BG from "@/Pages/Game/Minigame/Assets/Images/background.svg"
import FoodData from "./Food.json"
import { Button } from 'antd'
import Guest from '@/Layouts/GuestLayout'
import AppLayout from '@/Layouts/AppLayout'

export default function Eatgame() {
    const food: React.RefObject<HTMLDivElement> = useRef(null);
    const character: React.RefObject<HTMLDivElement> = useRef(null);


    const [open, setOpen] = useState(false);
    const [Eaten, SetEaten] = useState(false);
    const [Happy, SetHappy] = useState(false);

    // food data
    const [curFood, setCurFood] = useState(FoodData[0])

    const prevFood = () => {
        let index = FoodData.indexOf(curFood);
        if (index > 0) {
            setCurFood(FoodData[index - 1])
        }
        else {
            setCurFood(FoodData[FoodData.length - 1])
        }
    }

    const nextFood = () => {
        let index = FoodData.indexOf(curFood);
        if (index < FoodData.length - 1) {
            setCurFood(FoodData[index + 1])
        }
        else {
            setCurFood(FoodData[0])
        }
    }
    const controls = useDragControls()

    function startDrag(event: any) {
        controls.start(event)
    }


    useInterval(() => {
        if (elementsColliding(food, character)) {
            // console.log(elementsColliding(food, character))
            setOpen(true);
            if (Eaten) {
                SetHappy(true);
                setTimeout(() => {
                    SetHappy(false);
                }, 1000);
            }
        }
        else {
            setOpen(false);
        }
        console.log(Eaten)
    }, 100);

    return (
        <div id='EatPage' className='p-10 border-black flex'
        // onMouseDown={HandleMouseUp}
        >
            <img src={BG} alt="" className="absolute w-full h-full object-cover brightness-90" />
            <div onPointerDown={startDrag} />
            <Avatar Characterref={character} open={open} happy={Happy} />
            <div id='Table'>
                <Button onClick={prevFood}>Prev</Button>
                <Object ObjectRef={food}
                    Eaten={SetEaten}
                    Image={curFood.Image}
                />
                <Button onClick={nextFood}>Next</Button>
            </div>
        </div>
    )
}


Eatgame.layout = (page: any, logo: any) => <AppLayout>{page}</AppLayout>