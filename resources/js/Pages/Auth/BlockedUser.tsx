import React from 'react';
import { Head } from '@inertiajs/react';
import { ShieldX } from 'lucide-react';

export default function BlockedUser({ message }: { message: string }) {
    return (
        <>
            <Head title="Account Blocked" />
            {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        Account Blocked
                    </h1>
                    <p className="text-gray-600">
                        {message}
                    </p>
                    <div className="mt-6">
                        <a
                            href="mailto:support@example.com"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </div> */}

            <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-700 dark:via-gray-900 dark:to-black">
            <div className="h-screen w-screen flex justify-center items-center shadow-lg rounded-lg">
                <div className="flex flex-col justify-center text-center gap-6">
                    <ShieldX color='red' size={90} className=" text-4xl text-gray-600 dark:text-gray-100 animate-pulse  mx-auto my-4"/>
                    <h1 className="text-2xl font-bold tracking-tight dark:text-gray-100 text-red-700">Account Blocked</h1>
                    <a
                            href="mailto:support@agrotech.co.za"
                            className="text-blue-500 hover:text-blue-700 underline"
                        >
                            Contact Support
                        </a>
                </div>
            </div>
        </div>
        </>
    );
}