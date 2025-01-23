import React from 'react'

export default function FileManagerSidebar() {
  return (
    <>
    <div className="relative">
				<a href="#!" type="button" className="btn inline-flex justify-center items-center bg-primary text-white w-full">
					<i className="mgc_add_line text-lg me-2"></i> Create New
				</a>

	</div>
    <div className="space-y-2 mt-4">
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="home" className="me-3.5 w-4"></i>
        <span>Home</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="file-text" className="me-3.5 w-4"></i>
        <span>Documents</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="download" className="me-3.5 w-4"></i>
        <span>Downloads</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="music" className="me-3.5 w-4"></i>
        <span>Music</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="image" className="me-3.5 w-4"></i>
        <span>Pictures</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="video" className="me-3.5 w-4"></i>
        <span>Video</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="clock" className="me-3.5 w-4"></i>
        <span>Recent</span>
    </a>
    <a href="#!;" className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" id="headingOne">
        <i data-feather="trash" className="me-3.5 w-4"></i>
        <span>Bin</span>
    </a>
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
