
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';


import '../dashboard-assets/app.js';
import '../dashboard-assets/config.js';
import '../dashboard-assets/head.js';
import SideBar from './Shared/SideBar.js';
import DFooter from './Shared/DFooter.js';
import DHeader from './Shared/DHeader.js';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex wrapper">
            <SideBar/>
            <div className="page-content">
                <DHeader/>
                <main className="flex-grow p-6">
                {children}
                </main>
                {/* footer */}
                <DFooter/>
            </div>
        </div>
    );
}
