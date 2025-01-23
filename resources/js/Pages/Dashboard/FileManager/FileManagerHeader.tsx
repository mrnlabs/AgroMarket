import { Folder } from 'lucide-react'
import React from 'react'

export default function FileManagerHeader() {
  return (
    <>
    <div className="card">
				<div className="p-5">
					<div className="space-y-4 text-gray-600 dark:text-gray-300">
						<div className="flex items-start relative gap-5">
							<div className="flex items-center gap-3">
								<div className="h-14 w-14">
									<span className="flex h-full w-full items-center justify-center">
                                    <Folder className='h-full w-full fill-warning text-warning' />
									</span>
								</div>
								<div className="space-y-1">
									<p className="font-semibold text-base">Document</p>
									<p className="text-xs">Using 25% of storage</p>
								</div>
							</div>
							<div className="flex items-center absolute top-0 end-0">
								<button data-fc-type="dropdown" data-fc-placement="bottom-end" className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
									<i data-feather="more-vertical" className="w-4 h-4"></i>
								</button>

								<div className="fc-dropdown hidden fc-dropdown-open:opacity-100 opacity-0 w-40 z-50 mt-2 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="edit-3" className="w-4 h-4 me-3"></i>
										Edit
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="link" className="w-4 h-4 me-3"></i>
										Copy Link
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="share-2" className="w-4 h-4 me-3"></i>
										Share
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="download" className="w-4 h-4 me-3"></i>
										Download
									</a>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<p className="text-sm">3 GB</p>
							<span className="p-0.5 bg-gray-600 rounded-full"></span>
							<p className="text-sm">400 Files</p>
						</div>
					</div>
				</div> 
			</div>

			<div className="card">
				<div className="p-5">
					<div className="space-y-4 text-gray-600 dark:text-gray-300">
						<div className="flex items-start relative gap-5">
							<div className="flex items-center gap-3">
								<div className="h-14 w-14">
									<span className="flex h-full w-full items-center justify-center">
										<Folder className='h-full w-full fill-warning text-warning' />
									</span>
								</div>
								<div className="space-y-1">
									<p className="font-semibold text-base">Music</p>
									<p className="text-xs">Using 16% of storage</p>
								</div>
							</div>
							<div className="flex items-center absolute top-0 end-0">
								<button data-fc-type="dropdown" data-fc-placement="bottom-end" className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
									<i data-feather="more-vertical" className="w-4 h-4"></i>
								</button>

								<div className="fc-dropdown hidden fc-dropdown-open:opacity-100 opacity-0 w-40 z-50 mt-2 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="edit-3" className="w-4 h-4 me-3"></i>
										Edit
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="link" className="w-4 h-4 me-3"></i>
										Copy Link
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="share-2" className="w-4 h-4 me-3"></i>
										Share
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="download" className="w-4 h-4 me-3"></i>
										Download
									</a>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<p className="text-sm">1.5 GB</p>
							<span className="p-0.5 bg-gray-600 rounded-full"></span>
							<p className="text-sm">212 Files</p>
						</div>
					</div>
				</div> 
			</div>

			<div className="card">
				<div className="p-5">
					<div className="space-y-4 text-gray-600 dark:text-gray-300">
						<div className="flex items-start relative gap-5">
							<div className="flex items-center gap-3">
								<div className="h-14 w-14">
									<span className="flex h-full w-full items-center justify-center">
										<Folder className='h-full w-full fill-warning text-warning' />
									</span>
								</div>
								<div className="space-y-1">
									<p className="font-semibold text-base">Apps</p>
									<p className="text-xs">Using 50% of storage</p>
								</div>
							</div>
							<div className="flex items-center absolute top-0 end-0">
								<button data-fc-type="dropdown" data-fc-placement="bottom-end" className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
									<i data-feather="more-vertical" className="w-4 h-4"></i>
								</button>

								<div className="fc-dropdown hidden fc-dropdown-open:opacity-100 opacity-0 w-40 z-50 mt-2 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="edit-3" className="w-4 h-4 me-3"></i>
										Edit
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="link" className="w-4 h-4 me-3"></i>
										Copy Link
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="share-2" className="w-4 h-4 me-3"></i>
										Share
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="download" className="w-4 h-4 me-3"></i>
										Download
									</a>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<p className="text-sm">39 GB</p>
							<span className="p-0.5 bg-gray-600 rounded-full"></span>
							<p className="text-sm">25 Apps</p>
						</div>
					</div>
				</div> 
			</div>

			<div className="card">
				<div className="p-5">
					<div className="space-y-4 text-gray-600 dark:text-gray-300">
						<div className="flex items-start relative gap-5">
							<div className="flex items-center gap-3">
								<div className="h-14 w-14">
									<span className="flex h-full w-full items-center justify-center">
										<Folder className='h-full w-full fill-warning text-warning' />
									</span>
								</div>
								<div className="space-y-1">
									<p className="font-semibold text-base">Videos</p>
									<p className="text-xs">Using 8% of storage</p>
								</div>
							</div>
							<div className="flex items-center absolute top-0 end-0">
								<button data-fc-type="dropdown" data-fc-placement="bottom-end" className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
									<i data-feather="more-vertical" className="w-4 h-4"></i>
								</button>

								<div className="fc-dropdown hidden fc-dropdown-open:opacity-100 opacity-0 w-40 z-50 mt-2 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="edit-3" className="w-4 h-4 me-3"></i>
										Edit
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="link" className="w-4 h-4 me-3"></i>
										Copy Link
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="share-2" className="w-4 h-4 me-3"></i>
										Share
									</a>
									<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
										<i data-feather="download" className="w-4 h-4 me-3"></i>
										Download
									</a>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<p className="text-sm">4 GB</p>
							<span className="p-0.5 bg-gray-600 rounded-full"></span>
							<p className="text-sm">9 Videos</p>
						</div>
					</div>
				</div> 
			</div></>
  )
}
