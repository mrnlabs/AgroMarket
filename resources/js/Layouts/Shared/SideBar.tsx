import { Link } from '@inertiajs/react'
import { CircleDollarSign, ClipboardCheck, FolderClosed, House, Menu, Users } from 'lucide-react'
import React from 'react'

export default function SideBar() {
  return (
    <div className="app-menu">

    {/* <!-- Sidenav Brand Logo --> */}
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

            <li className="menu-item">
                <a href="/dashboard" className="menu-link">
                <House size={20} />
                    <span className="menu-text"> Dashboard </span>
                </a>
            </li>

            <li className="menu-title">Users</li>

            <li className="menu-item">
                <Link href={route('users.index')} className="menu-link">
                    <Users size={20} />
                    <span className="menu-text"> Users </span>
                </Link>
            </li>


            <li className="menu-item">
                <Link href={route('subscriptions.index')} className="menu-link">
                <CircleDollarSign size={20} />
                    <span className="menu-text"> Subscriptions </span>
                </Link>
            </li>

            <li className="menu-item">
                <Link href="/file-manager" className="menu-link">
                <FolderClosed size={20} />
                    <span className="menu-text"> File Manager </span>
                </Link>
            </li>

            <li className="menu-item">
                <Link href={route('tasks.index')} className="menu-link">
                <ClipboardCheck size={20} />
                    <span className="menu-text"> Tasks </span>
                </Link>
            </li>

          

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_box_3_line"></i></span>
                    <span className="menu-text"> Extra Pages </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'starter']) }}" className="menu-link">
                            <span className="menu-text">Starter</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'timeline']) }}" className="menu-link">
                            <span className="menu-text">Timeline</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'invoice']) }}" className="menu-link">
                            <span className="menu-text">Invoice</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'gallery']) }}" className="menu-link">
                            <span className="menu-text">Gallery</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'faqs']) }}" className="menu-link">
                            <span className="menu-text">FAQs</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'pricing']) }}" className="menu-link">
                            <span className="menu-text">Pricing</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'maintenance']) }}" className="menu-link">
                            <span className="menu-text">Maintenance</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', 'coming-soon']) }}" className="menu-link">
                            <span className="menu-text">Coming Soon</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', '404']) }}" className="menu-link">
                            <span className="menu-text">Error 404</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', '404-alt']) }}" className="menu-link">
                            <span className="menu-text">Error 404-alt</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['pages', '500']) }}" className="menu-link">
                            <span className="menu-text">Error 500</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_layout_line"></i></span>
                    <span className="menu-text"> Layout </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['layouts-eg', 'hover-view']) }}" className="menu-link">
                            <span className="menu-text">Hovered Menu</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['layouts-eg', 'icon-view']) }}" className="menu-link">
                            <span className="menu-text">Icon View Menu</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['layouts-eg', 'compact-view']) }}" className="menu-link">
                            <span className="menu-text">Compact Menu</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['layouts-eg', 'mobile-view']) }}" className="menu-link">
                            <span className="menu-text">Mobile View Menu</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['layouts-eg', 'hidden-view']) }}" className="menu-link">
                            <span className="menu-text">Hidden Menu</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-title">Elements</li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_classify_2_line"></i></span>
                    <span className="menu-text"> Components </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'accordions']) }}" className="menu-link">
                            <span className="menu-text">Accordions</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'alerts']) }}" className="menu-link">
                            <span className="menu-text">Alerts</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'avatars']) }}" className="menu-link">
                            <span className="menu-text">Avatars</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'buttons']) }}" className="menu-link">
                            <span className="menu-text">Buttons</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'badges']) }}" className="menu-link">
                            <span className="menu-text">Badges</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'breadcrumbs']) }}" className="menu-link">
                            <span className="menu-text">Breadcrumb</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'cards']) }}" className="menu-link">
                            <span className="menu-text">Cards</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'collapse']) }}" className="menu-link">
                            <span className="menu-text">Collapse</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'dismissible']) }}" className="menu-link">
                            <span className="menu-text">Dismissible</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'dropdowns']) }}" className="menu-link">
                            <span className="menu-text">Dropdowns</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'progress']) }}" className="menu-link">
                            <span className="menu-text">Progress</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'skeleton']) }}" className="menu-link">
                            <span className="menu-text">Skeleton</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'spinners']) }}" className="menu-link">
                            <span className="menu-text">Spinners</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'list-group']) }}" className="menu-link">
                            <span className="menu-text">List Group</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'ratio']) }}" className="menu-link">
                            <span className="menu-text">Ratio</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'tabs']) }}" className="menu-link">
                            <span className="menu-text">Tab</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'modals']) }}" className="menu-link">
                            <span className="menu-text">Modals</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'offcanvas']) }}" className="menu-link">
                            <span className="menu-text">Offcanvas</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'popovers']) }}" className="menu-link">
                            <span className="menu-text">Popovers</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'tooltips']) }}" className="menu-link">
                            <span className="menu-text">Tooltips</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['ui', 'typography']) }}" className="menu-link">
                            <span className="menu-text">Typography</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_box_3_line"></i></span>
                    <span className="menu-text"> Extended </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'swiper']) }}" className="menu-link">
                            <span className="menu-text">Swiper</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'nestable']) }}" className="menu-link">
                            <span className="menu-text">Nestable List</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'ratings']) }}" className="menu-link">
                            <span className="menu-text">Ratings</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'animation']) }}" className="menu-link">
                            <span className="menu-text">Animation</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'player']) }}" className="menu-link">
                            <span className="menu-text">Player</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'scrollbar']) }}" className="menu-link">
                            <span className="menu-text">Scrollbar</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'sweet-alert']) }}" className="menu-link">
                            <span className="menu-text">Sweet Alert</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'tour']) }}" className="menu-link">
                            <span className="menu-text">Tour Page</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'tippy-tooltips']) }}" className="menu-link">
                            <span className="menu-text">Tippy Tooltip</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['extended', 'lightbox']) }}" className="menu-link">
                            <span className="menu-text">Lightbox</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_file_check_line"></i></span>
                    <span className="menu-text"> Forms </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'elements']) }}" className="menu-link">
                            <span className="menu-text">Form Elements</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'select']) }}" className="menu-link">
                            <span className="menu-text">Select</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'range']) }}" className="menu-link">
                            <span className="menu-text">Range</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'pickers']) }}" className="menu-link">
                            <span className="menu-text">Pickers</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'masks']) }}" className="menu-link">
                            <span className="menu-text">Masks</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'editor']) }}" className="menu-link">
                            <span className="menu-text">Editor</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'file-uploads']) }}" className="menu-link">
                            <span className="menu-text">File Uploads</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'validation']) }}" className="menu-link">
                            <span className="menu-text">Validation</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['forms', 'layout']) }}" className="menu-link">
                            <span className="menu-text">Form Layout</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_layout_grid_line"></i></span>
                    <span className="menu-text"> Tables </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['tables', 'basic']) }}" className="menu-link">
                            <span className="menu-text">Basic Tables</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['tables', 'datatables']) }}" className="menu-link">
                            <span className="menu-text">Data Tables</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_dribbble_line"></i></span>
                    <span className="menu-text"> Icons </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['icons', 'mingcute']) }}" className="menu-link">
                            <span className="menu-text">Mingcute</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['icons', 'feather']) }}" className="menu-link">
                            <span className="menu-text">Feather</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="{{ route('second', ['icons', 'material-symbols']) }}" className="menu-link">
                            <span className="menu-text">Material Symbols </span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className="menu-item">
                <a href="{{ route('any', 'charts') }}" className="menu-link">
                    <span className="menu-icon"><i className="mgc_chart_bar_line"></i></span>
                    <span className="menu-text"> Chart </span>
                </a>
            </li>

            <li className="menu-item">
                <a href="#!" data-fc-type="collapse" className="menu-link">
                    <span className="menu-icon"><i className="mgc_location_line"></i></span>
                    <span className="menu-text"> Maps </span>
                    <span className="menu-arrow"></span>
                </a>

                <ul className="sub-menu hidden">
                    <li className="menu-item">
                        <a href="{{ route('second', ['maps', 'google']) }}" className="menu-link">
                            <span className="menu-text">Google Maps</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>

  )
}
