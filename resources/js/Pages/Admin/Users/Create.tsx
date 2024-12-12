import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import { Trash2 } from 'lucide-react'
import React from 'react'


export default function Create() {
  return (
    <Authenticated>
<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
	<div className="card">
		<div className="p-5">
			<div className="flex justify-between">
				<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-primary/25 ">
					<i className="mgc_tag_line text-4xl text-primary"></i>
				</div>
				<div className="text-right">
					<h3 className="text-gray-700 mt-1 text-2xl font-bold mb-5 dark:text-gray-300">3947</h3>
					<p className="text-gray-500 mb-1 truncate dark:text-gray-400">Total Tickets</p>
				</div>
			</div>
		</div>
	</div>

	<div className="card">
		<div className="p-5">
			<div className="flex justify-between">
				<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-yellow-100">
					<i className="mgc_alarm_2_line text-4xl text-yellow-500"></i>
				</div>
				<div className="text-right">
					<h3 className="text-gray-700 mt-1 text-2xl font-bold mb-5 dark:text-gray-300">624</h3>
					<p className="text-gray-500 mb-1 truncate dark:text-gray-400">Pending Tickets</p>
				</div>
			</div>
		</div>
	</div>

	<div className="card">
		<div className="p-5">
			<div className="flex justify-between">
				<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-green-100">
					<i className="mgc_check_line text-4xl text-green-500"></i>
				</div>
				<div className="text-right">
					<h3 className="text-gray-700 mt-1 text-2xl font-bold mb-5 dark:text-gray-300">3195</h3>
					<p className="text-gray-500 mb-1 truncate dark:text-gray-400">Closed Tickets</p>
				</div>
			</div>
		</div>
	</div>

	<div className="card">
		<div className="p-5">
			<div className="flex justify-between">
				<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-red-100">
					<i className="mgc_delete_line text-4xl text-red-500"></i>
				</div>
				<div className="text-right">
					<h3 className="text-gray-700 mt-1 text-2xl font-bold mb-5 dark:text-gray-300">128</h3>
					<p className="text-gray-500 mb-1 truncate dark:text-gray-400">Deleted Tickets</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="mt-6">
	<div className="card">
		<div className="flex flex-wrap justify-between items-center gap-2 p-6">
			<Link href={route('users.create')} className="btn bg-danger/20 text-sm font-medium text-danger hover:text-white hover:bg-danger">
				<i className="mgc_add_circle_line me-3"></i>
				Add Customers
            </Link>
			<div className="flex flex-wrap gap-2">
				<button type="button" className="btn bg-success/25 text-lg font-medium text-success hover:text-white hover:bg-success">
					<i className="mgc_settings_3_line"></i>
				</button>
				<button type="button" className="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90">Import</button>
				<button type="button" className="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90">Export</button>
			</div>
		</div>
		<div className="relative overflow-x-auto">
			<table className="w-full divide-y divide-gray-300 dark:divide-gray-700">
				<thead className="bg-slate-300 bg-opacity-20 border-t dark:bg-slate-800 divide-gray-300 dark:border-gray-700">
					<tr>
						<th scope="col" className="py-3.5 ps-4 pe-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">ID</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Requested By</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Subject</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Assignee</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Priority</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Created Date</th>
						<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Due Date</th>
						<th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-200">Action</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 dark:divide-gray-700 ">

					<tr>
						<td className="whitespace-nowrap py-4 ps-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200">
							<b>#1256</b>
						</td>
						<td className="whitespace-nowrap py-4 pe-3 text-sm">
							<div className="flex items-center">
								<div className="h-10 w-10 flex-shrink-0">
									<img className="h-10 w-10 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-9.jpg" alt="user" />
								</div>
								<div className="font-medium text-gray-900 dark:text-gray-200 ms-4">Jerry Geiger</div>
							</div>
						</td>
						<td className="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200">
							Support for theme</td>
						<td className="whitespace-nowrap py-4 px-3 text-sm">
							<img className="h-10 w-10 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-9.jpg" alt=""/>
						</td>
						<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
							<div className="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium bg-dark/25 text-slate-900 dark:text-slate-200/90">Low</div>
						</td>
						<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
							<div className="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium bg-success/90 text-white">Open</div>
						</td>
						<td className="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200">28/07/2020</td>
						<td className="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200">28/07/2020</td>
						<td className="whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
							<a href="#!" className="me-0.5">
								<i className="mgc_edit_line text-lg"></i>
							</a>
							<a href="#!" className="ms-0.5">
                                <Trash2 className="text-xl" />
							</a>
						</td>
					</tr>

				
				</tbody>
			</table>
		</div>
	</div>
</div>
</Authenticated>
  )
}
