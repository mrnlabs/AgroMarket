import { Button } from '@/Components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { usePage } from '@inertiajs/react';
import { Camera } from 'lucide-react';
import React, { lazy } from 'react';
const LogoModal = lazy(() => import("./LogoModal"));

interface ProfileHeaderProps {
  name: string;
  stats?: {
    followers?: number;
    friends?: number;
  };
  profileImage: string;
  coverImage: string;
  onEditProfile?: () => void;
  onAddStory?: () => void;
}

const StoreHeader  = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [uploadType, setUploadType] = React.useState('');

    const auth = usePage().props.auth;
    const filePath = usePage().props.filePath;

  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="relative h-72">
        <img 
          src={filePath + (auth.user?.store?.cover_image ?? 'default-cover-image-url')}
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
      <Button onClick={() => setDropdownOpen(!dropdownOpen)} className="absolute right-4 bottom-4 px-4 py-2 bg-gray-900 rounded-md text-sm font-medium">
          Edit cover photo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Cover photo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer' onClick={() => {
            setModalOpen(true)
            setUploadType('cover')
            }}>
            Upload Photo
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Remove
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>

      {/* Profile Section */}
      <div className="px-4 pb-4">
        <div className="flex items-end justify-between mt-[-48px] relative">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
              <img 
                src={filePath + (auth.user?.store?.image ?? 'default-cover-image-url')}
                alt={"Cover Image"} 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
            onClick={() => {
                setModalOpen(true)
                setUploadType('profile')
                }}
              className="absolute bottom-0 right-0 p-2 bg-gray-900 bg-opacity-75 rounded-full text-white 
                         hover:bg-opacity-90 transition-all duration-200"
            >
              <Camera size={20} />
            </button>
          </div>

          {/* Action Buttons 
          <div className="flex gap-2 mb-4">
            <button
              onClick={() =>{}}
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
            >
              Add to story
            </button>
            <button
              onClick={() =>{}}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium"
            >
              Edit profile
            </button>
          </div>
          */}
        </div>
      </div>
       <LogoModal uploadType={uploadType} open={modalOpen} setOpen={setModalOpen}/>
    </div>
  );
};

export default StoreHeader;