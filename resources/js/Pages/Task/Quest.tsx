import React from "react";
import Layout from "@/Layouts/AppLayout";
import bg from "./Assets/bg.svg";
import { useState } from "react";
import { List } from "antd";
import Lottie from "lottie-react";
import "./Task.css";
import animationData from "./Assets/animation_lkn2qa7f.json";
import checked from "./Assets/cheked.svg";
import circleBox from "./Assets/circleBox.svg";

export default function Task() {
    const [active, setActive] = useState(0);
    const questsArr = [
        { title: "MENCARI SI NEKO", status: true },
        { title: "SEBUAH RAHASIA", status: false },
        { title: "SIAPAKAH ITU", status: false },
        { title: "SIAPAKAH ITU", status: false },
    ];

    const rewardsArr = [
        {
            title: "1000 XP",
            subtitle: "CHATIME 1PCS",
            img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
        },
        {
            title: "1000 XP",
            subtitle: "CHATIME 1PCS",
            img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
        },
        {
            title: "1000 XP",
            subtitle: "CHATIME 1PCS",
            img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
        },
    ];

    const questRewardsArrays = [
        <Quests data={questsArr} />,
        <Rewards data={rewardsArr} />,
    ];

    return (
        <div className="min-h-[90vh]">
            <div className="relative flex flex-col text-center min-h-[50vh] items-center">
                <img className="z-10 absolute w-screen  w-[100vw]" src={bg} />
                <Lottie
                    style={{ width: "60vw", bottom: "-0%", right: "3%" }}
                    className="z-10 absolute"
                    animationData={animationData}
                />
                <div className="relative flex flex-col z-20 font-mouse text-white font-bold">
                    <span className="mt-8 font-poppins font-semibold">
                        TANTANGAN
                    </span>
                    <span className="text-[2rem]">PROGRESS KAMU</span>
                    <div className="flex gap-2">
                        <img
                            className="w-1/4 h-max mt-8 aspect-square"
                            src={
                                questsArr[0].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mb-8 aspect-square"
                            src={
                                questsArr[1].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mt-8 aspect-square"
                            src={
                                questsArr[2].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mb-8 aspect-square"
                            src={questsArr[3].status ? checked : circleBox}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="relative flex z-20 border-[#7e29cd] bg-white border-4 rounded-[2rem] p-1">
                    <div
                        style={{
                            left: active == 0 ? "4px" : "calc(50% - 4px)",
                            // right: active == 1 ? "0px" : "",
                            alignSelf: "center",
                            transition: "2s ease",
                        }}
                        className="absolute z-10 rounded-[2rem] bg-[#7e29cd] w-1/2 h-[2.5rem]"
                    >
                        {" "}
                    </div>
                    <span
                        onClick={() => setActive(0)}
                        className={
                            "relative z-20 w-1/2 text-center font-bold rounded-[2rem] p-2 " +
                            (active == 0 ? " text-white" : " text-[#7e29cd] ")
                        }
                    >
                        QUESTS
                    </span>
                    <span
                        onClick={() => setActive(1)}
                        className={
                            "relative z-20 w-1/2 text-center font-bold rounded-[2rem] p-2 " +
                            (active == 1 ? " text-white" : " text-[#7e29cd] ")
                        }
                    >
                        REWARDS
                    </span>
                </div>

                {questRewardsArrays[active]}
            </div>
        </div>
    );
}

const Quests = ({ data }: any) => {
    return (
        <div className="p-4">
            {data.map((e: any) => {
                return (
                    <div className="flex justify-between p-2">
                        <div className="flex gap-4">
                            <img src="https://cdn.discordapp.com/attachments/1134526928834015253/1134538232550408302/Search.png" />
                            <span>{e.title}</span>
                        </div>
                        <input
                            className={"border-[#7e29cd] accent-[#7e29cd] "}
                            type="checkbox"
                            checked={e.status}
                            readOnly
                        />
                    </div>
                );
            })}
        </div>
    );
};

const Rewards = ({ data }: any) => {
    return (
        <div className="p-4 w-full">
            {data.map((e: any) => {
                return (
                    <div className="flex justify-between p-4">
                        <div className="flex flex-col">
                            <div>{e.title}</div>
                            <div>{e.subtitle}</div>
                        </div>

                        <img src={e.img} />
                    </div>
                );
            })}
        </div>
    );
};

Task.layout = (page: any, logo: any) => <Layout children={page} />;
