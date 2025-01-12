import QuillEditor from '@/Components/editors/QuillEditor';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Store, StoreImages } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { Info, Loader, Paperclip, X } from 'lucide-react';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from '@/Components/ui/toaster'
import StoreDangerZone from './StoreDangerZone';

const FileUpload = lazy(
    () => import("@/Components/FileUpload"),
   );

export default function Create({store}: {
    store: Store
}) {
    const filePath = usePage().props.filePath;
    const auth = usePage().props.auth;

    const { toast } = useToast();
    
    const [imageSinglePreview, setImageSinglePreview] = useState<File | null>(null);
    const [imagePreviews, setImagePreviews] = useState<File[]>([]);
    const [quillValue, setQuillValue] = React.useState('');
    const [showFileInput, setShowFileInput] = React.useState(!store);


    useEffect(() => {
        if(store){
            setData('name', store.name);
            setData('address', store.address);
            setData('description', store.description);
        }
    },[store])


      const { data, setData, post, processing, errors, patch, isDirty, reset } = useForm({
              name: '',
              description: quillValue,
              address: '',
              image: null as File | null,
              images: null as File[] | null,
          });

      const handleMainImageFileSelect = (files: File[]) => {
        setData('image', null)
        if (files.length > 0) {
            setImageSinglePreview(files[0])
           setData('image', files[0]);
        }
       };
     const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setImagePreviews(files)
           setData('images', files);
        }
    };

    const handleFileRemove = () => {
        setData('image', null);
        setImageSinglePreview(null);
    };
    const onRemove = (index: number) => {
        const list = [...imagePreviews];
        list.splice(index, 1);
        setImagePreviews(list);
    }

    const onRemoveDBImages = (id: number) => {
        if(!confirm('Are you sure you want to delete this image?')) return;
        post(route('dashboard.stores.removeStoreImage', id), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Image removed successfully",
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

    const handleQuillChange = (value: string) => {
        setQuillValue(value);
        setData('description', value);
    };

    const handleUpdate = (formData: FormData) => {
        formData.append('_method', 'PATCH');
        // console.log(data);return
        post(route('dashboard.stores.update', store.slug), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                 setImageSinglePreview(null);
                 setImagePreviews([]);
                 setShowFileInput(false);
                 setData('images', null);
                toast({
                    title: "Success",
                    description: "Store updated successfully",
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

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log(data);return
        const formData = new FormData();
        if (data.image) {formData.append('image', data.image);}
        if (data.images) {
            data.images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });
        }
        if(store){
            return handleUpdate(formData);
        }
        post(route('dashboard.stores.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset('name', 'address','description');
                setData('image', null);
                setData('images', null);
                 setImageSinglePreview(null);
                 setImagePreviews([]);
                toast({
                    title: "Success",
                    description: "Store created successfully",
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

  return (
    <Authenticated>
    <div className="grid lg:grid-cols-4 gap-6">
        <div className="col-span-1 flex flex-col gap-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="card-title">{store ? 'Edit' : 'Add'} Your Store Image</h4>
                    {store && (
                        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                            <Paperclip onClick={() => setShowFileInput(!showFileInput)} className='cursor-pointer'/>
                        </div>
                    )}
                </div>

                {store?.image && !showFileInput && (
                    <img 
                        alt="gallery" 
                        className="object-cover object-center rounded" 
                        src={filePath + store.image}
                    />
                )}

                {(!store || showFileInput) && (
                    <div className="dropzone text-gray-700 dark:text-gray-300 h-52">                
                        <Suspense fallback={<Loader className="mx-auto" size={20} />}>
                            <FileUpload
                                onFilesSelected={handleMainImageFileSelect}
                                onFileRemove={handleFileRemove}
                                multiple={false}
                                acceptedTypes={['image/jpeg', 'image/png']}
                                maxSize={5 * 1024 * 1024}
                                showPreview={false} 
                            />
                        </Suspense>
                    </div>
                )}
                

                <div className="flex gap-3 mt-2">
                        <div className="flex -space-x-2">
                       {imageSinglePreview && (
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" 
                            src={URL.createObjectURL(imageSinglePreview)} alt="Main Image" />
                        )}
                        </div>
                    </div>
                    <InputError message={errors.image} className="mt-9" />
            </div>
            {store && (
                <StoreDangerZone/>
            )}
        </div>

        <div className="lg:col-span-3 space-y-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Product Details</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Info />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="grid md:grid-cols-2 gap-3">
                    <div className="">
                        <Label htmlFor="name" className="mb-2 block">Store Name</Label>
                        <Input value={data.name}
                        onChange={(e) => setData('name', e.target.value)} 
                        type="text" id="name" className="form-input" placeholder="Enter Store Name" aria-describedby="input-helper-text"/>
                        <InputError message={errors.name} className="mt-1" />
                    </div>

                    <div className="">
                            <Label htmlFor="address" className="mb-2 block">Address</Label>
                            <Input value={data.address}
                            onChange={(e) => setData('address', e.target.value)} type="text" id="address" className="form-input" placeholder='Enter Store Address'/>
                            <InputError message={errors.address} className="mt-1" />
                        </div>
                    </div>
                    


                     <div>
                        <Label htmlFor="description" className="mb-2 block">
                            Describe your store
                        </Label>
                        <QuillEditor 
                            quillValue={data.description ?? ''}
                            setQuillValue={handleQuillChange} 
                        />
                            <InputError message={errors.description} className="mt-1" />
                    </div>

                    <div className={`${store?.store_images && store.store_images.length > 0 ? 'mt-2' : ''}`}>
                        {store?.store_images && store.store_images.length > 0 && (
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="card-title">Uploaded Store Images</h4>
                        </div>
                        )}


                <div className="flex gap-3 mt-2">
                        <div className="flex flex-wrap gap-2">
                        {store?.store_images && (
                        store.store_images.map((store: StoreImages) => (
                            <div key={store.id} className="relative group">
                               <img key={store.id} 
                                    src={filePath + store.image} alt={`image-${store.id}`} className="h-32 w-32 rounded"/>
                                <button
                                onClick={() => store.id !== undefined && onRemoveDBImages(store.id)}
                                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 
                                            text-white rounded-full p-1 opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-200 shadow-sm"
                                type="button"
                                >
                                <X className="h-3 w-3" />
                                <span className="sr-only">Remove image</span>
                                </button>
                            </div>
                             ))
                            )}
                        </div>
                 </div>

                 <div className={`${'flex justify-between items-center mb-2' } ${store?.store_images ? "mt-4" : " "}`} >
                    <h4 className="card-title">Upload Store Images<span className="text-sm text-muted-foreground">(Optional)</span></h4>
                </div>

                <div className="dropzone text-gray-700 dark:text-gray-300 h-52 mt-6">
                <FileUpload 
                        onFilesSelected={handleFileSelect}
                        onFileRemove={handleFileRemove}
                        multiple={true}
                        acceptedTypes={['image/jpeg', 'image/png']}
                        maxSize={5 * 1024 * 1024} // 5MB
                        showPreview={false} 
                        />
                </div>

                    <div className="flex gap-3 mt-2">
                        <div className="flex flex-wrap gap-2">
                            {imagePreviews.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                src={URL.createObjectURL(image)}
                                alt={`Preview ${index + 1}`}
                                className="h-16 w-16 rounded object-cover"
                                />
                                <button
                                onClick={() => onRemove(index)}
                                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 
                                            text-white rounded-full p-1 opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-200 shadow-sm"
                                type="button"
                                >
                                <X className="h-3 w-3" />
                                <span className="sr-only">Remove image</span>
                                </button>
                            </div>
                            ))}
                        </div>
                        </div>
            </div>
                </div>
            </div>
            <div className="lg:col-span-4 mt-5">
                <div className="flex justify-end gap-3">
                    <Button type="button" className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none">
                        Cancel
                    </Button>
                    <Button disabled={processing} onClick={handleSubmit} type="button" className="inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none">
                        {store ? 'Update' : 'Create'}
                    </Button>
                </div>
            </div>
        </div>
        <Toaster />
    </div>

    </Authenticated>
  )
}
