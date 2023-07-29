import { useForm, Link } from "@inertiajs/react";
import plus from "./Assets/plus.svg";
import { useEffect } from "react";

const SelectAccount = (props: any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        account_id: "",
    });

    useEffect(() => {
        if (data.account_id !== "") {
            post(route("home.store"));
        }
    }, [data]);

    const handleInputChange = (id: any) => {
        setData("account_id", id);
    };

    // const bankAccounts = ["1", "2", "3"];

    const kucingArr = [
        "https://www.svgrepo.com/show/401274/cat-face-with-wry-smile.svg",
        "https://www.svgrepo.com/show/401273/cat-face.svg",
        "https://www.svgrepo.com/show/396585/grinning-cat-with-smiling-eyes.svg",
    ];

    const randomImg = () => {
        return kucingArr[Math.floor(Math.random() * kucingArr.length)];
    };

    return (
        <div className="bg-[#fdb202] min-h-screen flex flex-col gap-[20vh] items-center">
            <h1 className="mt-[10vh] text-white text-center font-poppins text-[2rem] font-mouse">
                Pilih Atau Tambah Rekening
            </h1>
            <div className="w-screen flex flex-wrap p-4 gap-4 justify-center items-center">
                {props.listAccount &&
                    props.listAccount.map((e: any, index: number) => {
                        return (
                            <button
                                className="w-1/3 self-stretch bg-white rounded-[2rem] p-4"
                                onClick={() => handleInputChange(e.id)}
                            >
                                <img src={randomImg()} />
                                <span className="font-poppins font-bold text-[#613625]">
                                    {e.name}
                                </span>
                            </button>
                        );
                    })}
                <Link className="w-1/3 self-stretch" href="/daftar-rekening">
                    <div className="bg-white w-full p-4 rounded-[2rem]">
                        <img
                            src={"https://www.svgrepo.com/show/522234/plus.svg"}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SelectAccount;
