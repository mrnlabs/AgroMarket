import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import './Register.css'
import { FormEventHandler, useState } from "react";
export default function Login({
    status,
    canResetPassword,
    success
}: {
    status?: string;
    canResetPassword: boolean;
    success?: string;
}) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="breadcrumb mb-0 py-26 bg-main-two-50">
                <div className="container container-lg">
                    <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                        <h6 className="mb-0">Log in</h6>
                        <ul className="flex items-center gap-8 flex-wrap">
                            <li className="text-sm">
                                <a
                                    href="index.html"
                                    className="text-gray-900 flex items-center gap-8 hover-text-main-600"
                                >
                                    <i className="ph ph-house"></i> Home
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="ph ph-caret-right"></i>
                            </li>
                            <li className="text-sm text-main-600">Log in</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="account py-80">
                <div className="container container-lg">
                    <form onSubmit={submit}>
                        <div className="row g-4">

  {success && (
    <div className="text-center px-16 py-24 rounded-8 bg-main-50 relative" style={{display: 'block', width: '20%', textAlign: 'center', margin: 'auto'}}>
    <p className="text-gray-800">{success}</p>
  </div>
  )}
                            {/* Can we center our main div here so the form is at the center */}
                            <div className=" flex-grow-0 flex-shrink-0 basis-auto pe-xl-5 flex justify-center items-cente">
                                <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-full">
                                    <h6 className="text-xl mb-32">Login</h6>
                                    <div className="mb-24">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                            className="text-neutral-900 text-lg mb-8 font-[500]"
                                        />
                                        {/* <label for="username" >Username or email address <span className="text-danger">*</span></label>  */}

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            // className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="common-input"
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mb-24">
                                        <InputLabel
                                            htmlFor="password"
                                            value="Password"
                                            className="text-neutral-900 text-lg mb-8 font-[500]"
                                        />
                                        <div className="relative">
                                            <TextInput
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={data.password}
                                                // className="mt-1 block w-full"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                className="common-input"
                                            />

                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                            <span onClick={() => setShowPassword(!showPassword)}
                                                className={`${showPassword ? 'ph ph-eye-slash' : 'ph ph-eye'} toggle-password absolute top-[50%] right-0 me-16 translate-y-[-50%] cursor-pointer`}
                                                id="#password"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="mb-24 mt-48">
                                        <div className="flex items-center gap-48 flex-wrap">
                                            <button
                                                type="submit"
                                                className="btn btn-main py-18 px-40"
                                            >
                                                Log in
                                            </button>
                                            <div className="form-check common-check">
                                                <div className="mt-4 block">
                                                    <label className="flex items-center">
                                                        <Checkbox
                                                            name="remember"
                                                            checked={
                                                                data.remember
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "remember",
                                                                    e.target
                                                                        .checked
                                                                )
                                                            }
                                                            className="form-check-input"
                                                        />
                                                        <span className="form-check-label flex-grow">
                                                            Remember me
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-48 ">
                                        {canResetPassword && (
                                            <Link
                                                href={route("password.request")}
                                                className="text-danger-600 mr-4 text-sm font-[600] hover-text-decoration-underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}

                                        <Link
                                            href={route("register")}
                                            className="ms-4 underline text-sm font-[600] hover-text-decoration-underline"
                                            disabled={processing}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </GuestLayout>
    );
}
