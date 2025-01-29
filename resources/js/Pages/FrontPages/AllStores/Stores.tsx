import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
interface Store {
  // Define the properties of a store here
  id: number;
  name: string;
   description: string;
   image: string;
   location: string;

 
}

interface StoresProps {
  stores: Store[];
}

const Stores: React.FC<StoresProps> = ({ stores }) => {
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
            {
              stores.data.map((store) => (
                <div className="custom-2xl:w-2/12 flex-grow-0 flex-shrink-0 basis-auto 2xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto xl:w-4/12 flex-grow-0 flex-shrink-0 basis-auto">
                  <div className="vendor-card style-two text-center px-16 pb-24 bg-main-50">
                     <img src="images/vendor-logo2.png" alt="Image" className="vendor-card__logo m-12" />
                     <h6 className="title mt-32">{store.name}</h6>
                     <span className="text-neutral-600 text-sm block font-[600]">{store.location}</span>
                     <span className="bg-white text-neutral-900 rounded-[50rem] py-6 px-16 text-12 mt-8">{store.description}</span>
                     <p className="text-neutral-600 my-24">It's easy and free to link or sign up for our loyalty program, and it only takes a few seconds.</p>
                     <ul className="flex items-center justify-center gap-8 flex-wrap">
                        <li><a href="vendor-single.html" className="btn btn-main btn-wide">View Vendor</a></li>
                        <li><a href="vendor-single.html" className="btn btn-outline btn-wide">Add to Favourites</a></li>
                     </ul>
                  </div>
               </div>
              ))
            }
          
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
   
</GuestLayout>
)
}
export default Stores