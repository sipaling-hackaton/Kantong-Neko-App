import React, { useEffect } from "react";
import AppLayout from "@/Layouts/AppLayout";
import Lottie from "lottie-react";
import animationData from "./Assets/animation_lkmhtcno.json";
import bg from "./Assets/bg2.png";
import { useState } from "react";
import moment from "moment";
import "moment/dist/locale/id";
import { Link } from "@inertiajs/react";
moment.locale("id");

export default function Home(props: any) {
    useEffect(() => {
        console.log(props);
    }, []);

    const handleRemainingTargetDate = () => {
        const startDate = moment(props.activeAccount.termsSavings.start_date);
        const targetDate = startDate.add(
            props.activeAccount.termsSavings.time_period,
            "months"
        );
        const diff = targetDate.diff(moment());
        return moment.duration(diff).humanize();
    };

    const handleRemainingTargetDatePercentage = () => {
        const startDate = moment(props.activeAccount.termsSavings.start_date);
        const targetDate = startDate.add(
            props.activeAccount.termsSavings.time_period,
            "months"
        );
        const diff = targetDate.diff(moment());
        const percentage = 100 - moment.duration(diff).asMilliseconds() / 1000;
        return percentage;
    };

    const [blur, setBlur] = useState(true);
    return (
        <div className="relative bg-[#f5f0e8] min-h-[90vh]">
            <div>
                <img className="absolute z-10 w-screen" src={bg} />
                <div className="relative flex flex-col justify-center font-memo z-20 text-white mx-4 min-h-[30vh] font-poppins text-[2rem]">
                    <span>Halo,</span>
                    <h1 className="font-bold max-w-[60%] font-extrabold">
                        {props.activeAccount.fullName}!
                    </h1>
                </div>
                <div className="z-20 relative bg-white text-[#fdb712]  text-white flex flex-col justify-center items-center mx-4 rounded-lg p-4">
                    <Lottie
                        style={{
                            right: "0px",
                            top: "calc(-100% - 4rem)",
                            position: "absolute",
                            width: "13rem",
                        }}
                        animationData={animationData}
                    />
                    <div className="font-poppins font-bold text-[#fdb712]">
                        SALDO KAMU SAAT INI SEBESAR
                    </div>
                    <div className="flex justify-center items-center text-mouse ">
                        <span className="text-[#fdb712] font-mouse font-bold text-[1.5rem]">
                            Rp.
                        </span>
                        <span
                            onClick={() => setBlur(!blur)}
                            className="text-[3rem] text-[#fdb712] text-[2rem] font-mouse font-bold"
                        >
                            {blur ? "*******" : props.activeAccount.balance}
                        </span>
                    </div>
                </div>
                <div className="relative z-20 bg-white p-4 flex justify-between items-center mx-4 mt-4 text-white rounded-lg">
                    <span className="text-[#871fb8] font-poppins font-bold">
                        Poin Kamu
                    </span>
                    <div className="text-[#871fb8] text-mouse">
                        <span className="text-[3rem] font-mouse font-bold">
                            {props.activeAccount.exp}
                        </span>
                        <span className="font-mouse font-bold">xp</span>
                    </div>
                </div>
            </div>

            <div className="relative z-20 flex mx-4 gap-x-2 mt-4 text-[#4F200D]">
                <div className="bg-white flex flex-col p-4 rounded-lg w-1/2">
                    <div
                        className="flex justify-center items-center rounded-full w-32 h-32  self-center"
                        style={{
                            backgroundImage: `conic-gradient(#fdb202 ${props.activeAccount.termsSavings.amount_progress}%,#fbf1e9 0)`,
                        }}
                    >
                        <div className="p-8  rounded-full bg-white">
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M31.4242 15.3936C31.3368 15.3894 31.2492 15.3879 31.1617 15.3891H27.5092C24.5212 15.3891 21.9622 17.7606 21.9622 20.8536C21.9622 23.9466 24.5212 26.3181 27.5107 26.3181H31.1602C31.2517 26.3181 31.3402 26.3181 31.4227 26.3121C32.0395 26.2727 32.6209 26.0104 33.0586 25.5741C33.4963 25.1378 33.7604 24.5572 33.8017 23.9406C33.8077 23.8521 33.8077 23.7576 33.8077 23.6706V18.0366C33.8077 17.9496 33.8077 17.8551 33.8017 17.7666C33.7604 17.1502 33.4965 16.5698 33.0591 16.1335C32.6218 15.6973 32.0407 15.4348 31.4242 15.3951V15.3936ZM27.1897 22.3101C27.9592 22.3101 28.5847 21.6591 28.5847 20.8536C28.5847 20.0481 27.9592 19.3971 27.1897 19.3971C26.4202 19.3971 25.7962 20.0481 25.7962 20.8536C25.7962 21.6591 26.4187 22.3101 27.1897 22.3101Z"
                                    fill="#4F200D"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M31.1602 28.5036C31.2105 28.5018 31.2604 28.5119 31.3061 28.533C31.3517 28.5541 31.3918 28.5856 31.423 28.625C31.4543 28.6644 31.4758 28.7106 31.4859 28.7599C31.496 28.8091 31.4944 28.8601 31.4812 28.9086C31.1902 29.9466 30.7297 30.8316 29.9902 31.5756C28.9087 32.6661 27.5362 33.1506 25.8412 33.3801C24.1942 33.6036 22.0912 33.6036 19.4332 33.6036H16.3777C13.7212 33.6036 11.6167 33.6036 9.96972 33.3801C8.27472 33.1506 6.90222 32.6661 5.82072 31.5756C4.73922 30.4866 4.25922 29.1036 4.03122 27.3951C3.80922 25.7346 3.80922 23.6136 3.80922 20.9361V20.7711C3.80922 18.0936 3.80922 15.9711 4.03122 14.3121C4.25922 12.6036 4.73922 11.2236 5.81922 10.1301C6.90072 9.04109 8.27322 8.55509 9.96822 8.32709C11.6167 8.10359 13.7212 8.10359 16.3777 8.10359H19.4332C22.0897 8.10359 24.1942 8.10359 25.8412 8.32709C27.5362 8.55659 28.9087 9.04109 29.9902 10.1301C30.7297 10.8756 31.1902 11.7606 31.4812 12.8001C31.4941 12.8485 31.4955 12.8993 31.4853 12.9484C31.475 12.9974 31.4535 13.0434 31.4223 13.0826C31.3911 13.1218 31.3511 13.1532 31.3056 13.1742C31.2601 13.1952 31.2103 13.2053 31.1602 13.2036H27.5107C23.4097 13.2036 19.7962 16.4691 19.7962 20.8536C19.7962 25.2381 23.4112 28.5036 27.5122 28.5036H31.1602ZM9.23022 13.9326C9.08741 13.9332 8.94611 13.9619 8.81439 14.0171C8.68268 14.0723 8.56312 14.1529 8.46256 14.2543C8.36199 14.3557 8.28238 14.4759 8.22828 14.6081C8.17417 14.7402 8.14663 14.8818 8.14722 15.0246C8.14722 15.6291 8.63172 16.1181 9.23022 16.1181H15.0142C15.6142 16.1181 16.0987 15.6291 16.0987 15.0246C16.0995 14.736 15.9858 14.4589 15.7824 14.2542C15.5791 14.0495 15.3028 13.9338 15.0142 13.9326H9.23022Z"
                                    fill="#4F200D"
                                />
                                <path
                                    d="M12.4747 6.63959L15.4117 4.47509C16.1781 3.90849 17.1061 3.60271 18.0592 3.60271C19.0123 3.60271 19.9403 3.90849 20.7067 4.47509L23.6602 6.65159C22.4242 6.60359 21.0442 6.60359 19.5337 6.60359H16.2787C14.8957 6.60359 13.6252 6.60359 12.4747 6.63959Z"
                                    fill="#4F200D"
                                />
                            </svg>
                        </div>
                    </div>
                    <span className="text-[0.7rem] mt-4 font-poppins font-medium">
                        TARGET SALDO KAMU
                    </span>
                    <span className="font-bold font-poppins">
                        Rp {props.activeAccount.termsSavings.target_amount}
                    </span>
                </div>

                <div className="bg-white flex flex-col p-4 rounded-lg w-1/2">
                    <div
                        className="flex justify-center items-center rounded-full w-32 h-32  self-center"
                        style={{
                            backgroundImage: `conic-gradient(#871fb8 ${handleRemainingTargetDatePercentage()}%,#fbf1e9 0)`,
                        }}
                    >
                        <div className="p-8  rounded-full bg-white">
                            <svg
                                width="36"
                                height="37"
                                viewBox="0 0 36 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.5 19.957H24.75V24.187L28.41 26.302L27.285 28.252L22.5 25.492V19.957ZM28.5 12.457H7.5V28.957H14.505C13.86 27.592 13.5 26.062 13.5 24.457C13.5 21.6722 14.6062 19.0015 16.5754 17.0324C18.5445 15.0633 21.2152 13.957 24 13.957C25.605 13.957 27.135 14.317 28.5 14.962V12.457ZM7.5 31.957C6.70435 31.957 5.94129 31.6409 5.37868 31.0783C4.81607 30.5157 4.5 29.7527 4.5 28.957V7.95702C4.5 6.29202 5.835 4.95702 7.5 4.95702H9V1.95702H12V4.95702H24V1.95702H27V4.95702H28.5C29.2956 4.95702 30.0587 5.27309 30.6213 5.8357C31.1839 6.3983 31.5 7.16137 31.5 7.95702V17.107C33.36 18.997 34.5 21.592 34.5 24.457C34.5 27.2418 33.3938 29.9125 31.4246 31.8816C29.4555 33.8508 26.7848 34.957 24 34.957C21.135 34.957 18.54 33.817 16.65 31.957H7.5ZM24 17.182C22.0706 17.182 20.2201 17.9485 18.8558 19.3128C17.4915 20.6771 16.725 22.5276 16.725 24.457C16.725 28.477 19.98 31.732 24 31.732C24.9554 31.732 25.9014 31.5438 26.784 31.1782C27.6667 30.8126 28.4687 30.2768 29.1442 29.6012C29.8197 28.9257 30.3556 28.1237 30.7212 27.241C31.0868 26.3584 31.275 25.4124 31.275 24.457C31.275 20.437 28.02 17.182 24 17.182Z"
                                    fill="#871FB8"
                                />
                            </svg>
                        </div>
                    </div>
                    <span className="text-[0.7rem] mt-4 font-poppins font-medium">
                        WAKTU KAMU UNTUK NABUNG
                    </span>
                    <span className="font-bold font-poppins">
                        {handleRemainingTargetDate()}
                    </span>
                </div>
            </div>
            <Link href="/top-up">
                <div className="relative z-20 bg-[#48b007] mx-4 mt-4 flex justify-center items-center text-white rounded-[2rem] p-4">
                    <img />
                    <span>AYO NABUNG LAGI!</span>
                </div>
            </Link>
        </div>
    );
}

Home.layout = (page: any, logo: any) => <AppLayout children={page} />;
