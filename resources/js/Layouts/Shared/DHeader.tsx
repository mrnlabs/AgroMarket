import { Link } from '@inertiajs/react'
import { Fullscreen, Menu, Minimize, Moon } from 'lucide-react'
import React from 'react'
import DFullScreen from './DFullScreen'
import DHeaderProfile from './DHeaderProfile'
import NotificationBell from './NotificationBell'

export default function DHeader() {
  return (
   <>
<header className="app-header flex items-center px-4 gap-3">
    {/* <!-- Sidenav Menu Toggle Button --> */}
    <button id="button-toggle-menu" className="nav-link p-2">
        <span className="sr-only">Menu Toggle Button</span>
        <span className="flex items-center justify-center h-6 w-6">
        <Menu size={20} />
        </span>
    </button>

    {/* <!-- Topbar Brand Logo --> */}
    <a href="{{ route('any', 'index') }}" className="logo-box">
        {/* <!-- Light Brand Logo --> */}
        <div className="logo-light">
            <img src="/images/logo-light.png" className="logo-lg h-6" alt="Light logo" />
            <img src="/images/logo-sm.png" className="logo-sm" alt="Small logo"/>
        </div>

        {/* <!-- Dark Brand Logo --> */}
        <div className="logo-dark">
            <img src="/images/logo-dark.png" className="logo-lg h-6" alt="Dark logo"/>
            <img src="/images/logo-sm.png" className="logo-sm" alt="Small logo"/>
        </div>
    </a>

    {/* <!-- Topbar Search Modal Button --> */}
    <button type="button" data-fc-type="modal" data-fc-target="topbar-search-modal" className="nav-link p-2 me-auto invisible">
        <span className="sr-only">Search</span>
        <span className="flex items-center justify-center h-6 w-6">
            
        </span>
    </button>

    <DFullScreen />

    {/* <!-- Notification Bell Button --> */}
    <NotificationBell />

    {/* <!-- Light/Dark Toggle Button --> */}
    <div className="flex">
        <button id="light-dark-mode" type="button" className="nav-link p-2">
            <span className="sr-only">Light/Dark Mode</span>
            <span className="flex items-center justify-center h-6 w-6">
            <Moon />
            </span>
        </button>
    </div>

    <DHeaderProfile />
</header>

</>
  )
}
