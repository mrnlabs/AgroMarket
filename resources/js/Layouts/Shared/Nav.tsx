import React from 'react'

const Nav = () => {
  return (
    <>
       <form action="#" className="search-box">
         <button type="button" className="search-box__close absolute inset-block-start-0 right-0 m-16 w-48 h-48 border border-gray-100 rounded-[50%] flex items-center justify-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"><i className="ph ph-x"></i></button>
         <div className="container">
            <div className="relative">
                <input className="form-control block w-full p-[0.375rem_0.75rem] leading-6 text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-all duration-150 ease-in-out focus:text-[#495057] focus:bg-white focus:border-main focus:outline-0 focus:shadow-none py-16 px-24 text-xl rounded-[50rem] pe-64 h-[64px]" placeholder="Search for a product or brand" /> <button type="submit" className="w-48 h-48 bg-main-600 rounded-[50%] flex items-center justify-center text-xl text-white absolute top-[50%] translate-y-[-50%] right-0 me-8"><i className="ph ph-magnifying-glass"></i></button></div>
         </div>
      </form>
      <div className="mobile-menu scroll-sm xl:hidden block">
         <button type="button" className="close-button"><i className="ph ph-x"></i></button>
         <div className="mobile-menu__inner">
            <a href="index.html" className="mobile-menu__logo">
                <img src="images/logo.png" alt="Logo" /></a>
            <div className="mobile-menu__menu">
               <ul className="nav-menu flex items-center nav-menu--mobile">
                  <li className="on-hover-item nav-menu__item has-submenu activePage">
                     <a href="#!" className="nav-menu__link">Home</a>
                     <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        <li className="common-dropdown__item nav-submenu__item activePage"><a href="index.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Grocery</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="index-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Electronics</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="index-three.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Fashion</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                     <a href="#!" className="nav-menu__link">Shop</a>
                     <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        <li className="common-dropdown__item nav-submenu__item"><a href="shop.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="product-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop Details</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="product-details-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop Details Two</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                     <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">New</span> <a href="#!" className="nav-menu__link">Pages</a>
                     <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        <li className="common-dropdown__item nav-submenu__item"><a href="cart.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Cart</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="wishlist.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Wishlist</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="checkout.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Checkout</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="become-seller.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Become Seller</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="account.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Account</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                     <span className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">New</span> <a href="#!" className="nav-menu__link">Vendors</a>
                     <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        <li className="common-dropdown__item nav-submenu__item"><a href="vendor.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="vendor-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendor Details</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="vendor-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors Two</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="vendor-two-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors Two Details</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                     <a href="#!" className="nav-menu__link">Blog</a>
                     <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        <li className="common-dropdown__item nav-submenu__item"><a href="blog.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Blog</a></li>
                        <li className="common-dropdown__item nav-submenu__item"><a href="blog-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Blog Details</a></li>
                     </ul>
                  </li>
                  <li className="nav-menu__item">
                     <a href="contact.html" className="nav-menu__link">Contact Us</a></li>
               </ul>
            </div>
         </div>
      </div>
      <div className="header-top bg-main-600 flex-between">
         <div className="container container-lg">
            <div className="flex-between flex-wrap gap-8">
               <ul className="flex items-center flex-wrap hidden lg:flex">
                  <li className="border-right-item"><a href="#shipping" className="text-white text-sm hover-text-decoration-underline">Become A Seller</a></li>
                  <li className="border-right-item"><a href="#shipping" className="text-white text-sm hover-text-decoration-underline">About us</a></li>
                  <li className="border-right-item"><a href="#shipping" className="text-white text-sm hover-text-decoration-underline">Free Delivery</a></li>
                  <li className="border-right-item"><a href="#shipping" className="text-white text-sm hover-text-decoration-underline">Returns Policy</a></li>
               </ul>
               <ul className="header-top__right flex items-center flex-wrap">
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                     <a href="#!" className="text-white text-sm py-8">Help Center</a>
                     <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                        <li className="nav-submenu__item"><a href="index.html" className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><span className="text-sm flex"><i className="ph ph-headset"></i></span> Call Center</a></li>
                        <li className="nav-submenu__item"><a href="index.html" className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><span className="text-sm flex"><i className="ph ph-chat-circle-dots"></i></span> Live Chat</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                     <a href="#!" className="selected-text text-white text-sm py-8">Eng</a>
                     <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag1.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> English</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag2.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> Japan</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag3.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> French</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag4.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> Germany</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag6.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> Bangladesh</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag5.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> South Korea</a></li>
                     </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                     <a href="#!" className="selected-text text-white text-sm py-8">USD</a>
                     <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag1.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> USD</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag2.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> Yen</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag3.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> Franc</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag4.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> EURO</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag6.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> BDT</a></li>
                        <li><a href="#!" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex items-center gap-8 rounded-none"><img src="images/flag5.png" alt="Image" className="w-16 h-12 rounded-4 border border-gray-100" /> WON</a></li>
                     </ul>
                  </li>
                  <li className="border-right-item"><a href="account.html" className="text-white text-sm py-8 flex items-center gap-6"><span className="icon text-md flex"><i className="ph ph-user-circle"></i> </span><span className="hover-text-decoration-underline">My Account</span></a></li>
               </ul>
            </div>
         </div>
      </div>
      <header className="header-middle bg-color-one border-b border-gray-100">
         <div className="container container-lg">
            <nav className="header-inner flex-between">
               <div className="logo"><a href="index.html" className="link">
                <img src="images/logo.png" alt="Logo" /></a></div>
               <form action="#" className="flex items-center flex-wrap form-location-wrapper">
                  <div className="search-category flex h-48 select-border-r-0 radius-end-0 search-form md:flex hidden">
                     <select className="js-example-basic-single border border-gray-200 border-r-0" name="state">
                        <option value="1">All Categories</option>
                        <option value="1">Grocery</option>
                        <option value="1">Breakfast & Dairy</option>
                        <option value="1">Vegetables</option>
                        <option value="1">Milks and Dairies</option>
                        <option value="1">Pet Foods & Toy</option>
                        <option value="1">Breads & Bakery</option>
                        <option value="1">Fresh Seafood</option>
                        <option value="1">Fronzen Foods</option>
                        <option value="1">Noodles & Rice</option>
                        <option value="1">Ice Cream</option>
                     </select>
                     <div className="search-form__wrapper relative">
                        <input className="search-form__input common-input py-13 ps-16 pe-18 !rounded-tr-[50rem] !rounded-br-[50rem] pe-44" placeholder="Search for a product or brand" /> <button type="submit" className="w-32 h-32 bg-main-600 rounded-[50%] flex items-center justify-center text-xl text-white absolute top-[50%] translate-y-[-50%] right-0 me-8"><i className="ph ph-magnifying-glass"></i></button></div>
                  </div>
                  <div className="location-box bg-white flex items-center gap-8 py-6 px-16 rounded-[50rem] border border-gray-100">
                     <span className="text-gray-900 text-xl sm:flex hidden"><i className="ph ph-map-pin"></i></span>
                     <div className="line-height-1">
                        <span className="text-gray-600 text-xs">Your Location</span>
                        <div className="line-height-1">
                           <select className="js-example-basic-single border border-gray-200 border-r-0" name="state">
                              <option value="1">Alabama</option>
                              <option value="1">Alaska</option>
                              <option value="1">Arizona</option>
                              <option value="1">Delaware</option>
                              <option value="1">Florida</option>
                              <option value="1">Georgia</option>
                              <option value="1">Hawaii</option>
                              <option value="1">Indiana</option>
                              <option value="1">Marzland</option>
                              <option value="1">Nevada</option>
                              <option value="1">New Jersey</option>
                              <option value="1">New Mexico</option>
                              <option value="1">New York</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </form>
               <div className="header-right items-center xl:block hidden">
                  <div className="flex items-center flex-wrap gap-12"><button type="button" className="search-icon flex items-center xl:hidden flex gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative item-hover__text"><i className="ph ph-magnifying-glass"></i></span></button> <a href="cart.html" className="flex items-center gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative me-6 mt-6 item-hover__text"><i className="ph ph-heart"></i> <span className="w-16 h-16 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-xs absolute top-n6 end-n4">2</span> </span><span className="text-md text-gray-500 item-hover__text hidden xl:flex">Wishlist</span> </a><a href="cart.html" className="flex items-center gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative me-6 mt-6 item-hover__text"><i className="fluent--chat-20-regular-simple"></i> <span className="w-16 h-16 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-xs absolute top-n6 end-n4">2</span> </span><span className="text-md text-gray-500 item-hover__text hidden xl:flex">Cart</span></a></div>
               </div>
            </nav>
         </div>
      </header>
      <header className="header bg-white border-b border-gray-100">
         <div className="container container-lg">
            <nav className="header-inner flex justify-between gap-8">
               <div className="flex items-center menu-category-wrapper">
                  <div className="category on-hover-item">
                     <button type="button" className="category__button flex items-center gap-8 font-[500] p-16 border-r border-l border-gray-100 text-heading"><span className="icon text-2xl sm:flex hidden"><i className="ph ph-dots-nine"></i></span> <span className="md:flex hidden">All</span> Categories <span className="arrow-icon text-xl flex"><i className="ph ph-caret-down"></i></span></button>
                     <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
                        <button type="button" className="close-responsive-dropdown rounded-[50%] text-xl absolute right-0 inset-block-start-0 mt-4 me-8 xl:hidden flex"><i className="ph ph-x"></i></button>
                        <div className="logo px-16 xl:hidden block"><a href="index.html" className="link"><img src="images/logo.png" alt="Logo" /></a></div>
                        <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-carrot"></i></span> <span>Vegetables &amp; Fruit</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Vegetables &amp; Fruit</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Potato &amp; Tomato</a></li>
                                    <li><a href="shop.html">Cucumber &amp; Capsicum</a></li>
                                    <li><a href="shop.html">Leafy Vegetables</a></li>
                                    <li><a href="shop.html">Root Vegetables</a></li>
                                    <li><a href="shop.html">Beans &amp; Okra</a></li>
                                    <li><a href="shop.html">Cabbage &amp; Cauliflower</a></li>
                                    <li><a href="shop.html">Gourd &amp; Drumstick</a></li>
                                    <li><a href="shop.html">Specialty</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Beverages</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Beverages</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Soda & Cocktail Mix</a></li>
                                    <li><a href="shop.html">Sports & Energy Drinks</a></li>
                                    <li><a href="shop.html">Non Alcoholic Drinks</a></li>
                                    <li><a href="shop.html">Packaged Water</a></li>
                                    <li><a href="shop.html">Spring Water</a></li>
                                    <li><a href="shop.html">Flavoured Water</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Meats & Seafood</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Meats & Seafood</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Fresh Meat</a></li>
                                    <li><a href="shop.html">Frozen Meat</a></li>
                                    <li><a href="shop.html">Marinated Meat</a></li>
                                    <li><a href="shop.html">Fresh & Frozen Meat</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Breakfast & Dairy</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Breakfast & Dairy</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Oats & Porridge</a></li>
                                    <li><a href="shop.html">Kids Cereal</a></li>
                                    <li><a href="shop.html">Muesli</a></li>
                                    <li><a href="shop.html">Flakes</a></li>
                                    <li><a href="shop.html">Granola & Cereal Bars</a></li>
                                    <li><a href="shop.html">Instant Noodles</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Frozen Foods</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Frozen Foods</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Instant Noodles</a></li>
                                    <li><a href="shop.html">Hakka Noodles</a></li>
                                    <li><a href="shop.html">Cup Noodles</a></li>
                                    <li><a href="shop.html">Vermicelli</a></li>
                                    <li><a href="shop.html">Instant Pasta</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Biscuits & Snacks</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Biscuits & Snacks</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Salted Biscuits</a></li>
                                    <li><a href="shop.html">Marie, Health, Digestive</a></li>
                                    <li><a href="shop.html">Cream Biscuits & Wafers</a></li>
                                    <li><a href="shop.html">Glucose & Milk biscuits</a></li>
                                    <li><a href="shop.html">Cookies</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="has-submenus-submenu">
                              <a href="#!" className="text-gray-500 text-15 py-12 px-16 flex items-center gap-8 rounded-none"><span className="text-xl flex"><i className="ph ph-brandy"></i></span> <span>Grocery & Staples</span> <span className="icon text-md flex ms-auto"><i className="ph ph-caret-right"></i></span></a>
                              <div className="submenus-submenu py-16">
                                 <h6 className="text-lg px-16 submenus-submenu__title">Grocery & Staples</h6>
                                 <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                    <li><a href="shop.html">Lemon, Ginger & Garlic</a></li>
                                    <li><a href="shop.html">Indian & Exotic Herbs</a></li>
                                    <li><a href="shop.html">Orangic Vegetables</a></li>
                                    <li><a href="shop.html">Orangic Fruits</a></li>
                                    <li><a href="shop.html">Orangic Dry Fruits</a></li>
                                    <li><a href="shop.html">Orangic Dals & pulses</a></li>
                                    <li><a href="shop.html">Orangic Millet & Flours</a></li>
                                 </ul>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="header-menu xl:block hidden">
                     <ul className="nav-menu flex items-center">
                        <li className="on-hover-item nav-menu__item has-submenu activePage">
                           <a href="#!" className="nav-menu__link">Home</a>
                           <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item activePage"><a href="index.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Grocery</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="index-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Electronics</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="index-three.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Home Fashion</a></li>
                           </ul>
                        </li>
                        <li className="on-hover-item nav-menu__item has-submenu">
                           <a href="#!" className="nav-menu__link">Shop</a>
                           <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item"><a href="shop.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="product-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop Details</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="product-details-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Shop Details Two</a></li>
                           </ul>
                        </li>
                        <li className="on-hover-item nav-menu__item has-submenu">
                           <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">New</span> <a href="#!" className="nav-menu__link">Pages</a>
                           <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item"><a href="cart.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Cart</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="wishlist.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Wishlist</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="checkout.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Checkout</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="become-seller.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Become Seller</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="account.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Account</a></li>
                           </ul>
                        </li>
                        <li className="on-hover-item nav-menu__item has-submenu">
                           <span className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">New</span> <a href="#!" className="nav-menu__link">Vendors</a>
                           <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item"><a href="vendor.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="vendor-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendor Details</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="vendor-two.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors Two</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="vendor-two-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Vendors Two Details</a></li>
                           </ul>
                        </li>
                        <li className="on-hover-item nav-menu__item has-submenu">
                           <a href="#!" className="nav-menu__link">Blog</a>
                           <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item"><a href="blog.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Blog</a></li>
                              <li className="common-dropdown__item nav-submenu__item"><a href="blog-details.html" className="common-dropdown__link nav-submenu__link hover-bg-neutral-100">Blog Details</a></li>
                           </ul>
                        </li>
                        <li className="nav-menu__item"><a href="contact.html" className="nav-menu__link">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="header-right flex items-center">
                  <a href="tel:01234567890" className="bg-main-600 text-white p-12 h-full hover-bg-main-800 flex items-center gap-8 text-lg xl:flex hidden">
                     <div className="flex text-32"><i className="ph ph-phone-call"></i></div>
                     01- 234 567 890
                  </a>
                  <div className="me-16 xl:hidden block">
                     <div className="flex items-center flex-wrap gap-12"><button type="button" className="search-icon flex items-center xl:hidden flex gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative item-hover__text"><i className="ph ph-magnifying-glass"></i></span></button> <a href="cart.html" className="flex items-center gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative me-6 mt-6 item-hover__text"><i className="ph ph-heart"></i> <span className="w-16 h-16 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-xs absolute top-n6 end-n4">2</span> </span><span className="text-md text-gray-500 item-hover__text hidden xl:flex">Wishlist</span> </a><a href="cart.html" className="flex items-center gap-4 item-hover"><span className="text-2xl text-gray-700 flex relative me-6 mt-6 item-hover__text"><i className="fluent--chat-20-regular-simple"></i> <span className="w-16 h-16 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-xs absolute top-n6 end-n4">2</span> </span><span className="text-md text-gray-500 item-hover__text hidden xl:flex">Cart</span></a></div>
                  </div>
                  <button type="button" className="toggle-mobileMenu xl:hidden ms-3n text-gray-800 text-4xl flex"><i className="ph ph-list"></i></button>
               </div>
            </nav>
         </div>
      </header>

    </>
  )
}

export default Nav