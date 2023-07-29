import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <div className="bg-[#ff8400] min-h-screen flex flex-col justify-center items-center">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="text-white">
                <label>Masuk</label>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        className="text-white"
                        htmlFor="username"
                        value="Username"
                    />

                    <TextInput
                        id="username"
                        type="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleInputChange}
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="text-white"
                        htmlFor="password"
                        value="Password"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={handleInputChange}
                        />
                        <span className="text-white ml-2 text-sm text-gray-600">
                            Ingat username
                        </span>
                    </label>
                </div>

                <button
                    className=" mt-4 w-full p-2 bg-[#58cc02] text-white rounded-[2rem]"
                    disabled={processing}
                >
                    Masuk
                </button>
                <Link href="/register">
                    <button className="mt-4 p-2 w-full bg-[#58cc02] text-white rounded-[2rem]">
                        Belum Punya Akun
                    </button>
                </Link>
            </form>
        </div>
    );
}
