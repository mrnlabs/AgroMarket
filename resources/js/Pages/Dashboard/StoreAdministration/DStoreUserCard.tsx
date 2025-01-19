import { Toaster } from '@/Components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { User, UserCardProps } from '@/types'
import { transcateText } from '@/utils/transcateText';
import { Link, router, usePage } from '@inertiajs/react'


export default function DStoreUserCard({user}: UserCardProps) {
    const filePath = usePage().props.filePath;

    const deleteUser = (user: User) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(route('users.destroy', user.slug),{
                onSuccess: () => {
                    toast({
                        title: "Success",
                        description: "User deleted successfully",
                        variant: "default",
                    })
                },
                onError: () => {
                    toast({
                        title: "Error",
                        description: "Something went wrong",
                        variant: "destructive",
                    })
                }
            });
        }
    }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
        </div>
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.photo_path ? filePath + user.photo_path : 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'} alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{transcateText(`${user.first_name} ${user.last_name}`, 20, '...')}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.roles && user.roles.map((role: any) => role.name).join(', ')}</span>
            <div className="flex mt-4 md:mt-6">
                <Link href={route('users.edit', user.slug)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit</Link>
                <button onClick={() => deleteUser(user)} type='button'
                 className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-red-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Delete</button>
            </div>
        </div>
         <Toaster />
    </div>
  )
}
