import React from 'react'
import bannerbg from '../../frontend-assets/images/banner-bg.png'
import bannerimg1 from '../../frontend-assets/images/banner-img1.png'
import bannerimg2 from '../../frontend-assets/images/banner-bg2.png'
import bannerimg3 from '../../frontend-assets/images/banner-img3.png'
import NewsLetter from '@/Layouts/Shared/NewsLetter';

function Slider() {
  return (
   
    <div className="banner">
    <div className="container container-lg">
       <div className="banner-item rounded-24 overflow-hidden relative arrow-center">
          <a href="#featureSection" className="scroll-down w-84 h-84 text-center flex items-center justify-center bg-main-600 rounded-[50%] border border-5 text-white border-white !absolute left-[50%] translate-x-[-50%] bottom-0 hover-bg-main-800"><span className="icon line-height-0"><i className="ph ph-caret-double-down"></i></span> </a>
          <img src={bannerbg} alt="Image" className="banner-img absolute inset-block-start-0 inset-inline-start-0 w-full h-full z-[-1] object-fit-cover rounded-24" />
          <div className="flex items-center"><button type="button" id="banner-prev" className="slick-prev slick-arrow flex items-center justify-center rounded-[50%] bg-white text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-left"></i></button> <button type="button" id="banner-next" className="slick-next slick-arrow flex items-center justify-center rounded-[50%] bg-white text-xl hover-bg-main-600 hover-text-white transition-1"><i className="ph ph-caret-right"></i></button></div>
          <div className="banner-slider">
             <div className="banner-slider__item">
                <div className="banner-slider__inner flex-between relative">
                   <div className="banner-item__content">
                      <h1 className="banner-item__title wow bounceInDown" data-wow-duration="1s">Daily Grocery Order and Get Express Delivery</h1>
                      <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 wow bounceInUp" data-wow-duration="1s">Explore Shop <span className="icon text-xl flex"><i className="fluent--chat-20-regular-simple"></i></span></a>
                   </div>
                   <div className="banner-item__thumb wow bounceIn" data-wow-duration="1s" data-tilt data-tilt-max="12" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-scale="1.06"><img src={bannerimg1} alt="Image" /></div>
                </div>
             </div>
             <div className="banner-slider__item">
                <div className="banner-slider__inner flex-between relative">
                   <div className="banner-item__content">
                      <h1 className="banner-item__title wow bounceInDown" data-wow-duration="1s">Daily Grocery Order and Get Express Delivery</h1>
                      <a href="shop.html" className="btn btn-main inline-flex items-center rounded-[50rem] gap-8 wow bounceIn" data-wow-duration="1s">Explore Shop <span className="icon text-xl flex"><i className="fluent--chat-20-regular-simple"></i></span></a>
                   </div>
                   <div className="banner-item__thumb wow bounceIn" data-wow-duration="1s" data-tilt data-tilt-max="12" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-scale="1.06"><img src={bannerimg3} alt="Image" /></div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Slider