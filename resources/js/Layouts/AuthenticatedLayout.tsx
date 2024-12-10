import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';


import '../dashboard-assets/app.js';
import '../dashboard-assets/config.js';
import '../dashboard-assets/head.js';
import SideBar from './Shared/SideBar.js';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex wrapper">
            <SideBar/>
            <div className="page-content">
                <main className="flex-grow p-6">
                {children}
                </main>
            </div>
        </div>
    );
}
