import GuestLayout from '@/Layouts/GuestLayout';
import Nav from '@/Layouts/Shared/Nav';
import { PageProps, Product, ProductCardProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import Footer from '@/Layouts/Shared/Footer';
import Slider from '@/Components/frontend/Slider';
import CategoriesSlider from '@/Components/frontend/CategoriesSlider';
import RecommendedProducts from '@/Components/frontend/RecommendedProducts';
import ProductCard from '@/Components/frontend/ProductCard';





export default function Welcome({ products = [] }: ProductCardProps) {
   const  categories = usePage().props.categories;
   

   

    const handleImageError = ( ) => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
   

    return (
        <GuestLayout>
        
            <Head title="Welcome" />

  
         <Slider />


      <CategoriesSlider categories={categories} />



      <section className="promotional-banner pt-80">
         <div className="container container-lg">
            <div className="row g-4">
               <div className="2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12 wow bounceIn" data-aos="fade-up" data-aos-duration="400">
                  <div className="promotional-banner-item relative rounded-24 overflow-hidden z-[1]">
                     <img src="images/promotional-banner-img1.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1]" />
                     <div className="promotional-banner-item__content">
                        <h6 className="promotional-banner-item__title text-32">Everyday Fresh Meat</h6>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12 wow bounceIn" data-aos="fade-up" data-aos-duration="600">
                  <div className="promotional-banner-item relative rounded-24 overflow-hidden z-[1]">
                     <img src="images/promotional-banner-img2.png" alt="Image" 
                     className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1]" />
                     <div className="promotional-banner-item__content">
                        <h6 className="promotional-banner-item__title text-32">Daily Fresh Vegetables</h6>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12 wow bounceIn" data-aos="fade-up" data-aos-duration="800">
                  <div className="promotional-banner-item relative rounded-24 overflow-hidden z-[1]">
                     <img src="images/promotional-banner-img3.png" alt="Image" 
                     className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1]" />
                     <div className="promotional-banner-item__content">
                        <h6 className="promotional-banner-item__title text-32">Everyday Fresh Milk</h6>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto custom-sm:w-6/12 wow bounceIn" data-aos="fade-up" data-aos-duration="1000">
                  <div className="promotional-banner-item relative rounded-24 overflow-hidden z-[1]">
                     <img src="images/promotional-banner-img4.png" alt="Image" 
                     className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1]" />
                     <div className="promotional-banner-item__content">
                        <h6 className="promotional-banner-item__title text-32">Everyday Fresh Fruits</h6>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="flash-sales pt-80 overflow-hidden">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0 wow bounceInLeft">Flash Sales Today</h5>
                  <div className="flex items-center gap-16 wow bounceInRight">
                     <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
                     <div className="flex items-center gap-8"><button type="button" id="flash-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="flash-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
                  </div>
               </div>
            </div>
            <div className="flash-sales__slider arrow-style-two">
               <div className="" data-aos="fade-up" data-aos-duration="600">
                  <div className="flash-sales-item rounded-16 overflow-hidden z-[1] relative flex items-center flex-0 justify-between gap-8">
                     <img src="images/flash-sale-bg1.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1] flash-sales-item__bg" />
                     <div className="flash-sales-item__thumb md:block hidden"><img src="images/flash-sale-img1.png" alt="Image" /></div>
                     <div className="flash-sales-item__content ms-sm-auto">
                        <h6 className="text-32 mb-20">Fresh Vegetables</h6>
                        <div className="countdown" id="countdown1">
                           <ul className="countdown-list flex items-center flex-wrap">
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                           </ul>
                        </div>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="" data-aos="fade-up" data-aos-duration="1000">
                  <div className="flash-sales-item rounded-16 overflow-hidden z-[1] relative flex items-center flex-0 justify-between gap-8">
                     <img src="images/flash-sale-bg2.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1] flash-sales-item__bg" />
                     <div className="flash-sales-item__thumb md:block hidden"><img src="images/flash-sale-img2.png" alt="Image" /></div>
                     <div className="flash-sales-item__content ms-sm-auto">
                        <h6 className="text-32 mb-20">Daily Snacks</h6>
                        <div className="countdown" id="countdown2">
                           <ul className="countdown-list flex items-center flex-wrap">
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                           </ul>
                        </div>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="" data-aos="fade-up" data-aos-duration="1400">
                  <div className="flash-sales-item rounded-16 overflow-hidden z-[1] relative flex items-center flex-0 justify-between gap-8">
                     <img src="images/flash-sale-bg2.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 w-full h-full object-fit-cover z-[-1] flash-sales-item__bg" />
                     <div className="flash-sales-item__thumb md:block hidden"><img src="images/flash-sale-img2.png" alt="Image" /></div>
                     <div className="flash-sales-item__content ms-sm-auto">
                        <h6 className="text-32 mb-20">Daily Snacks</h6>
                        <div className="countdown" id="countdown3">
                           <ul className="countdown-list flex items-center flex-wrap">
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                           </ul>
                        </div>
                        <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 mt-24">Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="product mt-24">
         <div className="container container-lg">
            <div className="row g-4 g-12">
               
              {
               products.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
               ))
              }
            </div>
         </div>
      </div>
      <section className="offer pt-80 pb-80">
         <div className="container container-lg">
            <div className="row g-4">
               <div className="md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="600">
                  <div className="offer-card relative rounded-16 bg-main-600 overflow-hidden p-16 flex items-center gap-16 flex-wrap z-[1]">
                     <img src="ihttps://placehold.co/600x400" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full opacity-6" />
                     <div className="offer-card__thumb xl:block hidden"><img src="https://placehold.co/600x400" alt="Image" /></div>
                     <div className="2xl:py-[1.5rem]">
                        <div className="offer-card__logo mb-16 w-80 h-80 flex items-center justify-center bg-white rounded-[50%]"><img src="images/offer-logo.png" alt="Image" /></div>
                        <h4 className="text-white mb-8">$5 off your first order</h4>
                        <div className="flex items-center gap-8"><span className="text-sm text-white">Delivery by 6:15am</span> <span className="text-sm text-main-two-600">expired Aug 5</span></div>
                        <a href="shop.html" className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading font-[500] inline-flex items-center rounded-[50rem] gap-8" >Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="800">
                  <div className="offer-card relative rounded-16 bg-main-600 overflow-hidden p-16 flex items-center gap-16 flex-wrap z-[1]">
                     <img src="images/offer-shape.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full opacity-6" />
                     <div className="offer-card__thumb xl:block hidden"><img src="images/offer-img2.png" alt="Image" /></div>
                     <div className="2xl:py-[1.5rem]">
                        <div className="offer-card__logo mb-16 w-80 h-80 flex items-center justify-center bg-white rounded-[50%]"><img src="images/offer-logo.png" alt="Image" /></div>
                        <h4 className="text-white mb-8">$5 off your first order</h4>
                        <div className="flex items-center gap-8"><span className="text-sm text-white">Delivery by 6:15am</span> <span className="text-sm text-main-two-600">expired Aug 5</span></div>
                        <a href="shop.html" className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading font-[500] inline-flex items-center rounded-[50rem] gap-8" >Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     


