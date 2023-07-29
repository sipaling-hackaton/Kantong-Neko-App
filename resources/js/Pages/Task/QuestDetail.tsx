import bg from "./Assets/bgDetail.svg";
import star from "./Assets/star.svg";
import Lottie from "lottie-react";
import animationData from "./Assets/animation_lkno3yky.json";
import Layout from "@/Layouts/AppLayout";

export default function QuestDetail(props: any) {
    return (
        <div className="relative w-screen min-h-screen">
            <div className="">
                <img className="absolute w-full z-10 " src={bg} />
                <div className="pl-4 flex flex-col pt-8 relative z-20 text-white min-h-[40vh]">
                    <span className="font-poppins font-medium">TANTANGAN</span>
                    <span className="font-mouse font-black text-[2.5rem] max-w-[60%]">
                        {props.data.title}
                    </span>
                </div>
            </div>
            <div className="px-4">
                <span className="text-[#7e29cd] font-poppins">
                    {props.data.title}
                </span>
                <div className="flex gap-4 flex-col">
                    {props.data.step &&
                        props.data.step.map((e: any) => {
                            return (
                                <div className="flex gap-4 items-center text-[#7e29cd] font-poppins font-black">
                                    <img src={star} />
                                    <span>{e}</span>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="flex items-center bg-[#fdb202] mx-4 rounded-[2rem] py-4 px-8">
                <div className="flex flex-col text-white ">
                    <span className="font-poppins">Hadiahnya?</span>
                    <span className="text-[3rem] font-memo font-bold">
                        500XP!
                    </span>
                </div>
                <div>
                    <Lottie
                        className="max-h-max"
                        animationData={animationData}
                    />
                </div>
            </div>
        </div>
    );
}

QuestDetail.layout = (page: any, logo: any) => <Layout children={page} />;
