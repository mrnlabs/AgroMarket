import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  href: string | URL | null;
  icon: LucideIcon;
  label: string;
  isRoute?: boolean;
  className?: string;
  active?: string;
  activeRoutes?: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  href, 
  icon: Icon, 
  label, 
  isRoute = true,
  className = '',
  active,
  activeRoutes = []
}) => {
    const { url } = usePage();

    // Process href
    const processedHref = isRoute && typeof href === 'string'
      ? route(href) // For named routes without parameters
      : typeof href === 'object'
      ? route((href as any).name, (href as any).params || {}) // For named routes with parameters
      : href?.toString() || '';

      const isActive = activeRoutes.length > 0
      ? activeRoutes.some(routeName => {
          try {
            // Get the base route without parameters
            const routePath = route(routeName).split('?')[0];
            return url.startsWith(routePath);
          } catch (error) {
            // If route() throws an error (missing parameters), 
            // just check if the URL includes the route name pattern
            const routePattern = routeName.replace(/\./g, '/');
            return url.includes(routePattern);
          }
        })
      : url === processedHref;

    const linkProps = {
      href: processedHref as string
    };

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