import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';


interface MenuItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isRoute?: boolean;
  className?: string;
  active?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  href, 
  icon: Icon, 
  label, 
  isRoute = true ,
  className = '',
  active
}) => {

    const { url } = usePage();

    const isActive = active 
      ? url.startsWith(active)
      : (isRoute 
          ? url === route(href)
          : url === href);


  const linkProps = isRoute 
    ? { href: route(href) } 
    : { href };

  return (
    <li className="menu-item">
      <Link {...linkProps} className={`menu-link ${className || ''} ${isActive ? 'active' : ''}`}>
        <Icon size={20} />
        <span className="menu-text">{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
