import { format } from 'date-fns'
import React from 'react'
import DropdownAction from './DropdownAction'
import { StoreDocuments, StoreDocumentsProps } from '@/types'
import { usePage } from '@inertiajs/react';
import { transcateText } from '@/utils/transcateText';

export default function RecentFiles({docs=[], isTrashed}: 
	{docs: StoreDocuments[], isTrashed: boolean}) {
	const filePath = usePage().props.filePath;

  return (
    <div className="2xl:col-span-4 sm:col-span-2">
				<div className="card">
					<div className="card-header">
						<h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{isTrashed ? 'Deleted Files' : 'Recent Files'}</h4>
					</div>

					<div className="flex flex-col">
						<div className="overflow-x-auto">
							<div className="inline-block min-w-full align-middle">
								<div className="overflow-hidden">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
										<thead className="bg-gray-50 dark:bg-gray-700">
											<tr className="text-gray-800 dark:text-gray-300">
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">Store Name</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[10rem]">Doc Name</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[6rem]">Doc Type</th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold min-w-[8rem]">Date </th>
												<th scope="col" className="p-3.5 text-sm text-start font-semibold">Action</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                            {docs.map((doc: StoreDocuments) => (
                                                <tr key={doc.id}>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<a href="javascript: void(0);" className="font-medium">{isTrashed ? doc.storeName : doc.store?.name}</a>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p onClick={() => window.open(filePath + doc.document_path, '_blank')} className='line-clamp-1 cursor-pointer underline'>
														{transcateText(doc.document_name ?? '', 70,'...')} </p>
													
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">{doc.document_type}</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
													<p>{format(doc.created_at, 'dd/MM/yyyy')}</p>
													<span className="text-xs">{format(doc.created_at, 'hh:mm a')}</span>
												</td>
												<td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
												  <DropdownAction doc={doc}  isTrashed={isTrashed} />
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
