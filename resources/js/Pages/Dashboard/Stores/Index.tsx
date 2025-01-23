import Authenticated from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import DProductFilter from './DProductFilter'
import { Filters, Product, ProductCardProps, QueryParams, StoreCardProps } from '@/types'
import { Link, router, usePage } from '@inertiajs/react'
import DStoreCard from './DStoreCard';
// @ts-expect-error
import { debounce } from 'lodash';

export default function Index({ products = [], canCreateStore }: 
  {
    products: ProductCardProps[],
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
     
          router.get(route('dashboard.stores.myStores'), queryParams, {
            preserveState: true,
            replace: true
          });
     
          // Update local state with merged filters
          setFilters(updatedFilters);
        }, 300),
        [filters]
     );
  return (
    <Authenticated>
        <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-4">

          
  <div className="mx-auto 2xl:px-0">
    {!auth.user?.store ? (
      <div className="col-span-4 md:col-span-3">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">You haven`t added any stores yet.<span> 
                <Link href={route('dashboard.stores.create')} className="text-primary">Create store?</Link></span></p>
            </div>
          </div>
        </div>
    )
  :
  (
    <>
    <DProductFilter canCreateStore={canCreateStore} 
                onSearch={(search) => updateFilters({ search })}
                // onStoreFilter={(store) => updateFilters({ store })}
                onStatusFilter={(status) => updateFilters({ status })} />
    
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-2">
       {products.map((product: any) => (
        <DStoreCard key={product.id} product={product} />
       ))}
       
       {!products.length && (
        <div className="col-span-4 md:col-span-3">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">You haven`t added any products yet.<span> 
                <Link href={route('dashboard.products.create')} className="text-primary">Create product ?</Link></span></p>
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
