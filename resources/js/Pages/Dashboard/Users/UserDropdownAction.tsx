
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { MoreVertical, Share2, Trash2, ShieldX } from 'lucide-react';
import {  User } from '@/types';
import { usePage } from '@inertiajs/react';
import { Toaster } from '@/Components/ui/toaster';
import { lazy, Suspense, useState } from 'react';

const ConfirmDialog = lazy(() => import("@/Components/ConfirmDialog"));

export default function UserDropdownAction({user, onDelete, handleBlock}: {
  user: any,
  onDelete: (user: User) => void,
  handleBlock: (user: User) => void
}) {
    const filePath = usePage().props.filePath;
    const [dialogOpen, setDialogOpen] = useState(false);

    const deleteUser = () => {
      onDelete(user);      
    };
   
    
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
        <MoreVertical className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem className='cursor-pointer' onClick={() => handleBlock(user)}>
          <ShieldX className="w-4 h-4 mr-3" />
          {user.is_active ? 'Block' : 'Unblock'}
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' >
          <Share2 className="w-4 h-4 mr-3" />
          Share
        </DropdownMenuItem>      
     
        <>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer' onClick={() => setDialogOpen(true)}>
          <Trash2 className="w-4 h-4 mr-3" color='red'/>
            <span className='text-[#FF0000]'>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        </>
    
      </DropdownMenuContent>
    </DropdownMenu>
    <Toaster />
         <Suspense fallback={""}>
              <ConfirmDialog 
                message={`Are you sure you want to delete ${user?.first_name + " " + user?.last_name}?`}
                dialogOpen={dialogOpen} 
                setDialogOpen={setDialogOpen}
                onContinue={deleteUser}
             />
        </Suspense>
    </>
  );
};

