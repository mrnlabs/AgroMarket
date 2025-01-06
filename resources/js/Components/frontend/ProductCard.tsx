import { ProductCardProps } from '@/types'
import { formatCurrency } from '@/utils/formatCurrency'
import { Link, usePage } from '@inertiajs/react';
import React from 'react'

const ProductCard = ({product} : ProductCardProps) => {
     const filePath = usePage().props.filePath; 
  return (
    <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
    <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
       <Link  href={`/shop/product-details/${product.slug}`} className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 absolute inset-block-start-0 right-0 me-16 mt-16">Add <i className="fluent--chat-20-regular"></i> </Link>
       <Link  href={`/shop/product-details/${product.slug}`}  className="product-card__thumb flex items-center justify-center">
        <img src={product.image ? `${filePath}/${product.image}` : ''} alt="Image" /></Link>
       <div className="product-card__content mt-12">
          <div className="product-card__price mb-16">
            {/* <span className="text-gray-400 text-md font-[600] text-decoration-line-through">{formatCurrency(product.price)} </span>  */}
            <span className="text-heading text-md font-[600]">{formatCurrency(product.price)}  
                {/* <span className="text-gray-500 font-normal">/Qty</span> */}
                </span></div>
          <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
          <h6 className="title text-lg font-[600] mt-12 mb-8"><Link  href={`/shop/product-details/${product.slug}`} className="link text-line-2">{product.title}</Link></h6>
          <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
          <div className="mt-12">
             {/* <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
             </div> */}
             <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
          </div>
       </div>
    </div>
 </div>
  )
}

export default ProductCard