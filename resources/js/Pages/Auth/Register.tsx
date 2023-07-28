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
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="ktpId" value="ktpId" />

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
                    <InputLabel htmlFor="username" value="Username" />

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
                    <InputLabel htmlFor="phoneNumber" value="phoneNumber" />

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
                    <InputLabel htmlFor="birthDate" value="birthDate" />

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
                    <InputLabel htmlFor="birthDate" value="birthDate" />

                    <TextInput
                        id="birthDate"
                        type="radio"
                        name="birthDate"
                        value={"Perempuan"}
                        className="mt-1 block w-full"
                        autoComplete="birthDate"
                        onClick={(e) => setData("birthDate", e.target.value)}
                        required
                    />
                    <TextInput
                        id="birthDate"
                        type="radio"
                        name="birthDate"
                        value={"Laki - laki"}
                        className="mt-1 block w-full"
                        autoComplete="birthDate"
                        onClick={(e) => setData("birthDate", e.target.value)}
                        required
                    />

                    <InputError message={errors.birthDate} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

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

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
