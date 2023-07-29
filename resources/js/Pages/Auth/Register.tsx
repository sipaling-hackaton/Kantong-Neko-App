import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register(props: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        ktp_id: "",
        username: "",
        phone_number: "",
        birthdate: "",
        gender: null,
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleInputChange = (e: any) => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setData(name, value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <div className="bg-[#ff8400] min-h-screen flex flex-col justify-center items-center text-white py-8">
            <Head title="Register" />

            <div className="text-white">
                <InputLabel className="text-white">Daftar</InputLabel>
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel
                        className="text-white"
                        htmlFor="ktp_id"
                        value="NIK"
                    />

                    <TextInput
                        id="ktp_id"
                        type="number"
                        name="ktp_id"
                        value={data.ktp_id}
                        className="mt-1 block w-full text-black"
                        autoComplete="ktpId"
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.ktp_id} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="username"
                        value="Username"
                    />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full text-black"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="email"
                        value="email"
                    />

                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full text-black"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="phone_number"
                        value="No. Handphone"
                    />

                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phone_number"
                        value={data.phone_number}
                        className="mt-1 block w-full text-black"
                        autoComplete="phone_number"
                        onChange={handleInputChange}
                        required
                    />

                    <InputError
                        message={errors.phone_number}
                        className="mt-2"
                    />
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
                        htmlFor="password"
                        value="Password"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full text-black"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full text-black"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <button
                    className=" mt-4 w-full p-2 bg-[#58cc02] text-white rounded-[2rem]"
                    disabled={processing}
                >
                    Daftar
                </button>
                <Link href="/login">
                    <button
                        className=" mt-4 w-full p-2 bg-[#58cc02] text-white rounded-[2rem]"
                        disabled={processing}
                    >
                        Sudah Punya Akun
                    </button>
                </Link>
            </form>
        </div>
    );
}
