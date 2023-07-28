import bg from "./Assets/bg.png";
import Lottie from "lottie-react";
import animationData from "./Assets/animation_lkmhtcno.json";

export default function Home() {
    return (
        <div className="relative flex justify-center items-center  min-h-screen">
            <img className="absolute z-10 top-0 " src={bg} />
            <div className="z-20 flex flex-col  justify-around items-center relative w-screen h-screen">
                <div className="text-white  text-[2rem]">
                    Halo, Aku Neko
                    <br />
                    Ayo kita belajar menabung
                </div>
                <Lottie
                    style={{
                        width: "10rem",
                    }}
                    animationData={animationData}
                />
                <div>
                    <div className="p-4 text-white text-center rounded-[2rem] bg-[#58cc02]">
                        Mulai
                    </div>
                    <div className="mt-4 p-4 text-white text-center rounded-[2rem] bg-[#58cc02]">
                        Sudah Punya Akun
                    </div>
                </div>
            </div>
        </div>
    );
}
