import { Link } from '@inertiajs/react'
import { Fullscreen, Menu, Minimize } from 'lucide-react'
import React from 'react'
import DFullScreen from './DFullScreen'

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
    <button type="button" data-fc-type="modal" data-fc-target="topbar-search-modal" className="nav-link p-2 me-auto">
        <span className="sr-only">Search</span>
        <span className="flex items-center justify-center h-6 w-6">
            <i className="mgc_search_line text-2xl"></i>
        </span>
    </button>

    {/* <!-- Language Dropdown Button --> */}

    <DFullScreen />

    {/* <!-- Notification Bell Button --> */}
    <div className="relative md:flex hidden">
        <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" className="nav-link p-2">
            <span className="sr-only">View notifications</span>
            <span className="flex items-center justify-center h-6 w-6">
                <i className="mgc_notification_line text-2xl"></i>
            </span>
        </button>
        <div className="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">

            <div className="p-2 border-b border-dashed border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <h6 className="text-sm"> Notification</h6>
                    <a href="#!" className="text-gray-500 underline">
                        <small>Clear All</small>
                    </a>
                </div>
            </div>

            <div className="p-4 h-80" data-simplebar>

                <h5 className="text-xs text-gray-500 mb-2">Today</h5>

                <a href="#!" className="block mb-4">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                    <i className="mgc_message_3_line text-lg"></i>
                                </div>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <h5 className="text-sm font-semibold mb-1">Datacorp <small className="font-normal text-gray-500 ms-1">1 min ago</small></h5>
                                <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#!" className="block mb-4">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white">
                                    <i className="mgc_user_add_line text-lg"></i>
                                </div>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <h5 className="text-sm font-semibold mb-1">Admin <small className="font-normal text-gray-500 ms-1">1 hr ago</small></h5>
                                <small className="noti-item-subtitle text-muted">New user registered</small>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#!" className="block mb-4">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src="/images/users/avatar-2.jpg" className="rounded-full h-9 w-9" alt=""/>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <h5 className="text-sm font-semibold mb-1">Cristina Pride <small className="font-normal text-gray-500 ms-1">1 day ago</small></h5>
                                <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                            </div>
                        </div>
                    </div>
                </a>

                <h5 className="text-xs text-gray-500 mb-2">Yesterday</h5>

                <a href="#!" className="block mb-4">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white">
                                    <i className="mgc_message_1_line text-lg"></i>
                                </div>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <h5 className="text-sm font-semibold mb-1">Datacorp</h5>
                                <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#!" className="block">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src="/images/users/avatar-4.jpg" className="rounded-full h-9 w-9" alt=""/>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <h5 className="text-sm font-semibold mb-1">Karen Robinson</h5>
                                <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <a href="#!" className="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
                View All
            </a>
        </div>
    </div>

    {/* <!-- Light/Dark Toggle Button --> */}
    <div className="flex">
        <button id="light-dark-mode" type="button" className="nav-link p-2">
            <span className="sr-only">Light/Dark Mode</span>
            <span className="flex items-center justify-center h-6 w-6">
                <i className="mgc_moon_line text-2xl"></i>
            </span>
        </button>
    </div>

    {/* <!-- Profile Dropdown Button --> */}
    <div className="relative">
        <Link href={route('profile.show')} type="button" className="nav-link">
            <img src="/images/users/user-6.jpg" alt="user-image" className="rounded-full h-10"/>
        </Link>
        <div className="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="pages-gallery.html">
                <i className="mgc_pic_2_line  me-2"></i>
                <span>Gallery</span>
            </a>
            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="apps-kanban.html">
                <i className="mgc_task_2_line  me-2"></i>
                <span>Kanban</span>
            </a>
            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="{{ route('second', ['auth', 'login']) }}">
                <i className="mgc_lock_line  me-2"></i>
                <span>Lock Screen</span>
            </a>
            <hr className="my-2 -mx-2 border-gray-200 dark:border-gray-700" />
            <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="{{ route('second', ['auth', 'login']) }}">
                <i className="mgc_exit_line  me-2"></i>
                <span>Log Out</span>
            </a>
        </div>
    </div>
</header>

<div>
    <div id="topbar-search-modal" className="fc-modal hidden w-full h-full fixed top-0 start-0 z-50">
        <div className="fc-modal-open:opacity-100 fc-modal-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-12 sm:mx-auto">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl transition-all dark:bg-slate-800">
                <div className="relative">
                    <div className="pointer-events-none absolute top-3.5 start-4 text-gray-900 text-opacity-40 dark:text-gray-200">
                        <i className="mgc_search_line text-xl"></i>
                    </div>
                    <input type="search" 
                    className="h-12 w-full border-0 bg-transparent ps-11 pe-4
                     text-gray-900 placeholder-gray-500 dark:placeholder-gray-300 dark:text-gray-200 focus:ring-0 sm:text-sm" placeholder="Search..." />
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}
