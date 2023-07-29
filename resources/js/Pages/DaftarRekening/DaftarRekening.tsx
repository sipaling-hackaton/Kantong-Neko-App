import { useForm, Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

const DaftarRekening = (props: any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        gender: null,
        birthdate: "",
    });

    const postBankAccount = (e: any) => {
        e.preventDefault();
        post(route("daftarRek.store"));
    };

    const handleInputChange = (e: any) => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setData(name, value);
    };

    return (
        <div className="flex flex-col bg-[#fdb202] justify-center items-center min-h-[100vh]">
            <h1 className="text-white font-mouse text-[2rem]">
                DAFTAR AKUN REKENING
            </h1>
            <form className="mt-[5vh]" onSubmit={postBankAccount}>
                <div>
                    <InputLabel
                        className="text-white"
                        htmlFor="name"
                        value="Nama Lengkap"
                    />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleInputChange}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel className="mt-2 text-white" value="Gender" />
                    <div className="flex gap-1">
                        <TextInput
                            id="genderP"
                            type="radio"
                            name="gender"
                            value="1"
                            className="mt-1 block "
                            autoComplete="gender"
                            onClick={handleInputChange}
                        />
                        <label htmlFor="genderP">Perempuan</label>
                    </div>
                    <div className="flex gap-1">
                        <TextInput
                            id="genderL"
                            type="radio"
                            name="gender"
                            value="0"
                            className="mt-1 block "
                            autoComplete="gender"
                            onClick={handleInputChange}
                        />
                        <label htmlFor="genderL">Laki-laki</label>
                    </div>

                    <InputError message={errors.gender} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="birthdate"
                        value="Tanggal Lahir"
                    />

                    <TextInput
                        id="birthdate"
                        type="date"
                        name="birthdate"
                        value={data.birthdate}
                        className="mt-1 block w-full text-black"
                        autoComplete="birthdate"
                        onChange={handleInputChange}
                        required
                    />
                    <InputError message={errors.birthdate} className="mt-2" />
                </div>
                <button
                    className=" mt-4 w-full p-2 bg-[#58cc02] text-white rounded-[2rem]"
                    disabled={processing}
                >
                    Daftar
                </button>
            </form>
        </div>
    );
};

export default DaftarRekening;
