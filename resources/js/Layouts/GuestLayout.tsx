import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';
import "../frontend-assets/css/app.min.css"


export default function GuestLayout({ children }: PropsWithChildren) {



    const jsPath = usePage().props.frontend_js_path;

    useEffect(() => {
        console.log(jsPath + "loade --------------------")
        // Load config.js
        const configScriptApp = document.createElement('script');
        // @ts-ignore
        configScriptApp.src = jsPath;
        configScriptApp.async = true;
        document.body.appendChild(configScriptApp);

        console.log(configScriptApp + "loade --------------------")
        
        return () => {
            document.body.removeChild(configScriptApp);
          
        };
    }, []);

    return (
        <>
            
                {children}
          
        </>
    );
}