<RecommendedProducts />














      <section className="hot-deals pt-80 overflow-hidden">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0 wow bounceInLeft">Hot Deals Todays</h5>
                  <div className="flex items-center gap-16 wow bounceInRight">
                     <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
                     <div className="flex items-center gap-8"><button type="button" id="deals-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="deals-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
                  </div>
               </div>
            </div>
            <div className="row g-12">
               <div className="lg:w-4/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in">
                  <div className="hot-deals relative rounded-16 bg-main-600 overflow-hidden p-28 z-[1] text-center" />
                     <img src="images/offer-shape.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full opacity-6" />
                     <div className="hot-deals__thumb"><img src="images/hot-deals-img.png" alt="Image" /></div>
                     <div className="2xl:py-[1.5rem]">
                        <h4 className="text-white mb-8">Fresh Vegetables</h4>
                        <div className="countdown my-32" id="countdown4">
                           <ul className="countdown-list flex items-center justify-center flex-wrap">
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="days"></span>Days</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="hours"></span>Hours</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="minutes"></span>Min</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="seconds"></span>Sec</li>
                           </ul>
                        </div>
                        <a href="shop.html" className="mt-16 btn btn-main-two font-[500] inline-flex items-center rounded-[50rem] gap-8" >Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="lg:w-8/12 flex-grow-0 flex-shrink-0 basis-auto">
                  <div className="hot-deals-slider arrow-style-two">
                     <div data-aos="fade-up" data-aos-duration="200">
                        <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                           <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img8.png" alt="Image" /></a>
                           <div className="product-card__content p-sm-2 w-full">
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Marcel's Modern Pantry Almond Unsweetened</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="product-card__content mt-12">
                                 <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                                 <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-duration="400">
                        <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                           <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img9.png" alt="Image" /></a>
                           <div className="product-card__content p-sm-2 w-full">
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">O Organics Milk, Whole, Vitamin D</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="product-card__content mt-12">
                                 <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                                 <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-duration="600">
                        <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                           <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">Best Sale </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img10.png" alt="Image" /></a>
                           <div className="product-card__content p-sm-2 w-full">
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Whole Grains and Seeds Organic Bread</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="product-card__content mt-12">
                                 <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                                 <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-duration="800">
                        <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                           <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img18.png" alt="Image" /></a>
                           <div className="product-card__content p-sm-2 w-full">
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Tropicana 100% Juice, Orange, No Pulp</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="product-card__content mt-12">
                                 <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                                 <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                           <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img9.png" alt="Image" /></a>
                           <div className="product-card__content p-sm-2 w-full">
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">O Organics Milk, Whole, Vitamin D</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="product-card__content mt-12">
                                 <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                                 <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      
      </section>
      <section className="top-vendors py-80">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0">Weekly Top Vendors</h5>
                  <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">All Vendors</a>
               </div>
            </div>
            <div className="row g-4 vendor-card-wrapper">
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="200">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo1.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Organic Market</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="400">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo2.png" alt="Image" className="vendor-card__logo m-12"/>
                        <h6 className="title mt-32">Safeway</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="600">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo3.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Food Max</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="800">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo4.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">HRmart</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="200">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo5.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Lucky Supermarket</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="400">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo6.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Arico Farmer</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="600">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo7.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Farmer Market</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="800">
                  <div className="vendor-card text-center px-16 pb-24">
                     <div className="">
                        <img src="images/vendor-logo8.png" alt="Image" className="vendor-card__logo m-12" />
                        <h6 className="title mt-32">Foodsco</h6>
                        <span className="text-heading text-sm block">Delivery by 6:15am</span> <a href="shop.html" className="btn btn-main-two rounded-[50rem] py-6 px-16 text-12 mt-8">$5 off Snack & Candy</a>
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
         </div>
      </section>
      <section className="best sells pb-80">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0 wow bounceInLeft">Daily Best Sells</h5>
               </div>
            </div>
            <div className="row g-12">
               <div className="custom-2xl:w-8/12 flex-grow-0 flex-shrink-0 basis-auto">
                  <div className="row g-4">
                     <div className="lg:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                        <div className="product-card style-two h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2 flex items-center gap-16">
                           <div className="">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/best-sell1.png" alt="Image" /></a>
                              <div className="countdown" id="countdown6">
                                 <ul className="countdown-list style-three flex items-center flex-wrap">
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-card__content">
                              <div className="product-card__price mb-16"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="mt-12">
                                 {/* <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
                                 </div> */}
                                 <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                              </div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="lg:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                        <div className="product-card style-two h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2 flex items-center gap-16">
                           <div className="">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/best-sell2.png" alt="Image" /></a>
                              <div className="countdown" id="countdown7">
                                 <ul className="countdown-list style-three flex items-center flex-wrap">
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-card__content">
                              <div className="product-card__price mb-16"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="mt-12">
                                 {/* <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
                                 </div> */}
                                 <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                              </div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="lg:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                        <div className="product-card style-two h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2 flex items-center gap-16">
                           <div className="">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/best-sell3.png" alt="Image" /></a>
                              <div className="countdown" id="countdown8">
                                 <ul className="countdown-list style-three flex items-center flex-wrap">
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-card__content">
                              <div className="product-card__price mb-16"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="mt-12">
                                 {/* <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
                                 </div> */}
                                 <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                              </div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="lg:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                        <div className="product-card style-two h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2 flex items-center gap-16">
                           <div className="">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/best-sell4.png" alt="Image" /></a>
                              <div className="countdown" id="countdown9">
                                 <ul className="countdown-list style-three flex items-center flex-wrap">
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="days"></span>Days</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="hours"></span>Hours</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="minutes"></span>Min</li>
                                    <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500]"><span className="seconds"></span>Sec</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-card__content">
                              <div className="product-card__price mb-16"><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                              <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                              <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                              <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                              <div className="mt-12">
                                 {/* <div className="progress w-full bg-color-three rounded-[50rem] h-4" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-main-600 rounded-[50rem]" style="width:35%"></div>
                                 </div> */}
                                 <span className="text-gray-900 text-xs font-[500] mt-8">Sold: 18/35</span>
                              </div>
                              <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="zoom-in" data-aos-duration="600">
                  <div className="relative rounded-16 bg-light-purple overflow-hidden p-28 z-[1] text-center">
                     <div className="">
                        <img src="images/special-snacks.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full cover-img" />
                        <div className="custom-2xl:block hidden"><img src="images/special-snacks-img.png" alt="Image" /></div>
                     </div>
                     <div className="2xl:py-[1.5rem]">
                        <h4 className="mb-8">Special Snacks</h4>
                        <div className="countdown my-32" id="countdown5">
                           <ul className="countdown-list style-two flex items-center justify-center flex-wrap">
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="days"></span>Days</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="hours"></span>Hours</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="minutes"></span>Min</li>
                              <li className="countdown-list__item text-heading flex items-center gap-4 text-sm font-[500] colon-white"><span className="seconds"></span>Sec</li>
                           </ul>
                        </div>
                        <a href="shop.html" className="mt-16 btn btn-main-two font-[500] inline-flex items-center rounded-[50rem] gap-8" >Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="delivery-section">
         <div className="container container-lg">
            <div className="delivery relative rounded-16 bg-main-600 p-16 flex items-center gap-16 flex-wrap z-[1]">
               <img src="images/delivery-bg.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full" />
               <div className="row items-center">
                  <div className="lg:w-3/12 flex-grow-0 flex-shrink-0 basis-auto lg:block hidden">
                     <div className="delivery__man text-center" data-aos="fade-down-right"><img src="images/delivery-man.png" alt="Image" /></div>
                  </div>
                  <div className="lg:w-5/12 flex-grow-0 flex-shrink-0 basis-auto md:w-7/12 flex-grow-0 flex-shrink-0 basis-auto">
                     <div className="text-center">
                        <h4 className="text-white mb-8" data-aos="fade-down">We Delivery on Next Day from 10:00 AM to 08:00 PM</h4>
                        <p className="text-white" data-aos="zoom-in">For Orders starts from $100</p>
                        <a href="shop.html" className="mt-16 btn btn-main-two font-[500] inline-flex items-center rounded-[50rem] gap-8" data-aos="fade-up" >Shop Now <span className="icon text-xl flex"><i className="ph ph-arrow-right"></i></span></a>
                     </div>
                  </div>
                  <div className="lg:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-5/12 flex-grow-0 flex-shrink-0 basis-auto md:block hidden" data-aos="zoom-out" data-aos-duration="800"><img src="images/special-snacks-img.png" alt="Image" /></div>
               </div>
            </div>
         </div>
      </div>
      <section className="organic-food py-80 overflow-hidden">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0 wow bounceInLeft">Organic Food</h5>
                  <div className="flex items-center gap-16 wow bounceInRight">
                     <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">All Categories</a>
                     <div className="flex items-center gap-8"><button type="button" id="organic-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="organic-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
                  </div>
               </div>
            </div>
            <div className="organic-food__slider arrow-style-two">
               <div data-aos="fade-up" data-aos-duration="200">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img20.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="400">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img21.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="600">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img22.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="800">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img23.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img24.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1200">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img25.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1400">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img21.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="short-product">
         <div className="container container-lg">
            <div className="row g-4">
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                  <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <div className="p-16 bg-main-50 rounded-16 mb-32">
                        <h6 className="underlined-line relative mb-0 pb-16 inline-block">Featured Products</h6>
                     </div>
                     <div className="short-product-list arrow-style-two">
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img1.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img2.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img3.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img1.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img2.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img3.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                  <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <div className="p-16 bg-main-50 rounded-16 mb-32">
                        <h6 className="underlined-line relative mb-0 pb-16 inline-block">Top Selling Products</h6>
                     </div>
                     <div className="short-product-list arrow-style-two">
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img5.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img6.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img8.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img5.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img6.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img8.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                  <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <div className="p-16 bg-main-50 rounded-16 mb-32">
                        <h6 className="underlined-line relative mb-0 pb-16 inline-block">On-sale Products</h6>
                     </div>
                     <div className="short-product-list arrow-style-two">
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img9.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img9.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img4.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                  <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <div className="p-16 bg-main-50 rounded-16 mb-32">
                        <h6 className="underlined-line relative mb-0 pb-16 inline-block">Top Rated Products</h6>
                     </div>
                     <div className="short-product-list arrow-style-two">
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img3.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img1.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img8.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img1.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img7.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16 mb-40">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img3.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                           <div className="flex items-center gap-16">
                              <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0"><a href="product-details.html" className="link"><img src="images/short-product-img8.png" alt="Image" /></a></div>
                              <div className="product-card__content mt-12">
                                 <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                                 <h6 className="title text-lg font-[600] mt-8 mb-8"><a href="product-details.html" className="link text-line-1">Taylor Farms Broccoli Florets Vegetables</a></h6>
                                 <div className="product-card__price flex items-center gap-8"><span className="text-heading text-md font-[600] block">$1500.00</span> <span className="text-gray-400 text-md font-[600] block">$1500.00</span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="brand py-80 overflow-hidden">
         <div className="container container-lg">
            <div className="brand-inner bg-color-one p-24 rounded-16">
               <div className="section-heading">
                  <div className="flex-between flex-wrap gap-8">
                     <h5 className="mb-0 wow bounceInLeft">Shop by Brands</h5>
                     <div className="flex items-center gap-16 wow bounceInRight">
                        <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
                        <div className="flex items-center gap-8"><button type="button" id="brand-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="brand-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
                     </div>
                  </div>
               </div>
               <div className="brand-slider arrow-style-two">
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="200">
                    <img src="images/brand-img1.png" alt="Image" />
                    </div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="400"><img src="images/brand-img2.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="600"><img src="images/brand-img3.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="800"><img src="images/brand-img4.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="1000"><img src="images/brand-img5.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="1200"><img src="images/brand-img6.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="1400"><img src="images/brand-img7.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="1600"><img src="images/brand-img8.png" alt="Image" /></div>
                  <div className="brand-item" data-aos="zoom-in" data-aos-duration="1800"><img src="images/brand-img3.png" alt="Image" /></div>
               </div>
            </div>
         </div>
      </div>
      <section className="new-arrival pb-80">
         <div className="container container-lg">
            <div className="section-heading">
               <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0">New Arrivals</h5>
                  <div className="flex items-center gap-16">
                     <a href="shop.html" className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</a>
                     <div className="flex items-center gap-8"><button type="button" id="new-arrival-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="new-arrival-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
                  </div>
               </div>
            </div>
            <div className="new-arrival__slider arrow-style-two">
               <div data-aos="fade-up" data-aos-duration="200">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img20.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="400">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img21.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="600">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img22.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="800">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img23.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img24.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1200">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img25.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1400">
                  <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                     <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img21.png" alt="Image" /></a>
                     <div className="product-card__content mt-12">
                        <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-500">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-500">(17k)</span></div>
                        <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                        <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                        <div className="flex-between gap-8 mt-24 flex-wrap">
                           <div className="product-card__price"><span className="text-gray-400 text-md font-[600] text-decoration-line-through block">$28.99</span> <span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span></span></div>
                           <a href="cart.html" className="product-card__cart btn btn-main py-11 px-24 rounded-[50rem] flex items-center gap-8">Add <i className="fluent--chat-20-regular"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="shipping mb-24" id="shipping">
         <div className="container container-lg">
            <div className="row g-4">
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12" data-aos="zoom-in" data-aos-duration="400">
                  <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                     <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-car-profile"></i></span>
                     <div className="">
                        <h6 className="mb-0">Free Shipping</h6>
                        <span className="text-sm text-heading">Free shipping all over the US</span>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12" data-aos="zoom-in" data-aos-duration="600">
                  <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                     <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-hand-heart"></i></span>
                     <div className="">
                        <h6 className="mb-0">100% Satisfaction</h6>
                        <span className="text-sm text-heading">Free shipping all over the US</span>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12" data-aos="zoom-in" data-aos-duration="800">
                  <div className="shipping-item flex items-center gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                     <span className="w-56 h-56 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-32 flex-shrink-0"><i className="ph-fill ph-credit-card"></i></span>
                     <div className="">
                        <h6 className="mb-0">Secure Payments</h6>
                        <span className="text-sm text-heading">Free shipping all over the US</span>
                     </div>
                  </div>
               </div>
               <div className="custom-2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-6/12" data-aos="zoom-in" data-aos-duration="1000">
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
    );
}
