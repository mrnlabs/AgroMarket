import React from 'react'

const RecommendedProducts = () => {
  return (
    <section className="recommended overflow-hidden">
    <div className="container container-lg">
       <div className="section-heading flex-between flex-wrap gap-16">
          <h5 className="mb-0 wow bounceInLeft">Recommended for you</h5>
          <ul className="nav common-tab nav-pills wow bounceInRight" id="pills-tab" role="tablist">
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr active" data-target="#pills-all" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-grocery" id="pills-grocery-tab" data-bs-toggle="pill" data-bs-target="#pills-grocery" type="button" role="tab" aria-controls="pills-grocery" aria-selected="false">Grocery</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-fruits" id="pills-fruits-tab" data-bs-toggle="pill" data-bs-target="#pills-fruits" type="button" role="tab" aria-controls="pills-fruits" aria-selected="false">Fruits</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-juices" id="pills-juices-tab" data-bs-toggle="pill" data-bs-target="#pills-juices" type="button" role="tab" aria-controls="pills-juices" aria-selected="false">Juices</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-vegetables" id="pills-vegetables-tab" data-bs-toggle="pill" data-bs-target="#pills-vegetables" type="button" role="tab" aria-controls="pills-vegetables" aria-selected="false">Vegetables</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-snacks" id="pills-snacks-tab" data-bs-toggle="pill" data-bs-target="#pills-snacks" type="button" role="tab" aria-controls="pills-snacks" aria-selected="false">Snacks</button></li>
             <li className="nav-item" role="presentation"><button className="nav-link bt-tb-btn-pr" data-target="#pills-organic" id="pills-organic-tab" data-bs-toggle="pill" data-bs-target="#pills-organic" type="button" role="tab" aria-controls="pills-organic" aria-selected="false">Organic Foods</button></li>
          </ul>
       </div>
       <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane bt-pane-pr fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-grocery" role="tabpanel" aria-labelledby="pills-grocery-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-fruits" role="tabpanel" aria-labelledby="pills-fruits-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-juices" role="tabpanel" aria-labelledby="pills-juices-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-vegetables" role="tabpanel" aria-labelledby="pills-vegetables-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-snacks" role="tabpanel" aria-labelledby="pills-snacks-tab" >
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
          <div className="tab-pane bt-pane-pr fade" id="pills-organic" role="tabpanel" aria-labelledby="pills-organic-tab">
             <div className="row g-12">
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img7.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
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
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img11.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Lucerne Yogurt, Lowfat, Strawberry</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img12.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Nature Valley Whole Grain Oats and Honey Protein</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="200">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img13.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="400">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img14.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="600">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span> <a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img15.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">C-500 Antioxidant Protect Dietary Supplement</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="800">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img16.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Good & Gather Farmed Atlantic Salmon</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1000">
                   <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50% </span><a href="product-details.html" className="product-card__thumb flex items-center justify-center"><img src="images/product-img17.png" alt="Image" /></a>
                      <div className="product-card__content p-sm-2 w-full">
                         <h6 className="title text-lg font-[600] mt-12 mb-8"><a href="product-details.html" className="link text-line-2">Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp</a></h6>
                         <div className="flex items-center gap-4"><span className="text-main-600 text-md flex"><i className="ph-fill ph-storefront"></i></span> <span className="text-gray-500 text-xs">By Lucky Supermarket</span></div>
                         <div className="product-card__content mt-12">
                            <div className="product-card__price mb-8"><span className="text-heading text-md font-[600]">$14.99 <span className="text-gray-500 font-normal">/Qty</span> </span><span className="text-gray-400 text-md font-[600] text-decoration-line-through">$28.99</span></div>
                            <div className="flex items-center gap-6"><span className="text-xs font-[700] text-gray-600">4.8</span> <span className="text-15 font-[700] text-warning-600 flex"><i className="ph-fill ph-star"></i></span> <span className="text-xs font-[700] text-gray-600">(17k)</span></div>
                            <a href="cart.html" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center">Contact <i className="fluent--chat-20-regular"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto md:w-4/12 flex-grow-0 flex-shrink-0 basis-auto w-6/12 flex-grow-0 flex-shrink-0 basis-auto" data-aos="fade-up" data-aos-duration="1200">
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
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default RecommendedProducts