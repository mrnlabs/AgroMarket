import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import DUserFilter from './DUserFilter'
import { User, UsersProps } from '@/types'
import DStoreUserCard from './DStoreUserCard'

export default function Index({ users = [] }: UsersProps) {
  return (
   <Authenticated>
           <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-4">
   
             
     <div className="mx-auto 2xl:px-0">
       <DUserFilter />
       
       <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-2">

           {users.map((user: any) => (
           <DStoreUserCard key={user.id} user={user} />
          ))} 
           {!users.length && (
           <div className="col-span-4 md:col-span-3">
             <div className="flex items-center justify-center h-full">
               <div className="text-center">
                 <p className="text-gray-500 dark:text-gray-400">No users found.<span className='text-primary'>Add Users ?</span></p>
               </div>
             </div>
           </div>
          )} 
         </div>
     </div>
     
   </section>
       </Authenticated>
  )
}
