import React from 'react';
import { Head } from '@inertiajs/react';

export default function BlockedUser({ message }: { message: string }) {
    return (
        <>
            <Head title="Account Blocked" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
            </div>
        </>
    );
}