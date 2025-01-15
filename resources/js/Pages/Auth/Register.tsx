import './Register.css'
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm as useInertiaForm } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Label } from '@/Components/ui/label';

export default function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [processing, setProcessing] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            store_name: '',
            password: '',
        }
    });

    interface FormData {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        store_name: string;
        password: string;
    }

    const onSubmit = (data: FormData) => {
        setProcessing(true)
        router.post('/register', { ...data },{
            onSuccess: () => {
                setProcessing(false)
            }
        })
    };


    return (
        <GuestLayout>
            <Head title="Register" />

            <section className="account mt-40 mb-40">
                <div className="container" style={{ width: '45rem' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-4 px-24">
                            <div className="2xl:w-full flex-grow-0 flex-shrink-0 basis-auto">
                                <div className="border border-gray-100 hover:border-main-600 transition-all duration-300 rounded-16 px-24 py-40">
                                    <h6 className="text-xl mb-32">Register</h6>

                                    <div className="row">
                                    <div className="mb-24 md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12">
                                        <label className="text-neutral-900 text-lg mb-8 font-[500]">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="common-input"
                                            placeholder="Enter Your First Name"
                                            {...register("first_name", {
                                                required: "First name is required",
                                                minLength: {
                                                    value: 3,
                                                    message: "First Name must be at least 3 characters"
                                                }
                                            })}
                                        />
                                        {errors.first_name && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.first_name.message}</p>
                                        )}
                                    </div>
                                    <div className="mb-24 md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12">
                                        <Label htmlFor="last_name"  className="text-neutral-900 text-lg mb-8 font-[500]">
                                            Last Name<span className="text-red-500">*</span>
                                        </Label>
                                        <input
                                            className="common-input"
                                            placeholder="Enter Your Last Name"
                                            {...register("last_name", {
                                                required: "Last name is required",
                                                minLength: {
                                                    value: 3,
                                                    message: "Last name must be at least 3 characters"
                                                }
                                            })}
                                        />
                                        {errors.last_name && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.last_name.message}</p>
                                        )}
                                        
                                    </div>
                                    </div>

                                    <div className="mb-24">
                                        <label className="text-neutral-900 text-lg mb-8 font-[500]">
                                            Email address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="common-input"
                                            placeholder="Enter Email Address"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-24">
                                        <label className="text-neutral-900 text-lg mb-8 font-[500]">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input"
                                            placeholder="Enter phone number"
                                            {...register("phone", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Invalid phone number"
                                                }
                                            })}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                                        )}
                                    </div>
                                      <div className="mb-24">
                                        <label className="text-neutral-900 text-lg mb-8 font-[500]">
                                            Business/Store Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input"
                                            placeholder="Enter Business/Store Name"
                                            {...register("store_name", {
                                                required: "Business/Store Name is required",
                                                //must be only letters
                                                pattern: {
                                                    value: /^[a-zA-Z\s]*$/,
                                                    message: "Business/Store Name must be only letters"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "Business/Store Name must be at least 3 characters"
                                                }
                                            })}
                                        />
                                        {errors.store_name && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.store_name.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-24">
                                        <label className="text-neutral-900 text-lg mb-8 font-[500]">
                                            Password <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="common-input"
                                                placeholder="Enter Password"
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must be at least 8 characters"
                                                    },
                                                    pattern: {
                                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
                                                    }
                                                })}
                                            />
                                            <span
                                                className="toggle-password absolute top-[50%] right-0 me-16 translate-y-[-50%] cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </span>
                                        </div>
                                        {errors.password && (
                                            <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
                                        )}
                                    </div>

                                    <div className="my-48">
                                        <p className="text-gray-500">
                                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                                            <a href="index.html" className="text-main-600 hover:underline">
                                                privacy policy
                                            </a>
                                            .
                                        </p>
                                    </div>

                                    <div className="mt-48">
                                        <button
                                            type="submit"
                                            className="btn btn-main py-18 px-40 w-full"
                                            disabled={processing}
                                        >
                                            {processing ? 'Registering...' : 'Register'}
                                        </button>
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