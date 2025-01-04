import { usePage } from '@inertiajs/react';
import React from 'react'

const CategoriesSlider = ({categories}: any) => {
   const filePath = usePage().props.filePath; 
  return (
    <div className="feature" id="featureSection">
         <div className="container container-lg">
            <div className="relative arrow-center">
               <div className="flex items-center">
                  <button type="button" id="feature-item-wrapper-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-left"></i>
                  </button>
                  <button type="button" id="feature-item-wrapper-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-right"></i>
                  </button>
               </div>
               <div className="feature-item-wrapper">
                  {categories.map((category: any, index: number) => (
                    <div key={category.id} className="feature-item text-center wow bounceIn" data-aos="fade-up" data-aos-duration="400">
                      <div className="feature-item__thumb rounded-[50%]">
                        <a href="shop.html" className="w-full h-full flex items-center justify-center">
                          <img src={filePath + category.image} alt="Image" />
                        </a>
                      </div>
                      <div className="feature-item__content mt-16">
                        <h6 className="text-lg mb-8">
                          <a href="" className="text-inherit">{category.name}</a>
                        </h6>
                        <span className="text-sm text-gray-400">{category.products_count} Products</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
  )
}

export default CategoriesSlider