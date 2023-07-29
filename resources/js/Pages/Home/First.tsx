import bg from "./Assets/bgflat.png";
import Lottie from "lottie-react";
import animationData from "./Assets/animation_lkmklneq.json";
import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="relative flex justify-center items-center  min-h-screen">
            <img className="absolute z-10 top-0 w-screen" src={bg} />
            <div className="z-20 flex flex-col  justify-around items-center relative w-screen h-screen">
                <div className="text-white  text-[2rem] w-fit font-mouse">
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
                    <Link
                        href="/login"
                        style={{
                            height: "100%",
                            color: "black",
                        }}
                    >
                        <div className="p-4 text-white text-center rounded-[2rem] bg-[#58cc02]">
                            Mulai
                        </div>
                    </Link>
                    <Link
                        href="/register"
                        style={{
                            height: "100%",
                            color: "black",
                        }}
                    >
                        <div className="mt-4 p-4 text-white text-center rounded-[2rem] bg-[#58cc02]">
                            Sudah Punya Akun
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
