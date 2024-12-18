import React, { FormEvent, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Role, RolesIndexProps } from '@/types';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { SquarePen, Trash2 } from 'lucide-react';
import Modal from '@/Components/Modal';
import ModalExample from '@/Components/ModalComponent';
import { Button } from '@/Components/ui/button';

const RolesIndex: React.FC<RolesIndexProps> = ({ roles, auth }) => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        guard_name: 'web'
    });

    const handleCreateRole = (e: FormEvent) => {
        e.preventDefault();
        post(route('roles.store'));
    };

    return (
        <Authenticated>
            <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Roles Management</h1>

            {/* Create Role Form */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleCreateRole}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Role Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="Enter role name"
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Create Role
                    </button>
                </form>
            </div>

            {/* Roles List */}
            <div className="bg-white shadow-md rounded">

            <div className="overflow-x-auto">
    <div className="min-w-full inline-block align-middle">
        <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4">
                <div className="relative max-w-xs">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <input type="text" name="table-search" id="table-search" className="form-input ps-11" placeholder="Search for items"/>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-4 pe-0">
                                <div className="flex items-center h-5">
                                    <input id="table-search-checkbox-all" type="checkbox" className="form-checkbox rounded"/>
                                    <label htmlFor="table-search-checkbox-all" className="sr-only">Checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User Count</th>
                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {roles?.map((role: Role) => (
                        <tr key={role.id}>
                            <td className="py-3 ps-4">
                                <div className="flex items-center h-5">
                                    <input id="table-search-checkbox-1" type="checkbox" className="form-checkbox rounded"/>
                                    <label htmlFor="table-search-checkbox-1" className="sr-only">Checkbox</label>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{role.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                            <td className="flex float-end px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                <a className="text-primary hover:text-primary" href="#"><SquarePen /></a>
                                <a className="text-red-500 hover:text-red-500" href="#"><Trash2 /></a>
                            </td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

               {/* <ModalComponent/> */}

               <div>

      <ModalExample 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        // onSave={handleSave}
      >
        <p>Modal content goes here</p>
      </ModalExample>
    </div>



            </div>
        </div>
        </Authenticated>
    );
};

export default RolesIndex;