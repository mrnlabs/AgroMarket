
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';


// import '../dashboard-assets/app.js';
// import '../dashboard-assets/config.js';
// import '../dashboard-assets/head.js';


import SideBar from './Shared/SideBar.js';
import DFooter from './Shared/DFooter.js';
import DHeader from './Shared/DHeader.js';
import AdminSideBar from './Shared/AdminSideBar.js';
import { AuthGuard } from '@/guards/authGuard.js';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const jsPath = usePage().props.dashboard_js_path;

    useEffect(() => {
        // Load config.js
        const configScript = document.createElement('script');
        // @ts-ignore
        configScript.src = jsPath[0];
        configScript.async = true;
        document.body.appendChild(configScript);

        //Load app.js
        const appScript = document.createElement('script');
        // @ts-ignore
        appScript.src = jsPath[1];
        appScript.async = true;
        document.body.appendChild(appScript);

        
        return () => {
            document.body.removeChild(configScript);
            document.body.removeChild(appScript);
        };
    }, []);


    return (
        <div className="flex wrapper">

            <AuthGuard 
                roles={["Admin", "SuperAdmin"]} 
                permissions={["can_manage_system"]}
                requireAll={true}>
                <AdminSideBar/>
            </AuthGuard>
            
            <AuthGuard 
                roles={["User"]} 
                permissions={["can_manage_system"]}
                requireAll={true}>
                <SideBar/>
            </AuthGuard>
           
           
            <div className="page-content">
                <DHeader/>
                <main className="flex-grow p-6">
                {children}
                </main>            
                <DFooter/>
            </div>
        </div>
    );
}
