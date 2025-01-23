import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Folder } from 'lucide-react'
import React from 'react'
import FileManagerSidebar from './FileManagerSidebar'
import FileManagerSearch from './FileManagerSearch'
import FileManagerHeader from './FileManagerHeader'
import RecentFiles from './RecentFiles'

export default function Index({docs}: any) {
	console.log(docs);
  return (
    <Authenticated>
<div className="flex">
	<div id="default-offcanvas" className="lg:block hidden top-0 left-0 transform h-full min-w-[16rem] me-6 card rounded-none lg:rounded-md fc-offcanvas-open:translate-x-0 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300" tabIndex={-1}>
		<div className="p-5">
			<FileManagerSidebar />

			

			
		</div>
	</div>

	<div className="w-full">
		<div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
			<FileManagerSearch />

			<FileManagerHeader />

			<RecentFiles docs={docs} />
		</div>
	</div>
</div>
    </Authenticated>
  )
}
