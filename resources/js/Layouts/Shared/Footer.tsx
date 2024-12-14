import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="footer py-120">
         <img src="images/body-bottom-bg.png" alt="BG" className="body-bottom-bg" />
         <div className="container container-lg">
            <div className="footer-item-wrapper flex items-start flex-wrap">
               <div className="footer-item" data-aos="fade-up" data-aos-duration="200">
                  <div className="footer-item__logo"><a href="index.html"><img src="images/logo.png" alt="Image" /></a></div>
                  <p className="mb-24">We're Grocery Shop, an innovative team of food supliers.</p>
                  <div className="flex items-center gap-16 mb-16"><span className="w-32 h-32 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-md flex-shrink-0"><i className="ph-fill ph-map-pin"></i></span> <span className="text-md text-gray-900">789 Inner Lane, Biyes park, California, USA</span></div>
                  <div className="flex items-center gap-16 mb-16">
                     <span className="w-32 h-32 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-md flex-shrink-0"><i className="ph-fill ph-phone-call"></i></span>
                     <div className="flex items-center gap-16 flex-wrap"><a href="tel:+00123456789" className="text-md text-gray-900 hover-text-main-600">+00 123 456 789</a> <span className="text-md text-main-600">or</span> <a href="tel:+00987654012" className="text-md text-gray-900 hover-text-main-600">+00 987 654 012</a></div>
                  </div>
                  <div className="flex items-center gap-16 mb-16"><span className="w-32 h-32 flex items-center justify-center rounded-[50%] bg-main-600 text-white text-md flex-shrink-0"><i className="ph-fill ph-envelope"></i></span> <a href="mailto:support24@marketpro.com" className="text-md text-gray-900 hover-text-main-600">support24@marketpro.com</a></div>
               </div>
               <div className="footer-item" data-aos="fade-up" data-aos-duration="400">
                  <h6 className="footer-item__title">Information</h6>
                  <ul className="footer-menu">
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Become a Vendor</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Affiliate Program</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Privacy Policy</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Our Suppliers</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Extended Plan</a></li>
                     <li className=""><a href="shop.html" className="text-gray-600 hover-text-main-600">Community</a></li>
                  </ul>
               </div>
               <div className="footer-item" data-aos="fade-up" data-aos-duration="600">
                  <h6 className="footer-item__title">Customer Support</h6>
                  <ul className="footer-menu">
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Help Center</a></li>
                     <li className="mb-16"><a href="contact.html" className="text-gray-600 hover-text-main-600">Contact Us</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Report Abuse</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Submit and Dispute</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Policies & Rules</a></li>
                     <li className=""><a href="shop.html" className="text-gray-600 hover-text-main-600">Online Shopping</a></li>
                  </ul>
               </div>
               <div className="footer-item" data-aos="fade-up" data-aos-duration="800">
                  <h6 className="footer-item__title">My Account</h6>
                  <ul className="footer-menu">
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">My Account</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Order History</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Shoping Cart</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Compare</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Help Ticket</a></li>
                     <li className=""><a href="shop.html" className="text-gray-600 hover-text-main-600">Wishlist</a></li>
                  </ul>
               </div>
               <div className="footer-item" data-aos="fade-up" data-aos-duration="1000">
                  <h6 className="footer-item__title">Daily Groceries</h6>
                  <ul className="footer-menu">
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Dairy & Eggs</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Meat & Seafood</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Breakfast Food</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Household Supplies</a></li>
                     <li className="mb-16"><a href="shop.html" className="text-gray-600 hover-text-main-600">Bread & Bakery</a></li>
                     <li className=""><a href="shop.html" className="text-gray-600 hover-text-main-600">Pantry Staples</a></li>
                  </ul>
               </div>
               <div className="footer-item" data-aos="fade-up" data-aos-duration="1200">
                  <h6 className="">Shop on The Go</h6>
                  <p className="mb-16">Marketpro App is available. Get it now</p>
                  <div className="flex items-center gap-8 my-32"><a href="https://www.apple.com/store" className=""><img src="images/store-img1.png" alt="Image" /> </a><a href="https://play.google.com/store/apps?hl=en" className=""><img src="images/store-img2.png" alt="Image" /></a></div>
                  <ul className="flex items-center gap-16">
                     <li><a href="https://www.facebook.com/" className="w-44 h-44 flex items-center justify-center bg-main-100 text-main-600 text-xl rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-facebook-logo"></i></a></li>
                     <li><a href="https://www.twitter.com/" className="w-44 h-44 flex items-center justify-center bg-main-100 text-main-600 text-xl rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-twitter-logo"></i></a></li>
                     <li><a href="https://www.linkedin.com/" className="w-44 h-44 flex items-center justify-center bg-main-100 text-main-600 text-xl rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-instagram-logo"></i></a></li>
                     <li><a href="https://www.pinterest.com/" className="w-44 h-44 flex items-center justify-center bg-main-100 text-main-600 text-xl rounded-[50%] hover-bg-main-600 hover-text-white"><i className="ph-fill ph-linkedin-logo"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
      <div className="bottom-footer bg-color-one py-8">
         <div className="container container-lg">
            <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
               <p className="bottom-footer__text wow fadeInLeftBig">Marketpro eCommerce &copy; 2024. All Rights Reserved</p>
               <div className="flex items-center gap-8 flex-wrap wow fadeInRightBig"><span className="text-heading text-sm">We Are Accepting</span> <img src="images/payment-method.png" alt="Image" /></div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Footer