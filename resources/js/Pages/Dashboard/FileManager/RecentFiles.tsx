import React from 'react'

export default function RecentFiles({docs}: any) {
  return (
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
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">Store Name</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">File Name</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[6rem]">File Type</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[8rem]">Date </th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold">Action</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                            {docs.map((doc: any) => (
                                                <tr>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">{doc.store?.name}</a>
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
                                            ))}

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}
