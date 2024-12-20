import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
const Products = () => {
return (
<GuestLayout>
   <div className="breadcrumb mb-0 py-26 bg-main-two-50">
      <div className="container container-lg">
         <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Shop</h6>
            <ul className="flex items-center gap-8 flex-wrap">
               <li className="text-sm"><a href="index.html" className="text-gray-900 flex items-center gap-8 hover-text-main-600"><i className="ph ph-house"></i> Home</a></li>
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
                  <button type="button" className="shop-sidebar__close xl:hidden flex w-32 h-32 flex items-center justify-center border border-gray-100 rounded-[50%] hover-bg-main-600 absolute right-0 mr-[10px] mt-8 hover-text-white hover-border-main-600"><i className="ph ph-x"></i></button>
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Product Category</h6>
                     <ul className="max-h-540 overflow-y-auto scroll-sm">
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Mobile &amp; Accessories (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Laptop (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Electronics (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Smart Watch (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Storage (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Portable Devices (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Action Camera (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Smart Gadget (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Monitor (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Smart TV (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Camera (12)</a></li>
                        <li className="mb-24"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Monitor Stand (12)</a></li>
                        <li className="mb-0"><a href="product-details-two.html" className="text-gray-900 hover-text-main-600">Headphone (12)</a></li>
                     </ul>
                  </div>
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Price</h6>
                     <div className="custom--range">
                        <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                           <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0%;", width: "100%;" }}></div>
                           <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
                        </div>
                        <div className="flex-between flex-wrap-reverse gap-8 mt-24">
                           <button type="button" className="btn btn-main h-40 flex items-center">Filter</button>
                           <div className="custom--range__content flex items-center gap-8"><span className="text-gray-500 text-md flex-shrink-0">Price:</span> <input className="custom--range__prices text-neutral-600 text-start text-md font-[500]" id="amount" readOnly={true}></div>
                        </div>
                     </div>
                  </div>
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Rating</h6>
                     <div className="flex items-center gap-8 relative mb-20">
                        <label className="absolute w-full h-full cursor-pointer" htmlFor="rating5"></label>
                        <div className="common-check common-radio !mb-0"><input className="form-check-input" type="radio" name="flexRadioDefault" id="rating5"></div>
                        <div className="progress w-full bg-gray-100 rounded-[50rem] h-8" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                           <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:70%"></div>
                        </div>
                        <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span></div>
                        <span className="text-gray-900 flex-shrink-0">124</span>
                     </div>
                     <div className="flex items-center gap-8 relative mb-20">
                        <label className="absolute w-full h-full cursor-pointer" htmlFor="rating4"></label>
                        <div className="common-check common-radio !mb-0"><input className="form-check-input" type="radio" name="flexRadioDefault" id="rating4"></div>
                        <div className="progress w-full bg-gray-100 rounded-[50rem] h-8" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                           <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:50%"></div>
                        </div>
                        <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                        <span className="text-gray-900 flex-shrink-0">52</span>
                     </div>
                     <div className="flex items-center gap-8 relative mb-20">
                        <label className="absolute w-full h-full cursor-pointer" htmlFor="rating3"></label>
                        <div className="common-check common-radio !mb-0"><input className="form-check-input" type="radio" name="flexRadioDefault" id="rating3"></div>
                        <div className="progress w-full bg-gray-100 rounded-[50rem] h-8" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                           <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
                        </div>
                        <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                        <span className="text-gray-900 flex-shrink-0">12</span>
                     </div>
                     <div className="flex items-center gap-8 relative mb-20">
                        <label className="absolute w-full h-full cursor-pointer" htmlFor="rating2"></label>
                        <div className="common-check common-radio !mb-0"><input className="form-check-input" type="radio" name="flexRadioDefault" id="rating2"></div>
                        <div className="progress w-full bg-gray-100 rounded-[50rem] h-8" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                           <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:20%"></div>
                        </div>
                        <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                        <span className="text-gray-900 flex-shrink-0">5</span>
                     </div>
                     <div className="flex items-center gap-8 relative mb-0">
                        <label className="absolute w-full h-full cursor-pointer" htmlFor="rating1"></label>
                        <div className="common-check common-radio !mb-0"><input className="form-check-input" type="radio" name="flexRadioDefault" id="rating1"></div>
                        <div className="progress w-full bg-gray-100 rounded-[50rem] h-8" role="progressbar" aria-label="Basic example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                           <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:5%"></div>
                        </div>
                        <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                        <span className="text-gray-900 flex-shrink-0">2</span>
                     </div>
                  </div>
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Color</h6>
                     <ul className="max-h-540 overflow-y-auto scroll-sm">
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-black"><input className="form-check-input" type="radio" name="color" id="color1"> <label className="form-check-label" htmlFor="color1">Black(12)</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-primary"><input className="form-check-input" type="radio" name="color" id="color2"> <label className="form-check-label" htmlFor="color2">Blue (12)</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-gray"><input className="form-check-input" type="radio" name="color" id="color3"> <label className="form-check-label" htmlFor="color3">Gray (12)</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-success"><input className="form-check-input" type="radio" name="color" id="color4"> <label className="form-check-label" htmlFor="color4">Green (12)</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-danger"><input className="form-check-input" type="radio" name="color" id="color5"> <label className="form-check-label" htmlFor="color5">Red (12)</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio checked-white"><input className="form-check-input" type="radio" name="color" id="color6"> <label className="form-check-label" htmlFor="color6">White (12)</label></div>
                        </li>
                        <li className="mb-0">
                           <div className="form-check common-check common-radio checked-purple"><input className="form-check-input" type="radio" name="color" id="color7"> <label className="form-check-label" htmlFor="color7">Purple (12)</label></div>
                        </li>
                     </ul>
                  </div>
                  <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                     <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Brand</h6>
                     <ul className="max-h-540 overflow-y-auto scroll-sm">
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="brand1"> <label className="form-check-label" htmlFor="brand1">Apple</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="brand2"> <label className="form-check-label" htmlFor="brand2">Samsung</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="brand3"> <label className="form-check-label" htmlFor="brand3">Microsoft</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="brand4"> <label className="form-check-label" htmlFor="brand4">Apple</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="brand5"> <label className="form-check-label" htmlFor="brand5">HP</label></div>
                        </li>
                        <li className="mb-24">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="DELL"> <label className="form-check-label" htmlFor="DELL">DELL</label></div>
                        </li>
                        <li className="mb-0">
                           <div className="form-check common-check common-radio"><input className="form-check-input" type="radio" name="color" id="Redmi"> <label className="form-check-label" htmlFor="Redmi">Redmi</label></div>
                        </li>
                     </ul>
                  </div>
                  <div className="shop-sidebar__box rounded-8"><img src="images/advertise-img1.png" alt="Image"></div>
               </div>
            </div>
            <div className="xl:w-9/12 flex-grow-0 flex-shrink-0 basis-auto">
               <div className="flex-between gap-16 flex-wrap mb-40">
                  <span className="text-gray-900">Showing 1-20 of 85 result</span>
                  <div className="relative flex items-center gap-16 flex-wrap">
                     <div className="list-grid-btns flex items-center gap-16"><button type="button" className="w-44 h-44 flex items-center justify-center border border-gray-100 rounded-6 text-2xl list-btn"><i className="ph-bold ph-list-dashes"></i></button> <button type="button" className="w-44 h-44 flex items-center justify-center border border-main-600 text-white bg-main-600 rounded-6 text-2xl grid-btn"><i className="ph ph-squares-four"></i></button></div>
                     <div className="relative text-gray-500 flex items-center gap-4 text-14">
                        <label htmlFor="sorting" className="text-inherit flex-shrink-0">Sort by:</label> 
                        <select className="form-control block w-full p-[0.375rem_0.75rem] text-base leading-6 text-[#495057] bg-white bg-clip-padding border border-[#ced4da] rounded transition-all duration-150 ease-in-out focus:text-[#495057] focus:bg-white focus:border-main focus:outline-0 focus:shadow-none common-input px-14 py-14 text-inherit rounded-6 w-auto" id="sorting">
                           <option value="1" selected="selected">Popular</option>
                           <option value="1">Latest</option>
                           <option value="1">Trending</option>
                           <option value="1">Matches</option>
                        </select>
                     </div>
                     <button type="button" className="w-44 h-44 xl:hidden flex flex items-center justify-center border border-gray-100 rounded-6 text-2xl sidebar-btn"><i className="ph-bold ph-funnel"></i></button>
                  </div>
               </div>
               <div className="list-grid-wrapper">
                  <div className="product-card h-full p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center rounded-8 bg-gray-50 relative"><img src="images/product-two-img1.png" alt="Image" className="!w-auto max-w-[unset]"> <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white absolute inset-inline-start-0 inset-block-start-0">Best Sale</span></a>
                     <div className="product-card__content mt-16">
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2" tabindex="0">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center mb-20 mt-16 gap-6"><span className="text-xs font-[500] text-gray-500">4.8</span> <span className="text-15 font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-500">(17k)</span></div>
                        <div className="mt-8">
                           <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-main-two-600 rounded-[50rem]" style="width:35%"></div>
                           </div>
                           <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                        </div>
                        <div className="product-card__price my-20"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                        <a href="cart.html" className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex items-center justify-center gap-8 font-[500]" tabindex="0">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                     </div>
                  </div>
                  <div className="product-card h-full p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center rounded-8 bg-gray-50 relative"><img src="images/product-two-img2.png" alt="Image" className="!w-auto max-w-[unset]"></a>
                     <div className="product-card__content mt-16">
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2" tabindex="0">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center mb-20 mt-16 gap-6"><span className="text-xs font-[500] text-gray-500">4.8</span> <span className="text-15 font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-500">(17k)</span></div>
                        <div className="mt-8">
                           <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-main-two-600 rounded-[50rem]" style="width:35%"></div>
                           </div>
                           <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                        </div>
                        <div className="product-card__price my-20"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                        <a href="cart.html" className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex items-center justify-center gap-8 font-[500]" tabindex="0">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                     </div>
                  </div>
                  
               </div>
               <ul className="pagination flex items-center justify-center flex-wrap gap-16">
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-xxl rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html"><i className="ph-bold ph-arrow-left"></i></a></li>
                  <li className="page-item active"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">01</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">02</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">03</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">04</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">05</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">06</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html">07</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-xxl rounded-8 font-[500] text-neutral-600 border border-gray-100" href="index.html"><i className="ph-bold ph-arrow-right"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
   </section>
   <section className="shipping mb-24" id="shipping">
      <div className="container container-lg">
         <div className="row g-4">
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="400">
               <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                  <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-car-profile"></i></span>
                  <div className="">
                     <h6 className="mb-0">Free Shipping</h6>
                     <span className="text-sm text-heading">Free shipping all over the US</span>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="600">
               <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                  <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-hand-heart"></i></span>
                  <div className="">
                     <h6 className="mb-0">100% Satisfaction</h6>
                     <span className="text-sm text-heading">Free shipping all over the US</span>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="800">
               <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                  <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-credit-card"></i></span>
                  <div className="">
                     <h6 className="mb-0">Secure Payments</h6>
                     <span className="text-sm text-heading">Free shipping all over the US</span>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="1000">
               <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                  <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-chats"></i></span>
                  <div className="">
                     <h6 className="mb-0">24/7 Support</h6>
                     <span className="text-sm text-heading">Free shipping all over the US</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</GuestLayout>
)
}
export default Products