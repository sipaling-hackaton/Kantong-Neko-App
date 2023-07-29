import { useForm } from "@inertiajs/react";
import Layout from "@/Layouts/AppLayout";
import bg from "./Assets/Vector 1.svg";
import coins from "./Assets/coin.png";

const TopUp = () => {
    const { data, setData, post } = useForm({
        balance: 0,
    });

    const handleChange = (value: number) => {
        setData("balance", value);
    };

    const handleSubmit = () => {
        post("/top-up");
    };

    return (
        <div className="relative bg-[#f6f1e9] min-h-[90vh] flex flex-col justify-around">
            <img
                style={{
                    top: "0px",
                    left: "50%",
                    transform: "translate(-50%)",
                }}
                className="z-10 absolute w-screen"
                src={bg}
            ></img>
            <h1 className="h-10 text-center relative z-20 text-white font-mouse self-center text-[4rem]">
                Tabung
            </h1>
            <div className="relative  z-20 flex flex-wrap gap-[1rem] justify-center items-center">
                <div
                    onClick={() => setData("balance", 10000)}
                    className="flex justify-center items-center rounded-[2rem] bg-white p-8 flex-col  w-1/3"
                >
                    <span className="whitespace-nowrap">Rp. 5.000</span>
                    <img src={coins} />
                </div>
                <div
                    onClick={() => setData("balance", 10000)}
                    className="flex justify-center items-center rounded-[2rem] bg-white flex-col p-8  w-1/3"
                >
                    <span className="whitespace-nowrap">Rp. 10.000</span>
                    <img src={coins} />
                </div>
                <div
                    onClick={() => setData("balance", 10000)}
                    className="flex flex-col justify-center items-center rounded-[2rem] bg-white p-8  w-1/3"
                >
                    <span className="whitespace-nowrap">Rp. 15.000</span>
                    <img src={coins} />
                </div>
                <div
                    onClick={() => setData("balance", 10000)}
                    className="flex flex-col justify-center items-center rounded-[2rem] bg-white p-8  w-1/3"
                >
                    <span className="whitespace-nowrap">Rp. 20.000</span>
                    <img src={coins} />
                </div>
            </div>
            <div className="flex flex-col items-center jsutify-center">
                <input
                    className="w-2/3 rounded-[2rem] text-[#613625] font-poppins"
                    type="number"
                    onChange={() => handleChange}
                    placeholder="Atau, ketik sendiri nominalnya"
                />

                <button
                    className="font-poppins w-2/3 mt-4 p-2 w-full bg-[#58cc02] text-white rounded-[2rem]"
                    onClick={() => handleSubmit()}
                >
                    Ayo Nabung
                </button>
            </div>
        </div>
    );
};

TopUp.layout = (page: any, logo: any) => <Layout children={page} />;
export default TopUp;
