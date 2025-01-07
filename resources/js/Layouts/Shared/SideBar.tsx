import Logout from '@/Components/dashboard/Logout'
import MenuItem from '@/Components/dashboard/MenuItem'
import { Link } from '@inertiajs/react'
import { BaggageClaim, ChartBarStacked, CircleDollarSign, ClipboardCheck, FolderClosed, House, LockKeyhole, LogOut, Menu, Users } from 'lucide-react'
import React from 'react'

export default function SideBar() {
  return (
    <div className="app-menu">

    {/* <!-- Sidenav Brand Logo -->
    
    
    */}
    <a href="/" className="logo-box">
        {/* <!-- Light Brand Logo --> */}
        <div className="logo-light">
            <img src="https://coderthemes.com/konrix/layouts/assets/images/logo-light.png" className="logo-lg h-6" alt="Light logo" />
            <img src="https://coderthemes.com/konrix/layouts/assets/images/logo-light.png" className="logo-sm" alt="Small logo"/>
        </div>

        {/* <!-- Dark Brand Logo --> */}
        <div className="logo-dark">
            <img src="https://coderthemes.com/konrix/layouts/assets/images/logo-light.png" className="logo-lg h-6" alt="Dark logo"/>
            <img src="https://coderthemes.com/konrix/layouts/assets/images/logo-light.png" className="logo-sm" alt="Small logo"/>
        </div>
    </a>

    {/* <!-- Sidenav Menu Toggle Button --> */}
    <button id="button-hover-toggle" className="absolute top-5 end-2 rounded-full p-1.5">
        <span className="sr-only">Menu Toggle Button</span>
        {/* <i className="mgc_round_line text-xl"></i> */}
        <Menu size={20} />
    </button>

    {/* <!--- Menu --> */}
    <div className="srcollbar" data-simplebar>
        <ul className="menu" data-fc-type="accordion">
            <li className="menu-title">Menu</li>


            <MenuItem 
                href="/dashboard" 
                icon={House} 
                label="Dashboard"
                isRoute={false} 
            />

            <MenuItem 
                href="admin.products.index" 
                icon={BaggageClaim} 
                label="My Products" 
            />
            
            <MenuItem 
                href="subscriptions.index" 
                icon={CircleDollarSign} 
                label="My Subscriptions" 
            />
            
            <MenuItem 
                href="/file-manager" 
                icon={FolderClosed} 
                label="File Manager" 
                isRoute={false}
            />

            <MenuItem 
                href="tasks.index" 
                icon={ClipboardCheck} 
                label="Tasks" 
                isRoute={true}
            />
            <li className="menu-title">User Roles</li>
            <MenuItem 
                href="roles.index" 
                icon={ChartBarStacked} 
                label="Miscellaneous" 
                isRoute={true}
            />
            <li className="menu-title">Profile Management</li>
            <MenuItem 
                href="profile.show" 
                icon={ChartBarStacked} 
                label="My Profile" 
                isRoute={true}
            />
           
             <Logout />

        </ul>
    </div>
</div>

  )
}
