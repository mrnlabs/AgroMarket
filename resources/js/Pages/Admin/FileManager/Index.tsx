import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Folder } from 'lucide-react'
import React from 'react'

export default function Index() {
  return (
    <Authenticated>
<div className="flex">
	<div id="default-offcanvas" className="lg:block hidden top-0 left-0 transform h-full min-w-[16rem] me-6 card rounded-none lg:rounded-md fc-offcanvas-open:translate-x-0 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300" tabIndex={-1}>
		<div className="p-5">
			<div className="relative">
				<a href="#!" data-fc-type="dropdown" data-fc-placement="bottom" type="button" className="btn inline-flex justify-center items-center bg-primary text-white w-full">
					<i className="mgc_add_line text-lg me-2"></i> Create New
				</a>

				<div className="fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2 hidden">
					<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
						<i data-feather="folder" className="me-2 w-4"></i>
						<span>Folder</span>
					</a>
					<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
						<i data-feather="file" className="me-2 w-4"></i>
						<span>File</span>
					</a>
					<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
						<i data-feather="file-text" className="me-2 w-4"></i>
						<span>Document</span>
					</a>
					<a className="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
						<i data-feather="upload" className="me-2 w-4"></i>
						<span>Choose File</span>
					</a>
				</div>
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
		</div>
	</div>

	<div className="w-full">
		<div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
			<div className="2xl:col-span-4 sm:col-span-2">
				<div className="flex items-center justify-between gap-4">
					<div className="lg:hidden block">
						<button data-fc-target="default-offcanvas" data-fc-type="offcanvas" className="inline-flex items-center justify-center text-gray-700 border border-gray-300 rounded shadow hover:bg-slate-100 dark:text-gray-400 hover:dark:bg-gray-800 dark:border-gray-700 transition h-9 w-9 duration-100">
							<div className="mgc_menu_line text-lg"></div>
						</button>
					</div>
					<h4 className="text-xl">Folders</h4>

					<form className="ms-auto">
						<div className="flex items-center">
							<input type="text" className="form-input  rounded-full" placeholder="Search files..."/>
							<span className="mgc_search_line text-xl -ms-8"></span>
						</div>
					</form>
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
			</div>

			<div className="2xl:col-span-4 sm:col-span-2">
				<div className="card">
					<div className="card-header">
						<h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">Recent Files</h4>
					</div>

					<div className="flex flex-col">
						<div className="overflow-x-auto">
							<div className="inline-block min-w-full align-middle">
								<div className="overflow-hidden">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
										<thead className="bg-gray-50 dark:bg-gray-700">
											<tr className="text-gray-800 dark:text-gray-300">
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">File Name</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">Last Modified</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[6rem]">File Size</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[8rem]">Owner</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[6rem]">Members</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold">Action</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 dark:divide-gray-600">
											<tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">App Design & Development</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>Jan 03, 2020</p>
													<span className="text-xs">by Andrew</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">128 MB</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													Danielle Thompson
												</td>
												<td className="p-3.5">
													<div className="flex -space-x-1.5">
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-1.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-2.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-3.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-4.jpg" alt="Image Description" />
													</div>
												</td>
												<td className="p-3.5">
													<div>
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
												</td>
											</tr>

											<tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">Hyper-sketch-design.zip</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>Feb 13, 2020</p>
													<span className="text-xs">by Coderthemes</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">521 MB</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													Coder Themes
												</td>
												<td className="p-3.5">
													<div className="flex -space-x-1.5">
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-4.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-8.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-6.jpg" alt="Image Description" />
													</div>
												</td>
												<td className="p-3.5">
													<div>
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
												</td>
											</tr>
											<tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">Annualreport.pdf</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>Dec 18, 2019</p>
													<span className="text-xs">by Alejandro</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">7.2 MB</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													Gary Coley
												</td>
												<td className="p-3.5">
													<div className="flex -space-x-1.5">
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-5.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-7.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-4.jpg" alt="Image Description" />
													</div>
												</td>
												<td className="p-3.5">
													<div>
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
												</td>
											</tr>
											<tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">Wireframes</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>Nov 25, 2019</p>
													<span className="text-xs">by Dunkle</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">54.2 MB</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													Jasper Rigg
												</td>
												<td className="p-3.5">
													<div className="flex -space-x-1.5">
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-6.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-4.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-7.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-5.jpg" alt="Image Description" />
													</div>
												</td>
												<td className="p-3.5">
													<div>
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
												</td>
											</tr>
											<tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">Documentation.docs</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>Feb 9, 2020</p>
													<span className="text-xs">by Justin</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">8.3 MB</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													Cooper Sharwood
												</td>
												<td className="p-3.5">
													<div className="flex -space-x-1.5">
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-5.jpg" alt="Image Description" />
														<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700" src="/images/users/avatar-8.jpg" alt="Image Description" />
													</div>
												</td>
												<td className="p-3.5">
													<div>
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
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </Authenticated>
  )
}
