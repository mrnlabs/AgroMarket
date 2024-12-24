import { Button } from '@/Components/ui/button'
import { Toaster } from '@/Components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { User, UserCardProps } from '@/types'
import { router } from '@inertiajs/react';
import { Ban, File, Paperclip, Trash2 } from 'lucide-react'
import React, { lazy, Suspense, useState } from 'react';

const ConfirmDialog = lazy(
    () => import("@/Components/ConfirmDialog"),
   );

export default function UserDangerZone({user}:UserCardProps) {
    const { toast } = useToast();
     const [dialogOpen, setDialogOpen] = useState(false);
     const [action, setAction] = useState<'ban' | 'delete'>('ban');

     const handleAction = () => {
         if (action === 'ban') {
             router.post(route('users.set_active_status', user.slug), {
                 isActive: !user.is_active
             });
             toast({
                title: "Success",
                description: "User status updated successfully",
                variant: "default",
            })
         } else {
             router.delete(route('users.destroy', user.slug));
             toast({
                title: "Success",
                description: "User deleted successfully",
                variant: "default",
            })
            setTimeout(() => {
                router.visit(route('users.index'));
            },500)
         }
         
     };
  return (
    <div className="card p-6 bg-red-100">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Danger Zone</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Paperclip size={20} className='text-slate-900 dark:text-slate-200' />
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                        <Button onClick={() => {
                        setAction('ban');
                        setDialogOpen(true);
                        }} className="btn bg-warning text-white">
                            <Ban className="text-base" /> {user.is_active ? 'Ban' : 'Unban'}
                        </Button>
                    <Button onClick={() => {
                        setAction('delete');
                        setDialogOpen(true);
                    }} className="btn bg-danger text-white">
                        <Trash2 className="text-base"/>Delete
                    </Button>

                            </div>
 
     <Suspense fallback={''}>
     <ConfirmDialog
            message={action === 'ban' 
                ? `Are you sure you want to ${user.is_active ? 'ban' : 'unban'} this user?`
                : 'Are you sure you want to delete this user?'}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            onContinue={handleAction}
        />
         
     <Toaster />
     </Suspense>
    </div>
  )
}
