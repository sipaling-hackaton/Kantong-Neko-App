import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        ktpId: "",
        username: "",
        phoneNumber: "",
        birthDate: "",
        gender: 0,
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div className="bg-[#ff8400] min-h-screen flex flex-col justify-center items-center text-white">
            <Head title="Register" />

            <div className="text-white">
                <InputLabel className="text-white">Daftar</InputLabel>
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel
                        className="text-white"
                        htmlFor="ktpId"
                        value="KTP ID"
                    />

                    <TextInput
                        id="ktpId"
                        type="text"
                        name="ktpId"
                        value={data.ktpId}
                        className="mt-1 block w-full"
                        autoComplete="ktpId"
                        onChange={(e) => setData("ktpId", e.target.value)}
                        required
                    />

                    <InputError message={errors.ktpId} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="username"
                        value="Username"
                    />

                    <TextInput
                        id="name"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("username", e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="phoneNumber"
                        value="Phone Number"
                    />

                    <TextInput
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="phoneNumber"
                        onChange={(e) => setData("phoneNumber", e.target.value)}
                        required
                    />

                    <InputError message={errors.phoneNumber} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="birthDate"
                        value="Birth Date"
                    />

                    <TextInput
                        id="birthDate"
                        type="date"
                        name="birthDate"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="birthDate"
                        onChange={(e) => setData("birthDate", e.target.value)}
                        required
                    />

                    <InputError message={errors.birthDate} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="mt-2 text-white"
                        htmlFor="gender"
                        value="Gender"
                    />
                    <div className="flex gap-1">
                        <TextInput
                            id="gender"
                            type="radio"
                            name="gender"
                            className="mt-1 block "
                            autoComplete="gender"
                            onClick={() => setData("gender", 1)}
                        />
                        <span>Perempuan</span>
                    </div>
                    <div className="flex gap-1">
                        <TextInput
                            id="gender"
                            type="radio"
                            name="gender"
                            className="mt-1 block "
                            autoComplete="gender"
                            onClick={() => setData("gender", 0)}
                        />
                        <span>Laki - Laki</span>
                    </div>

                    <InputError message={errors.birthDate} className="mt-2" />
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
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
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
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
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

                <button
                    className=" mt-4 w-full p-2 bg-[#58cc02] text-white rounded-[2rem]"
                    disabled={processing}
                >
                    Sudah Punya Akun
                </button>
            </form>
        </div>
    );
}
