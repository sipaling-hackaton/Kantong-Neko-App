import { useForm, Link } from "@inertiajs/react";
import plus from "./Assets/plus.svg";

const SelectAccount = (props: any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        accountNo: "",
    });

    const postAccount = (value: any) => {
        setData(value);
        post(route("home"));
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
        <div className="bg-[#fdb202] min-h-screen">
            <h1 className="text-white text-center font-poppins font-[2rem] ">
                Pilih Atau Tambah Rekening
            </h1>
            <div className="w-screen flex flex-wrap p-4 gap-4 justify-center items-center">
                {props.bankAccounts &&
                    props.bankAccounts.map((e: any, index: number) => {
                        return (
                            <img
                                className="w-1/4 bg-white rounded-[2rem] p-4"
                                src={randomImg()}
                                onClick={() => postAccount(e.accountNo)}
                            />
                        );
                    })}
                <Link className="w-1/4" href="/daftar-rekening">
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
