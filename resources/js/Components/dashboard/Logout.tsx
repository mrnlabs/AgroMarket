import { Link } from '@inertiajs/react'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function Logout() {
  return (
    <li className="menu-item">
        <Link as='button' href={route('logout')} method='post' className="animate-pulse menu-link" style={{ color: 'red'}}>
            <LogOut size={20} />
            <span className="menu-text"> Logout </span>
        </Link>
    </li>
  )
}
