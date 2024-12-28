import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import DProductFilter from './DProductFilter'
import DProductCard from './DProductCard'
import { Product, ProductCardProps } from '@/types'

export default function Index({ products = [] }: ProductCardProps) {
  return (
    <Authenticated>
        <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-4">

          
  <div className="mx-auto 2xl:px-0">
    {/* <!-- Heading & Filters --> */}
    <DProductFilter />
    
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-2">
       {products.map((product: any) => (
        <DProductCard key={product.id} product={product} />
       ))}
      </div>
  </div>
  
</section>
    </Authenticated>
  )
}
