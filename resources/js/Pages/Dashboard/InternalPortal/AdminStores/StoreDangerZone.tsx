import { Button } from '@/Components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { toast } from '@/hooks/use-toast';
import { Store, StoreCardProps } from '@/types'
import { router } from '@inertiajs/react';
import { Lock } from 'lucide-react'
import { lazy, useState } from 'react';


const ConfirmDialog = lazy(() => import("@/Components/ConfirmDialog"));

export default function StoreDangerZone({store}: {store: Store}) {
 const [dialogOpen, setDialogOpen] = useState(false);
 const [status, setStatus] = useState(store.status);
 const [action, setAction] = useState<'deactivate' | 'delete'>('deactivate');

  const handleModal = (e: any) => {
    
    if(e === 'delete'){
      setAction('delete');
    }else{
      setAction('deactivate');
    }
    setDialogOpen(true);
    setStatus(e);
  }
  const handleStoreStatus = () => {
    router.post(route('dashboard.stores.set_active_status', store.slug), {
      status
    }, {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Store status updated successfully",
          variant: "default",
      })
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to update store status",
          variant: "destructive",
      })
      },
      onFinish: () => {
        store.status = status;
      }
    })
  }
  return (
    <div className="card p-6 bg-red-100 dark:bg-red-500">
    <div className="flex justify-between items-center mb-4">
        <p className="card-title">Danger Zone <span className="text-red-500">*</span></p>
        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
        <Lock size={20} className='text-slate-900 dark:text-slate-200' />
        </div>
    </div>

    <div className="flex flex-col gap-3">
    <Select value={store.status} onValueChange={(e) => handleModal(e)}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" defaultValue={''} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Store Status</SelectLabel>
            <SelectItem className='text-green-500 cursor-pointer' value="deactivate">{store.status == 'active' ? 'Deactivate' : 'Activate'} Store</SelectItem>
            <SelectItem className='text-red-500 cursor-pointer' value="delete">Delete Store</SelectItem>
            {/* <SelectItem className='text-yellow-500' value="on_backorder">On Backorder</SelectItem>
            <SelectItem className='text-blue-500' value="pre_order">Pre-Order</SelectItem> */}
            </SelectGroup>
        </SelectContent>
        </Select>
    </div>
    <ConfirmDialog 
                message={action === 'deactivate' 
                  ? `Are you sure you want to ${store.status == 'active' ? 'deactivate' : 'activate'} your store?`
                  : 'Are you sure you want to delete this store and logout. This action cannot be undone?'}
                dialogOpen={dialogOpen} 
                setDialogOpen={setDialogOpen}
                onContinue={handleStoreStatus}
             />
</div>
  )
}
