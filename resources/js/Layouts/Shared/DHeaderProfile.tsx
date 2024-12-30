import { Link, usePage } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

const DHeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = usePage().props.auth.user;
  const path = usePage().props.filePath;
  const filePath = user.photo_path ? `${path}${user.photo_path}` : '/images/users/user-6.jpg';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Link href={route('profile.show')} type="button" className="nav-link">
        <img src={filePath} alt="user-image" className="rounded-full h-10"/>
      </Link>
      {/* onClick={() => setIsOpen(!isOpen)} <div className={`fc-dropdown w-44 z-50 transition-[margin,opacity] duration-300 mt-[10rem] bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
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
      </div> */}
    </div>
  );
};

export default DHeaderProfile;