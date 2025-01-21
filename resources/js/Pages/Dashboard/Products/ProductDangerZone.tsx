import { Button } from '@/Components/ui/button'
import { Toaster } from '@/Components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { ProductCardProps} from '@/types'
import { router } from '@inertiajs/react';
import { Ban,Trash2, TriangleAlert } from 'lucide-react'
import React, { lazy, Suspense, useState } from 'react';

const ConfirmDialog = lazy(
    () => import("@/Components/ConfirmDialog"),
   );

export default function ProductDangerZone({product}: ProductCardProps) {
    const { toast } = useToast();
     const [dialogOpen, setDialogOpen] = useState(false);
     const [action, setAction] = useState<'ban' | 'delete'>('ban');

     const handleAction = () => {
             router.post(route('dashboard.products.destroy', product.slug),undefined,{
                onSuccess: () => {
                    toast({
                        title: "Success",
                        description: "Product deleted successfully",
                        variant: "default",
                    })
                },
                onError: () => {
                    toast({
                        title: "Error",
                        description: "Error deleting product",
                        variant: "destructive",
                    })
                }
             });
             
         
     };
  return (
    <div className="card p-6 bg-red-100 dark:bg-red-900">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Danger Zone</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <TriangleAlert size={20} className='text-red-500' />
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Button onClick={() => {
                        setAction('delete');
                        setDialogOpen(true);
                    }} className="btn bg-danger text-white w-full">
                        <Trash2 className="text-base"/>Delete
                    </Button>

                            </div>
 
     <Suspense fallback={''}>
     <ConfirmDialog
            message={`Are you sure you want to delete this product?`}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            onContinue={handleAction}
        />
         
     <Toaster />
     </Suspense>
    </div>
  )
}
