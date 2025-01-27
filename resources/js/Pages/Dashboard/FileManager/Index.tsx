import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Folder } from 'lucide-react'
import React, { useState } from 'react'
import FileManagerSidebar from './FileManagerSidebar'
import FileManagerSearch from './FileManagerSearch'
import FileManagerHeader from './FileManagerHeader'
import RecentFiles from './RecentFiles'
import { router } from '@inertiajs/react'
import { QueryParams } from '@/types'
// @ts-expect-error
import { debounce } from 'lodash';

interface Filters {
	search: string
}

export default function Index({docs}: any) {
	const [documents, setDocuments] = React.useState(docs);
	const searchParams = new URLSearchParams(window.location.search);
	const isTrashed = searchParams.get('trashed') === '1';
console.log(docs);
	const filterBy = (type: string) => {
		switch (type) {
			case 'images':
				setDocuments(docs.filter((doc: any) => doc.document_name.includes('jpg') || doc.document_name.includes('png') || doc.document_name.includes('jpeg') || doc.document_name.includes('PNG')));
				break;
			case 'videos':
				setDocuments(docs.filter((doc: any) => doc.type === 'video'));
				break;
			case 'documents':
				setDocuments(docs.filter((doc: any) => doc.document_name.includes('.pdf') || doc.document_name.includes('pdf')));
				break;
			default:
				setDocuments(docs);
				break;
		}
	}

     const [filters, setFilters] = useState({
		  search: '',
	  });

	  const onSearch = React.useCallback(
		debounce((newFilters: Partial<Filters>) => {
		  const queryParams: QueryParams = {};
		  
		  const updatedFilters = { ...filters, ...newFilters };
		  
		  Object.keys(updatedFilters).forEach(key => {
			if (updatedFilters[key as keyof Filters]) {
			  queryParams[key] = updatedFilters[key as keyof Filters] as string;
			}
		  });
	 
		  router.get(route('fica.docs.file-manager'), queryParams, {
			preserveState: true,
			replace: true,
			onSuccess: (page) => {
				// Update documents state with the new search results
				setDocuments(page.props.docs);
				setFilters(updatedFilters);
			  },
		  });
	 
		  // Update local state with merged filters
		  setFilters(updatedFilters);
		}, 300),
		[filters]
	 );
		
		
  return (
    <Authenticated>
<div className="flex">
	<div id="default-offcanvas" className="lg:block hidden top-0 left-0 transform h-full min-w-[16rem] me-6 card rounded-none lg:rounded-md fc-offcanvas-open:translate-x-0 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300" tabIndex={-1}>
		<div className="p-5">
			<FileManagerSidebar setDocuments={setDocuments} isTrashed={isTrashed} filterBy={filterBy} />
		</div>
	</div>

	<div className="w-full">
		<div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
			<FileManagerSearch  onSearch={(search) => onSearch({ search })} />

			<FileManagerHeader />

			<RecentFiles docs={documents} isTrashed={isTrashed} />
		</div>
	</div>
</div>
    </Authenticated>
  )
}
