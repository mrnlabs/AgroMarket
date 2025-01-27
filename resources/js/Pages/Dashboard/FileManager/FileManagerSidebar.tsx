import { router } from '@inertiajs/react'
import { FileText, House, Image, Trash, Video } from 'lucide-react'
import React from 'react'

export default function FileManagerSidebar({setDocuments, isTrashed, filterBy}: {setDocuments: (docs: any) => void, isTrashed: boolean, filterBy: (type: string) => void}) {

    const getDocuments = (trashed: boolean) => {
        router.get(route('fica.docs.file-manager', {trashed: trashed}),undefined, {
            onSuccess: () => {
                setDocuments([]);
            }
        })
    }
  return (
    <>
    <div className="relative">
				<a href="#!" type="button" className="btn inline-flex justify-center items-center bg-primary text-white w-full">
					<i className="mgc_add_line text-lg me-2"></i> Create New
				</a>

	</div>
    <div className="space-y-2 mt-4">
    <div onClick={() => getDocuments(false)} className={`${!isTrashed ? 'bg-slate-100 dark:bg-gray-700' : ''} cursor-pointer flex items-center py-2 px-4 text-sm rounded text-gray-500 dark:hover:bg-gray-700  hover:text-slate-700 dark:text-gray-400 dark:hover:text-gray-300`} id="headingOne">
        <House className="me-3.5 w-4" /> 
        <span>Home</span>
    </div>
    <div onClick={() => filterBy('documents')} className="cursor-pointer flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
    <FileText className="me-3.5 w-4" />
        <span>Documents</span>
    </div>
    
    <div onClick={() => filterBy('images')} className="cursor-pointer flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <Image className="me-3.5 w-4" />
        <span>Pictures</span>
    </div>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <Video className="me-3.5 w-4" />
        <span>Video</span>
    </a>
    {/* <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="clock" className="me-3.5 w-4"></i>
        <span>Recent</span>
    </a> */}
    <div onClick={() => getDocuments(true)} className={`${isTrashed ? 'bg-slate-100 dark:bg-gray-700' : ''}  cursor-pointer flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300`} id="headingOne">
    <Trash className="me-3.5 w-4" />
        <span>Bin</span>
    </div>
</div>

<div className="mt-6">
				<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 open:opacity-0">Free</span>
				<h6 className="text-uppercase mt-3">Storage</h6>
				<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mt-4">
                    {/* @ts-ignore */}
					<div className="flex flex-col justify-center overflow-hidden bg-primary" role='progressbar' 
                    style={{ width: "46%" }} 
                    aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
				<p className="text-gray-500 mt-4 text-xs">7.02 GB (46%) of 15 GB used</p>
			</div>
</>
  )
}
