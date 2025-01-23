import Authenticated from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import { Filters, QueryParams, StoreCardProps } from '@/types'
import { Link, router, usePage } from '@inertiajs/react'
import AdminStoreCard from './AdminStoreCard'
import AdminProductFilter from './AdminProductFilter'
// @ts-expect-error
import { debounce } from 'lodash';

export default function Index({ stores = [], canCreateStore }: 
  {
    stores: StoreCardProps[],
    canCreateStore: boolean
  }) {
    const auth = usePage().props.auth;

    const [filters, setFilters] = useState({
      search: '',
      store: '',
      status: ''
  });


  const updateFilters = React.useCallback(
    debounce((newFilters: Partial<Filters>) => {
      const queryParams: QueryParams = {};
      
      // Merge new filters with existing filters
      const updatedFilters = { ...filters, ...newFilters };
      
      // Add non-empty filter values to query params
      Object.keys(updatedFilters).forEach(key => {
        if (updatedFilters[key as keyof Filters]) {
          queryParams[key] = updatedFilters[key as keyof Filters] as string;
        }
      });
 
      router.get(route('admin.stores'), queryParams, {
        preserveState: true,
        replace: true
      });
 
      // Update local state with merged filters
      setFilters(updatedFilters);
    }, 300), // 300ms delay
    [filters]  // Add filters to dependency array
 );

  return (
    <Authenticated>
        <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-4">

          
  <div className="mx-auto 2xl:px-0">
    {!stores ? (
      <div className="col-span-4 md:col-span-3">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">No stores found. 😫</p>
            </div>
          </div>
        </div>
    )
  :
  (
    <>
    <AdminProductFilter 
                canCreateStore={canCreateStore} 
                onSearch={(search) => updateFilters({ search })}
                // onStoreFilter={(store) => updateFilters({ store })}
                onStatusFilter={(status) => updateFilters({ status })}
                 />
    
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-2">
       {stores.map((store: any) => (
        <AdminStoreCard key={store.id} store={store} />
       ))}
       
       {!stores.length && (
        <div className="col-span-4 md:col-span-3">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">You haven`t added any products yet.</p>
            </div>
          </div>
        </div>
       )}
      </div>
      </>
  )}
    
    
    
  </div>
  
</section>
    </Authenticated>
  )
}
