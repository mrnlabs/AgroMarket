import React from 'react'

function NewsLetter() {
  return (
    <>
       <div className="newsletter">
         <div className="container container-lg">
            <div className="newsletter-box relative rounded-16 flex items-center gap-16 flex-wrap z-[1]">
               <img src="images/newsletter-bg.png" alt="Image" className="absolute inset-block-start-0 inset-inline-start-0 z-[-1] w-full h-full opacity-6" />
               <div className="row items-center">
                  <div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
                     <div className="">
                        <h1 className="text-white mb-12 wow fadeInUp">Don't Miss Out on Grocery Deals</h1>
                        <p className="text-white h5 mb-0 wow fadeInUp">SING UP FOR THE UPDATE NEWSLETTER</p>
                        <form action="#" className="relative mt-40 wow fadeInUp">
                            <input className="form-control block w-full p-[0.375rem_0.75rem] text-base leading-6 placeholder:text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-all duration-150 ease-in-out focus:text-[#495057] focus:bg-white focus:border-main focus:outline-0 focus:shadow-none common-input !rounded-[50rem] text-white py-22 px-16 pe-144" placeholder="Your email address..." /> 
                            <button type="submit" className="btn btn-main-two !rounded-[50rem] !absolute top-[50%] translate-y-[-50%] right-0 mr-[10px]">Subscribe</button></form>
                     </div>
                  </div>
                  <div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto text-center xl:block hidden">
                  <img src="images/newsletter-img.png" alt="Image" className="wow fadeInUp" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default NewsLetter