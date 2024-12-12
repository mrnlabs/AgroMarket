
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';


// import '../dashboard-assets/app.js';
// import '../dashboard-assets/config.js';
// import '../dashboard-assets/head.js';


import SideBar from './Shared/SideBar.js';
import DFooter from './Shared/DFooter.js';
import DHeader from './Shared/DHeader.js';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;


    useEffect(() => {
        // Load config.js
        const configScript = document.createElement('script');
        configScript.src = '../dashboard-assets/config.js';
        configScript.async = true;
        document.body.appendChild(configScript);

        //Load app.js
        const appScript = document.createElement('script');
        appScript.src = '../dashboard-assets/app.js';
        appScript.async = true;
        document.body.appendChild(appScript);

        // const dashScript = document.createElement('script');
        // dashScript.src = '../dashboard-assets/app.js';
        // dashScript.async = true;
        // document.body.appendChild(dashScript);


        // Cleanup scripts when the component unmounts
        return () => {
            document.body.removeChild(configScript);
            document.body.removeChild(appScript);
        };
    }, []);

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
