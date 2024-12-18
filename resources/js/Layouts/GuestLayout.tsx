import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';
import "../frontend-assets/css/app.min.css"
import Nav from './Shared/Nav';
import NewsLetter from './Shared/NewsLetter';
import Footer from './Shared/Footer';


export default function GuestLayout({ children }: PropsWithChildren) {



    const jsPath = usePage().props.frontend_js_path;

    useEffect(() => {
       
        // Load config.js
        const configScriptApp = document.createElement('script');
        // @ts-ignore
        configScriptApp.src = jsPath;
        configScriptApp.async = true;
        document.body.appendChild(configScriptApp);

        
        return () => {
            document.body.removeChild(configScriptApp);
          
        };
    }, []);

    return (
        <>
         <Nav />
            
                {children}

                <NewsLetter />
                <Footer />
          
        </>
    );
}
