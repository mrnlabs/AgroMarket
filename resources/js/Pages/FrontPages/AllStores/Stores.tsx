import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
const Stores = () => {
return (
<GuestLayout>
   <div className="breadcrumb mb-0 py-26 bg-main-50">
      <div className="container container-lg">
         <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Shop</h6>
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
         <div className="flex-between flex-wrap gap-8 mb-40">
            <span className="text-neutral-600 font-[500] px-40 py-12 rounded-[50rem] border border-neutral-100">Showing 1-20 of 85 results</span>
            <div className="flex items-center gap-16">
               <form action="#" className="search-form__wrapper relative block">
                <input className="search-form__input common-input py-13 ps-16 pe-18 !rounded-[50rem] pe-44" placeholder="Search vendors by name or ID..." /> <button type="submit" className="w-32 h-32 bg-main-600 rounded-[50%] flex items-center justify-center text-xl text-white absolute top-[50%] translate-y-[-50%] right-0 me-8"><i className="ph ph-magnifying-glass"></i></button></form>
               <div className="flex items-center gap-8">
                  <span className="text-gray-900 flex-shrink-0">Sort by:</span> 
                  <select className="common-input form-select !rounded-[50rem] border border-gray-100 inline-block ps-20 pe-36 h-48 !py-0 font-[500]">
                     <option value="1">Latest</option>
                     <option value="1">Old</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="row g-4 vendor-card-wrapper">
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="200">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo1.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Organic Market</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="400">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo2.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Safeway</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="600">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo3.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Food Max</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="800">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo4.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">HRmart</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="200">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo5.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Lucky Supermarket</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="400">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo6.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Arico Farmer</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="600">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo7.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Farmer Market</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="800">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo8.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Foodsco</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="200">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo1.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Organic Market</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="400">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo2.png" alt="Image"  className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Safeway</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="600">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo3.png" alt="Image"  className="vendor-card__logo m-12"  />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">Food Max</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
                  </div>
               </div>
            </div>
            <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 md:w-6/12 aos-init" data-aos="zoom-in" data-aos-duration="800">
               <div className="vendor-card text-center px-16 pb-24">
                  <div className="">
                     <img src="images/vendor-logo4.png" alt="Image" className="vendor-card__logo m-12" />
                     <h6 className="title mt-32"><a href="vendor-details.html" className="">HRmart</a></h6>
                     <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack &amp; Candy</a>
                  </div>
                  <div className="vendor-card__list mt-22 flex items-center justify-center flex-wrap gap-8">
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img1.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img2.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img3.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img4.png" alt="Image" /></div>
                     <div className="vendor-card__item bg-white rounded-[50%] flex items-center justify-center"><img src="images/vendor-img5.png" alt="Image" /></div>
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
export default Stores