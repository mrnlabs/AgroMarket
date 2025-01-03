import React, { FormEvent, lazy, Suspense, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { CategoriesTableProps, Category } from '@/types';
import { SquarePen, Trash2 } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import ConfirmDialog from '@/Components/ConfirmDialog';
import { useToast } from '@/hooks/use-toast';

const CategoryModal = lazy(() => import("../Categories/CategoryModal"));

const CategoriesTable: React.FC<CategoriesTableProps> = ({ categories }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const { toast } = useToast();
    const filePath = usePage().props.filePath;

    const [category, setCategoryId] = useState<Category | null>(null);

    const { data, setData, post, patch, delete: destroy, processing, errors } = useForm({
                //
            });

    const deleteCategory = () => {
        destroy(route('categories.destroy', category?.id),{
            onSuccess: () => {
                setDialogOpen(false);
                setCategoryId(null);
                toast({
                    title: "Success",
                    description: "Category has been deleted successfully",
                    variant: "default",
                })
            },
            onError: () => {
                setDialogOpen(false);
                setCategoryId(null);
                toast({
                    title: "Error",
                    description: "Failed to delete role",
                    variant: "destructive",
                })
            }
        });
    }

    const handleEdit = (category: Category) => {
        setModalOpen(true);
        setCategoryId(category);
    }
    return (
        <>
            <div className="card-header flex justify-between items-center">
                    <h4 className="card-title">Product Categories</h4>
                    <div>
                        <Button onClick={() => {
                            setModalOpen(true)
                            setCategoryId(null)
                            }} type='button' className='rounded-[5px]'>Create</Button>
                    </div>
                </div>
        <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Count</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories && categories.map((category) => (
                <tr key={category.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    <img className="me-3 rounded-full" 
                     src={category.image ? `${filePath}${category.image}` 
                     : 'https://avatars.githubusercontent.com/u/56942052?s=96&v=4'} 
                      width="40" alt="Generic placeholder image"/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{category.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                    <td className="flex float-end px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div onClick={() => handleEdit(category)} className="cursor-pointer text-primary hover:text-primary" ><SquarePen /></div>
                        <div onClick={() => {
                                    setCategoryId(category)
                                    setDialogOpen(true)
                                    }} 
                                    className="text-red-500 cursor-pointer hover:text-red-500" >
                            <Trash2 />
                         </div>
                    </td>
                </tr>
                ))} 

            </tbody>
        </table>
        <Suspense fallback={""}>
              <CategoryModal open={modalOpen} setOpen={setModalOpen} category={category as Category} />
              <ConfirmDialog 
                message="Are you sure you want to delete this category?"
                dialogOpen={dialogOpen} 
                setDialogOpen={setDialogOpen}
                onContinue={deleteCategory}
             />
        </Suspense>
        
    </div>

    </>
      
    );
};

export default CategoriesTable;