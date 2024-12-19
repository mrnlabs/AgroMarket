import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
const StoreDetails = () => {
return (
<GuestLayout>
   <div className="breadcrumb mb-0 py-26 bg-main-50">
      <div className="container container-lg">
         <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Vendor List</h6>
            <ul className="flex items-center gap-8 flex-wrap">
               <li className="text-sm"><a href="index.html" className="text-gray-900 flex items-center gap-8 hover-text-main-600"><i className="ph ph-house"></i> Home</a></li>
               <li className="flex items-center"><i className="ph ph-caret-right"></i></li>
               <li className="text-sm text-main-600">Vendor List</li>
            </ul>
         </div>
      </div>
   </div>
   <section className="vendors-list py-80">
      <div className="container container-lg">
         <div className="row g-4">
            <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto 2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto">
               <div className="shop-sidebar">
                  <button type="button" className="shop-sidebar__close xl:hidden flex w-32 h-32 flex items-center justify-center border border-gray-100 rounded-[50%] hover-bg-main-600 absolute right-0 mr-[10px] mt-8 hover-text-white hover-border-main-600"><i className="ph ph-x"></i></button>
                  <div className="flex flex-col gap-12 px-lg-0 px-16 py-lg-0 py-24">
                     <div className="vendor-card style-two text-center px-16 pb-24 bg-main-50">
                        <img src="images/vendor-logo2.png" alt="Image"  className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Safeway</h6>
                        <span className="text-neutral-600 text-sm block font-[600]">New Street, 520, New York</span> <span className="bg-white text-neutral-900 rounded-[50rem] py-6 px-16 text-12 mt-8">Since 2009</span>
                        <p className="text-neutral-600 my-24">It's easy and free to link or sign up for our loyalty program, and it only takes a few seconds.</p>
                        <ul className="flex items-center justify-center gap-8 flex-wrap">
                           <li><a href="https://www.facebook.com" className="w-36 h-36 flex items-center justify-center bg-white text-main-600 text-lg rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-facebook-logo"></i></a></li>
                           <li><a href="https://www.twitter.com" className="w-36 h-36 flex items-center justify-center bg-white text-main-600 text-lg rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-twitter-logo"></i></a></li>
                           <li><a href="https://www.linkedin.com" className="w-36 h-36 flex items-center justify-center bg-white text-main-600 text-lg rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-instagram-logo"></i></a></li>
                           <li><a href="https://www.pinterest.com" className="w-36 h-36 flex items-center justify-center bg-white text-main-600 text-lg rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-linkedin-logo"></i></a></li>
                        </ul>
                        <a href="contact.html" className="btn btn-main !rounded-[50rem] py-16 px-32 mt-28 w-full">Contact Seller</a>
                     </div>
                     <div className="border border-gray-50 rounded-8 p-24">
                        <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Product Category</h6>
                        <ul className="max-h-326 overflow-y-auto scroll-sm">
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
                     <div className="border border-gray-50 rounded-8 p-24">
                        <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Price</h6>
                        <div className="custom--range">
                           <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                              
                              <div className="ui-slider-range ui-corner-all ui-widget-header" 
                              // style={left:"0%;", width:"100%;"}
                              ></div>
                              <span 
                              // tabindex="0"
                               className="ui-slider-handle ui-corner-all ui-state-default" 
                              // style="left: 0%;"
                              ></span><span 
                              // tabindex="0" 
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              //  style="left: 100%;"
                               ></span>
                           </div>
                           <div className="flex-between flex-wrap-reverse gap-8 mt-24">
                              <button type="button" className="btn btn-main h-40 flex items-center">Filter</button>
                              <div className="custom--range__content flex items-center gap-8"><span className="text-gray-500 text-md flex-shrink-0">Price:</span> 
                              <input className="custom--range__prices text-neutral-600 text-start text-md font-[500]" id="amount"
                              //  readonly="readonly" 
                               /></div>
                           </div>
                        </div>
                     </div>
                     <div className="border border-gray-50 rounded-8 p-24">
                        <h6 className="text-xl border-b border-gray-100 pb-24 mb-24">Filter by Rating</h6>
                        <div className="flex items-center gap-8 relative mb-20">
                           <label className="absolute w-full h-full cursor-pointer" 
                          //  for="rating5"
                           ></label>
                           <div className="common-check common-radio !mb-0">
                            <input className="form-check-input" type="radio" 
                            name="flexRadioDefault" id="rating5" /></div>
                           <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span></div>
                           <span className="text-gray-900 flex-shrink-0">124</span>
                        </div>
                        <div className="flex items-center gap-8 relative mb-20">
                           <label className="absolute w-full h-full cursor-pointer"
                            // for="rating4"
                            ></label>
                           <div className="common-check common-radio !mb-0">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                             id="rating4" /></div>
                           <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                           <span className="text-gray-900 flex-shrink-0">52</span>
                        </div>
                        <div className="flex items-center gap-8 relative mb-20">
                           <label className="absolute w-full h-full cursor-pointer" 
                          //  for="rating3"
                           ></label>
                           <div className="common-check common-radio !mb-0">
                            <input className="form-check-input" type="radio" 
                            name="flexRadioDefault" id="rating3" />

                            </div>
                           <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                           <span className="text-gray-900 flex-shrink-0">12</span>
                        </div>
                        <div className="flex items-center gap-8 relative mb-20">
                           <label className="absolute w-full h-full cursor-pointer" 
                           
                          //  for="rating2"
                           >

                           </label>
                           <div className="common-check common-radio !mb-0">
                            <input className="form-check-input" type="radio" 
                            name="flexRadioDefault" id="rating2" /></div>
                           <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                           <span className="text-gray-900 flex-shrink-0">5</span>
                        </div>
                        <div className="flex items-center gap-8 relative mb-0">
                           <label className="absolute w-full h-full cursor-pointer"
                            // for="rating1"
                            >
                              
                            </label>
                           <div className="common-check common-radio !mb-0">
                            <input className="form-check-input" type="radio" 
                            name="flexRadioDefault" id="rating1" /></div>
                           <div className="flex items-center gap-4"><span className="text-xs font-[500] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[500] text-gray-400 flex"><i className="ph-fill ph-star"></i></span></div>
                           <span className="text-gray-900 flex-shrink-0">2</span>
                        </div>
                     </div>
                     <div className="bg-main-50 rounded-8 p-16 text-center">
                        <span className="text-2xl text-neutral-600 mb-8">Fresh Vegetables</span>
                        <h5 className="text-32 text-main-600">Up to 25% Off</h5>
                        <div className="mt-52"><img src="images/advertiser-img.png" alt="Image" /></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-10/12 flex-grow-0 flex-shrink-0 basis-auto 2xl:w-9/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-8/12 flex-grow-0 flex-shrink-0 basis-auto">
               <div className="flex-between flex-wrap gap-8 mb-40">
                  <form action="#" className="search-form__wrapper relative block">
                    <input className="search-form__input common-input py-13 ps-16 pe-18
                     !rounded-[50rem] pe-44" placeholder="Search vendors by name or ID..." /> <button type="submit" className="w-32 h-32 bg-main-600 rounded-[50%] flex items-center justify-center text-xl text-white absolute top-[50%] translate-y-[-50%] right-0 me-8"><i className="ph ph-magnifying-glass"></i></button></form>
                  <div className="flex items-center gap-16">
                     <span className="text-neutral-600 font-[500] px-40 py-12 rounded-[50rem] border border-neutral-100 lg:block hidden">Showing 1-20 of 85 results</span>
                     <div className="flex items-center gap-8">
                        <span className="text-gray-900 flex-shrink-0">Sort by:</span> 
                        <select className="common-input form-select !rounded-[50rem] border border-gray-100 inline-block ps-20 pe-36 h-48 !py-0 font-[500]">
                           <option value="1">Latest</option>
                           <option value="1">Old</option>
                        </select>
                     </div>
                     <button type="button" className="w-44 h-44 xl:hidden flex flex items-center justify-center border border-gray-100 rounded-6 text-2xl sidebar-btn"><i className="ph-bold ph-funnel"></i></button>
                  </div>
               </div>
               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-12">
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="200">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="400">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img8.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Marcel's Modern Pantry Almond Unsweetened</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="600">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img9.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">O Organics Milk, Whole, Vitamin D</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="800">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">Best Sale </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img10.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Whole Grains and Seeds Organic Bread</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="1000">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="200">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="400">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="600">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="800">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good &amp; Gather Farmed Atlantic Salmon</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="1000">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="200">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="400">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img8.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Marcel's Modern Pantry Almond Unsweetened</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="600">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img9.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">O Organics Milk, Whole, Vitamin D</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="800">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">Best Sale </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img10.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Whole Grains and Seeds Organic Bread</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="1000">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="200">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="400">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="600">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="800">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good &amp; Gather Farmed Atlantic Salmon</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col aos-init" data-aos="fade-up" data-aos-duration="1000">
                     <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                        <div className="product-card__content p-sm-2 w-full">
                           <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                           <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                           <div className="product-card__content mt-12">
                              <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 !rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Add To Cart <i className="ph ph-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <ul className="pagination flex items-center justify-center flex-wrap gap-16">
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-xxl rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html"><i className="ph-bold ph-arrow-left"></i></a></li>
                  <li className="page-item active"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">01</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">02</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">03</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">04</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">05</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">06</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-md rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html">07</a></li>
                  <li className="page-item"><a className="page-link h-64 w-64 flex items-center justify-center text-xxl rounded-[50%] font-[500] text-neutral-600 border border-gray-100" href="index.html"><i className="ph-bold ph-arrow-right"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
   </section>
   <section className="shipping mb-80" id="shipping">
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
export default StoreDetails