import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Link, usePage } from '@inertiajs/react'
import { Loader, Trash2 } from 'lucide-react'
import UserCard from './UserCard'
import { User, UserCardProps, UsersProps } from '@/types'
import { useEffect } from 'react'
import { toast } from '@/hooks/use-toast'

export default function Users({
    users
}: UsersProps) {
    const success = usePage().props.success;
    useEffect(() => {
        if (success) {
            toast({
                title: "Success",
                description: success,
                variant: "default",
            })
        }
    }, [success]);
  return (
    <Authenticated>
		<div className="flex justify-between items-center mb-6">
                    <h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">All Users</h4>

                    <div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
                        <div className="flex items-center gap-2">
                            <Link href={route('users.create')} className='rounded-[5px] px-4 py-2 bg-neutral-900 text-white'>Add user</Link>
                        </div>
                    </div>
                </div>
    <div className="flex flex-auto flex-col">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {users.map((user: any) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
        

        <div className="text-center mt-6">
            <button type="button" className="btn bg-transparent border-gray-300 dark:border-gray-700">
				<Loader className="me-2  animate-spin dark:text-gray-600" size={20} />
                <span>Load More</span>
            </button>
        </div>

    </div>

</Authenticated>
  )
}
