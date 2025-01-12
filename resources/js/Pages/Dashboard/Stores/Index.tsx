import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import DProductFilter from './DProductFilter'
import { Product, ProductCardProps, StoreCardProps } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import DStoreCard from './DStoreCard'

export default function Index({ products = [], canCreateStore }: 
  {
    products: ProductCardProps[],
    canCreateStore: boolean
  }) {
    const auth = usePage().props.auth
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
    <DProductFilter canCreateStore={canCreateStore} />
    
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
