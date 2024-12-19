// import { ConfirmDialog } from '@/Components/ConfirmDialog';
import TextInput from '@/Components/TextInput'
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { Role, RolesIndexProps } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { CircleX, Loader, SquarePen, Trash2 } from 'lucide-react';
import React, { FormEvent, lazy, Suspense, useRef, useState } from 'react'


const ConfirmDialog = lazy(
    () => import("@/Components/ConfirmDialog"),
   );


export default function RolesTable({roles}:RolesIndexProps) {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [role, setRoleId] = useState<Role | null>(null);

    const [isEditing, setIsEditing] = useState(false);
    const createRoleRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast();

      const { data, setData, post, patch, processing, errors } = useForm({
            name: '',
            guard_name: 'web'
        });
    
        const handleCreateRole = (e: FormEvent) => {
            e.preventDefault();

            if (isEditing) {
                patch(route('roles.update', role?.id), {
                    onSuccess: () => {
                        setIsEditing(false);
                        setData('name', '');
                    }
                });
            } else {
                post(route('roles.store'),{
                    onSuccess: () => {
                        setData('name', '')
                        toast({
                            title: "Success",
                            description: "Role has been created successfully",
                            variant: "default",
                        })
                    }
                });
            }

            
        };

        const handleEditRole = (role: Role) => {
            setIsEditing(true);
            setData('name', role.name);
            setRoleId(role);
            setTimeout(() => {
                createRoleRef.current?.focus();
            }, 0);
        }

        const deleteRole = () => {
            post(route('roles.destroy', role?.id),{
                onSuccess: () => {
                    setDialogOpen(false);
                    setRoleId(null);
                    toast({
                        title: "Success",
                        description: "Role has been deleted successfully",
                        variant: "default",
                    })
                },
                onError: () => {
                    setDialogOpen(false);
                    setRoleId(null);
                    toast({
                        title: "Error",
                        description: "Failed to delete role",
                        variant: "destructive",
                    })
                }
            });
        }
  return (
    <div className="container mx-auto p-6">
    <div className="rounded">

    <div className="overflow-x-auto">
<div className="min-w-full inline-block align-middle">
<div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
    <div className="py-3 px-1">
        <div className="flex space-x-4 relative max-w-xs">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <TextInput 
            ref={createRoleRef}
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            type="text" name="table-search" id="table-search" 
            className="form-input ps-11 rounded-[5px]" 
            placeholder={isEditing ? "Update role name" : "Create a new role"}
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
            {processing && (
                <Loader className="animate-spin mt-2" size={25} />
            )}
            
            {!processing && (
            <>
                <Button onClick={handleCreateRole} className='rounded-[5px]'>
                    {isEditing ? 'Update' : 'Create'}
                </Button>
                {isEditing && (
                    <CircleX size={35} onClick={() => {
                                setIsEditing(false);
                                setData('name', '');
                            }} 
                            className=' right-2 top-2 cursor-pointer text-red-500 h-10 w-10' />
                )}
            </>
        )}
            
        </div>
        {errors.name && (
                <p className="text-red-500 text-xs mt-1 px-3">{errors.name}</p>
            )}
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
                        <div onClick={() => handleEditRole(role)} className="cursor-pointer text-primary hover:text-primary" ><SquarePen /></div>
                        <div onClick={() => {
                                    setRoleId(role)
                                    setDialogOpen(true)
                                    }} 
                        className="text-red-500 cursor-pointer hover:text-red-500" ><Trash2 /></div>
                    </td>
                </tr>
                ))} 

            </tbody>
        </table>
    </div>
</div>
</div>
</div>

<div>
</div>

</div>
<Suspense fallback={''}>
<ConfirmDialog 
    message="Are you sure you want to delete this role?"
    dialogOpen={dialogOpen} 
    setDialogOpen={setDialogOpen}
    onContinue={deleteRole}
     />
    
</Suspense>
<Toaster />
</div>
  )
}
