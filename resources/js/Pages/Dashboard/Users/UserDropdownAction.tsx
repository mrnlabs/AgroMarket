
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { MoreVertical,  Link, Share2, Download, ShieldCheck, RotateCcw, Trash2, ShieldX } from 'lucide-react';
import {  StoreDocuments, User } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/Components/ui/toaster';
import { lazy, Suspense, useState } from 'react';

const ConfirmDialog = lazy(() => import("@/Components/ConfirmDialog"));

export default function UserDropdownAction({user, onDelete}: {
  user: any,
  onDelete: (user: User) => void
}) {
    const filePath = usePage().props.filePath;

   
        const [dialogOpen, setDialogOpen] = useState(false);


    // In your DropdownAction component
const handleVerify = () => {
  router.post(route('dashboard.store.verify_document', user?.id), undefined, {
      preserveScroll: true,
      preserveState: true,
      onSuccess: (page) => {
        user.verified_at == null ? user.verified_at = new Date().toISOString() : user.verified_at = undefined;
          toast({
              title: "Success",
              description: user.verified_at ? "Document verified successfully" : "Document unverified successfully",
              variant: "default",
          });
      },
      onError: () => {
          toast({
              title: "Error",
              description: "Something went wrong",
              variant: "destructive",
          });
      }
  });
};
 

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
        <DropdownMenuItem className='cursor-pointer' >
          <ShieldX className="w-4 h-4 mr-3" />
          {user.is_active ? 'Block' : 'Unblock'}
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' >
          <Share2 className="w-4 h-4 mr-3" />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <Download className="w-4 h-4 mr-3" />
          Download
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

