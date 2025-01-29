import { Link } from '@inertiajs/react'
import React from 'react'

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationProps {
  links: Link[];
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
  return (
   <nav className="text-center mt-4">
    {
        links.map(link => (
            <Link 
            preserveScroll
            href={link.url || ""}
            key={link.label}
            
            dangerouslySetInnerHTML={{ __html : link.label }}
       
            className={
                "inline-block px-3  py-2 rounded-lg text-gray-200 text-sm " +
                (link.active ? "bg-gray-950 " : "") +
                (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950")
            }
            > 
            
            </Link>
        ))
    }
   </nav>
  )
}

export default Pagination