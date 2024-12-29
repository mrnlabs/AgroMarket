import React from 'react'
import { Link } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'
const Products = () => {
return (
<GuestLayout>
   <div className="breadcrumb mb-0 py-26 bg-main-two-50">
      <div className="container container-lg">
         <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Shop</h6>
            <ul className="flex items-center gap-8 flex-wrap">
               <li className="text-sm">
                  <Link href="/" className="text-gray-900 flex items-center gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                  </Link>
               </li>
               <li className="flex items-center"><i className="ph ph-caret-right"></i></li>
               <li className="text-sm text-main-600">Product Shop</li>
            </ul>
         </div>
      </div>
   </div>
   <section className="shop py-80">
      <div className="container container-lg">
         <div className="row">
            <div className="xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto">
               <div className="shop-sidebar">
                  <button type="button" className="shop-sidebar__close xl:hidden flex w-32 h-32 items-center justify-center border border-gray-100 rounded-full hover-bg-main-600 absolute right-0 mr-[10px] mt-8 hover-text-white hover-border-main-600">
                  <i className="ph ph-x"></i>
                  </button>
                  {/* Category Box */}
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Product Category</h6>
                     <ul className="max-h-540 overflow-y-auto scroll-sm">
                        {[
                        'Mobile & Accessories', 'Laptop', 'Electronics', 'Smart Watch',
                        'Storage', 'Portable Devices', 'Action Camera', 'Smart Gadget',
                        'Monitor', 'Smart TV', 'Camera', 'Monitor Stand', 'Headphone'
                        ].map((category, index) => (
                        <li key={index} className={index === 12 ? 'mb-0' : 'mb-24'}>
                        <Link href="/product-details-two" className="text-gray-900 hover-text-main-600">
                        {category} (12)
                        </Link>
                        </li>
                        ))}
                     </ul>
                  </div>
                  {/* Price Filter Box */}
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Price</h6>
                     <div className="custom--range">
                        <div 
                           id="slider-range" 
                           className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                           >
                           <div 
                           className="ui-slider-range ui-corner-all ui-widget-header" 
                           style={{ left: "0%", width: "100%" }}
                           />
                           <span 
                           tabIndex={0} 
                           className="ui-slider-handle ui-corner-all ui-state-default" 
                           style={{ left: "0%" }}
                           />
                           <span 
                           tabIndex={0} 
                           className="ui-slider-handle ui-corner-all ui-state-default" 
                           style={{ left: "100%" }}
                           />
                        </div>
                        <div className="flex-between flex-wrap-reverse gap-8 mt-24">
                           <button type="button" className="btn btn-main h-40 flex items-center">Filter</button>
                           <div className="custom--range__content flex items-center gap-8">
                              <span className="text-gray-500 text-md flex-shrink-0">Price:</span>
                              <input 
                                 className="custom--range__prices text-neutral-600 text-start text-md font-[500]" 
                                 id="amount" 
                                 readOnly
                                 />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Rating Filter Box */}
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Rating</h6>
                     {[
                     { stars: 5, progress: 70, count: 124 },
                     { stars: 4, progress: 50, count: 52 },
                     { stars: 3, progress: 35, count: 12 },
                     { stars: 2, progress: 20, count: 5 },
                     { stars: 1, progress: 5, count: 2 }
                     ].map((rating, index) => (
                     <div key={index} className={`flex items-center gap-8 relative ${index === 4 ? 'mb-0' : 'mb-20'}`}>
                     <label className="absolute w-full h-full cursor-pointer" htmlFor={`rating${rating.stars}`} />
                        <div className="common-check common-radio !mb-0">
                           <input 
                              className="form-check-input" 
                              type="radio" 
                              name="flexRadioDefault" 
                              id={`rating${rating.stars}`}
                              />
                        </div>
                        <div 
                           className="progress w-full bg-gray-100 rounded-[50rem] h-8" 
                           role="progressbar" 
                           aria-label="Basic example" 
                           aria-valuenow={rating.progress} 
                           aria-valuemin={0} 
                           aria-valuemax={100}
                           >
                           <div 
                           className="progress-bar bg-main-600 rounded-[50rem]" 
                           style={{ width: `${rating.progress}%` }}
                           />
                        </div>
                        <div className="flex items-center gap-4">
                           {[...Array(5)].map((_, i) => (
                           <span 
                           key={i} 
                           className={`text-xs font-[500] ${i < rating.stars ? 'text-warning-600' : 'text-gray-400'} flex`}
                           >
                           <i className="ph-fill ph-star"></i>
                           </span>
                           ))}
                        </div>
                        <span className="text-gray-900 flex-shrink-0">{rating.count}</span>
                  </div>
                  ))}
               </div>
               {/* Color Filter Box */}
               <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
               <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Color</h6>
               <ul className="max-h-540 overflow-y-auto scroll-sm">
               {[
               { color: 'Black', class: 'checked-black' },
               { color: 'Blue', class: 'checked-primary' },
               { color: 'Gray', class: 'checked-gray' },
               { color: 'Green', class: 'checked-success' },
               { color: 'Red', class: 'checked-danger' },
               { color: 'White', class: 'checked-white' },
               { color: 'Purple', class: 'checked-purple' }
               ].map((item, index) => (
               <li key={index} className={index === 6 ? 'mb-0' : 'mb-24'}>
               <div className={`form-check common-check common-radio ${item.class}`}>
               <input 
               className="form-check-input" 
               type="radio" 
               name="color" 
               id={`color${index + 1}`}
               />
               <label className="form-check-label" htmlFor={`color${index + 1}`}>
               {item.color} (12)
               </label>
               </div>
               </li>
               ))}
               </ul>
            </div>
            {/* Brand Filter Box */}
            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
               <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Brand</h6>
               <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {[
                  'Apple', 'Samsung', 'Microsoft', 'Apple', 'HP', 'DELL', 'Redmi'
                  ].map((brand, index) => (
                  <li key={index} className={index === 6 ? 'mb-0' : 'mb-24'}>
                  <div className="form-check common-check common-radio">
                     <input 
                        className="form-check-input" 
                        type="radio" 
                        name="brand" 
                        id={brand}
                        />
                     <label className="form-check-label" htmlFor={brand}>
                     {brand}
                     </label>
                  </div>
                  </li>
                  ))}
               </ul>
            </div>
            {/* Advertisement Image */}
            <div className="shop-sidebar__box rounded-8">
               <img src="images/advertise-img1.png" alt="Advertisement" />
            </div>
         </div>
      </div>
      {/* Main Content Area */}
      <div className="xl:w-9/12 flex-grow-0 flex-shrink-0 basis-auto">
         <div className="flex-between gap-16 flex-wrap mb-40">
            <span className="text-gray-900">Showing 1-20 of 85 result</span>
            <div className="relative flex items-center gap-16 flex-wrap">
               <div className="list-grid-btns flex items-center gap-16">
                  <button type="button" className="w-44 h-44 flex items-center justify-center border border-gray-100 rounded-6 text-2xl list-btn">
                  <i className="ph-bold ph-list-dashes"></i>
                  </button>
                  <button type="button" className="w-44 h-44 flex items-center justify-center border border-main-600 text-white bg-main-600 rounded-6 text-2xl grid-btn">
                  <i className="ph ph-squares-four"></i>
                  </button>
               </div>
               <div className="relative text-gray-500 flex items-center gap-4 text-14">
                  <label htmlFor="sorting" className="text-inherit flex-shrink-0">Sort by:</label>
                  <select 
                     className="form-control block w-full p-[0.375rem_0.75rem] text-base leading-6 text-[#495057] bg-white bg-clip-padding border border-[#ced4da] rounded transition-all duration-150 ease-in-out focus:text-[#495057] focus:bg-white focus:border-main focus:outline-0 focus:shadow-none common-input px-14 py-14 text-inherit rounded-6 w-auto" 
                     id="sorting"
                     defaultValue="1"
                     >
                     <option value="1">Popular</option>
                     <option value="2">Latest</option>
                     <option value="3">Trending</option>
                     <option value="4">Matches</option>
                  </select>
               </div>
               <button type="button" className="w-44 h-44 xl:hidden flex items-center justify-center border border-gray-100 rounded-6 text-2xl sidebar-btn">
               <i className="ph-bold ph-funnel"></i>
               </button>
            </div>
         </div>
         {/* Product Grid */}
         {/* Product Cards Section */}
         <div className="list-grid-wrapper">
           
         <div className="product-card h-full p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
  <Link 
    href="/product-details" 
    className="product-card__thumb flex items-center justify-center rounded-8 bg-gray-50 relative"
  >
    <img 
      src="images/product-two-img1.png" 
      alt="Product" 
      className="!w-auto max-w-[unset]" 
    />
    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white absolute inset-inline-start-0 inset-block-start-0">
      Best Sale
    </span>
  </Link>
  
  <div className="product-card__content mt-16">
    <h6 className="title text-lg font-[600] mt-12 mb-8">
      <Link 
        href="/product-details" 
        className="link text-line-2"
      >
        Taylor Farms Broccoli Florets Vegetables
      </Link>
    </h6>
    
    <div className="flex items-center mb-20 mt-16 gap-6">
      <span className="text-xs font-[500] text-gray-500">4.8</span>
      <span className="text-15 font-[500] text-warning-600 flex">
        <i className="ph-fill ph-star"></i>
      </span>
      <span className="text-xs font-[500] text-gray-500">(17k)</span>
    </div>
    
    <div className="mt-8">
      <div 
        className="progress w-full bg-color-three rounded-[50rem] h-4" 
        role="progressbar" 
        aria-label="Basic example" 
        aria-valuenow={35} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div 
          className="progress-bar bg-main-two-600 rounded-[50rem]" 
          style={{ width: "35%" }}
        />
      </div>
      <span className="text-gray-900 text-xs font-[500] mt-8">
        Sold: 18/35
      </span>
    </div>
    
    <div className="product-card__price my-20">
      <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
        $28.99
      </span>
      <span className="text-heading text-md font-[600]">
        $14.99 <span className="text-gray-500 font-normal">/Qty</span>
      </span>
    </div>
    
    <Link 
      href="/cart" 
      className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex items-center justify-center gap-8 font-[500]"
    >
      Add To Cart <i className="ph ph-shopping-cart"></i>
    </Link>
  </div>
</div><div className="product-card h-full p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
  <Link 
    href="/product-details" 
    className="product-card__thumb flex items-center justify-center rounded-8 bg-gray-50 relative"
  >
    <img 
      src="images/product-two-img1.png" 
      alt="Product" 
      className="!w-auto max-w-[unset]" 
    />
    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white absolute inset-inline-start-0 inset-block-start-0">
      Best Sale
    </span>
  </Link>
  
  <div className="product-card__content mt-16">
    <h6 className="title text-lg font-[600] mt-12 mb-8">
      <Link 
        href="/product-details" 
        className="link text-line-2"
      >
        Taylor Farms Broccoli Florets Vegetables
      </Link>
    </h6>
    
    <div className="flex items-center mb-20 mt-16 gap-6">
      <span className="text-xs font-[500] text-gray-500">4.8</span>
      <span className="text-15 font-[500] text-warning-600 flex">
        <i className="ph-fill ph-star"></i>
      </span>
      <span className="text-xs font-[500] text-gray-500">(17k)</span>
    </div>
    
    <div className="mt-8">
      <div 
        className="progress w-full bg-color-three rounded-[50rem] h-4" 
        role="progressbar" 
        aria-label="Basic example" 
        aria-valuenow={35} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div 
          className="progress-bar bg-main-two-600 rounded-[50rem]" 
          style={{ width: "35%" }}
        />
      </div>
      <span className="text-gray-900 text-xs font-[500] mt-8">
        Sold: 18/35
      </span>
    </div>
    
    <div className="product-card__price my-20">
      <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
        $28.99
      </span>
      <span className="text-heading text-md font-[600]">
        $14.99 <span className="text-gray-500 font-normal">/Qty</span>
      </span>
    </div>
    
    <Link 
      href="/cart" 
      className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex items-center justify-center gap-8 font-[500]"
    >
      Add To Cart <i className="ph ph-shopping-cart"></i>
    </Link>
  </div>
</div>
<div className="product-card h-full p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
  <Link 
    href="/product-details" 
    className="product-card__thumb flex items-center justify-center rounded-8 bg-gray-50 relative"
  >
    <img 
      src="images/product-two-img1.png" 
      alt="Product" 
      className="!w-auto max-w-[unset]" 
    />
    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white absolute inset-inline-start-0 inset-block-start-0">
      Best Sale
    </span>
  </Link>
  
  <div className="product-card__content mt-16">
    <h6 className="title text-lg font-[600] mt-12 mb-8">
      <Link 
        href="/product-details" 
        className="link text-line-2"
      >
        Taylor Farms Broccoli Florets Vegetables
      </Link>
    </h6>
    
    <div className="flex items-center mb-20 mt-16 gap-6">
      <span className="text-xs font-[500] text-gray-500">4.8</span>
      <span className="text-15 font-[500] text-warning-600 flex">
        <i className="ph-fill ph-star"></i>
      </span>
      <span className="text-xs font-[500] text-gray-500">(17k)</span>
    </div>
    
    <div className="mt-8">
      <div 
        className="progress w-full bg-color-three rounded-[50rem] h-4" 
        role="progressbar" 
        aria-label="Basic example" 
        aria-valuenow={35} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div 
          className="progress-bar bg-main-two-600 rounded-[50rem]" 
          style={{ width: "35%" }}
        />
      </div>
      <span className="text-gray-900 text-xs font-[500] mt-8">
        Sold: 18/35
      </span>
    </div>
    
    <div className="product-card__price my-20">
      <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
        $28.99
      </span>
      <span className="text-heading text-md font-[600]">
        $14.99 <span className="text-gray-500 font-normal">/Qty</span>
      </span>
    </div>
    
    <Link 
      href="/cart" 
      className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex items-center justify-center gap-8 font-[500]"
    >
      Add To Cart <i className="ph ph-shopping-cart"></i>
    </Link>
  </div>
</div>
           
            {/* Add more product cards */}
         </div>
         {/* Pagination */}
         <ul className="pagination flex items-center justify-center flex-wrap gap-16">
            <li className="page-item">
               <Link 
                  href="/" 
                  className="page-link h-64 w-64 flex items-center justify-center text-xxl rounded-8 font-[500] text-neutral-600 border border-gray-100"
                  >
               <i className="ph-bold ph-arrow-left"></i>
               </Link>
            </li>
            {/* Add pagination items */}
         </ul>
      </div>
      </div>
      </div>
   </section>
</GuestLayout>
)
}
export default Products