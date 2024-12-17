import React, { FormEvent, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Role, RolesIndexProps } from '@/types';

const RolesIndex: React.FC<RolesIndexProps> = ({ roles, auth }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        guard_name: 'web'
    });

    const handleCreateRole = (e: FormEvent) => {
        e.preventDefault();
        post(route('roles.store'));
    };

    return (
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
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Users Count</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.data.map((role: Role) => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 border-b">{role.name}</td>
                                <td className="px-6 py-4 border-b">{role.users_count}</td>
                                <td className="px-6 py-4 border-b text-right">
                                    <Link 
                                        href={route('roles.edit', role.id)}
                                        className="text-blue-500 hover:text-blue-700 mr-3"
                                    >
                                        Edit
                                    </Link>
                                    <Link 
                                        method="delete"
                                        href={route('roles.destroy', role.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RolesIndex;