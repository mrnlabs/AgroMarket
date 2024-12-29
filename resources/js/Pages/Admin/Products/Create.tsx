import QuillEditor from '@/Components/editors/QuillEditor';
import InputError from '@/Components/InputError';
import MultiSelect from '@/Components/MultiSelect'
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { CategoriesTableProps } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { ChartColumnStacked, Info, Loader, Paperclip, X } from 'lucide-react';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from '@/Components/ui/toaster'

const FileUpload = lazy(
    () => import("@/Components/FileUpload"),
   );

export default function Create({categories, product}: {
    categories : CategoriesTableProps,
    product: any
}) {
    const filePath = usePage().props.filePath;
    const auth = usePage().props.auth;

    const { toast } = useToast();
    
    const [imageSinglePreview, setImageSinglePreview] = useState<File | null>(null);
    const [imagePreviews, setImagePreviews] = useState<File[]>([]);
    const [quillValue, setQuillValue] = React.useState('');
    const [selectedCategories, setSelectedCategories] = useState<{ value: string; label: string }[]>([]);
    const [showFileInput, setShowFileInput] = React.useState(false);
    
    const mappedCategories = categories 
      ? Object.entries(categories).map(([id, name]) => ({
          value: id,
          label: name.toString()
        }))
      : [];

    useEffect(() => {
        if(product){
            setData('title', product.title);
            setData('quantity', product.quantity);
            setData('price', product.price);
            setData('description', product.description);

            const defaultCategories = product.categories.map((category: { id: number; name: string }) => ({
                value: category.id.toString(),
                label: category.name
            }));
            setSelectedCategories(defaultCategories); 
        }
    },[product])


      const { data, setData, post, processing, errors, patch, isDirty, reset } = useForm({
              title: '',
              description: quillValue,
              price: '',
              quantity: '',
              category_id: [] as string[],
              image: null as File | null,
              images: null as File[] | null,
          });

        const handleCategoriesChange = (selectedCategories: { value: string }[]) => {
            setData('category_id', selectedCategories.map((category) => category.value));
        }

      const handleMainImageFileSelect = (files: File[]) => {
        setData('image', null)
        if (files.length > 0) {
            setImageSinglePreview(files[0])
           setData('image', files[0]);
        }
       };
     const handleFileSelect = (files: File[]) => {
        setData('images', null);
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

    const handleQuillChange = (value: string) => {
        setQuillValue(value);
        setData('description', value);
    };

    const handleUpdate = (formData: FormData) => {
        formData.append('_method', 'PATCH');
        // console.log(data);return
        post(route('admin.products.update', product.slug), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset('title', 'quantity', 'price', 'description');
                setData('image', null);
                setData('images', null);
                setData('category_id', []);
                 setImageSinglePreview(null);
                 setImagePreviews([]);
                 setShowFileInput(false);
                toast({
                    title: "Success",
                    description: "Product updated successfully",
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
        formData.append('title', data.title);
        formData.append('quantity', data.quantity);
        formData.append('price', data.price);
        formData.append('description', data.description);
        if (data.image) {formData.append('image', data.image);}
        if (data.images) {
            data.images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });
        }
        if(product){
            setData('category_id', selectedCategories.map((category) => category.value));
            return handleUpdate(formData);
        }
        post(route('admin.products.store',auth.user.slug), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset('title', 'quantity', 'price', 'description');
                setData('image', null);
                setData('images', null);
                setData('category_id', []);
                 setImageSinglePreview(null);
                 setImagePreviews([]);
                toast({
                    title: "Success",
                    description: "Product created successfully",
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
                    <h4 className="card-title">{product ? 'Edit' : 'Add'} Product Main Image</h4>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Paperclip onClick={() => setShowFileInput(!showFileInput)} className='cursor-pointer'/>
                    </div>
                </div>
                {product?.image && !showFileInput && (
                    <img alt="gallery" 
                    className="object-cover object-center rounded" 
                    src={filePath + product.image}/>
                )}
                {!product || showFileInput && (
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
            
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Select Categories</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <ChartColumnStacked />
                    </div>
                </div>
                
                <div className="flex flex-col gap-3">
                <MultiSelect
                    options={mappedCategories}
                    placeholder="Select categories..."
                    maxSelected={2}
                    value={selectedCategories}  // Add this line
                    onSelectionChange={(selected) => {
                        setSelectedCategories(selected);  // Use the new selected value, not the old one
                        handleCategoriesChange(selected);
                    }}
                />

                <InputError message={errors.category_id} className="mt-1" />
                </div>
            </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Product Details</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Info />
                    </div>
                </div>
                <div className="mb-3">
                        <Label htmlFor="product-name" className="mb-2 block">Product Title</Label>
                        <Input value={data.title}
                        onChange={(e) => setData('title', e.target.value)} 
                        type="text" id="product-name" className="form-input" placeholder="Enter Product Title" aria-describedby="input-helper-text"/>
                        <InputError message={errors.title} className="mt-1" />
                    </div>
                <div className="flex flex-col gap-3">
                    <div className="grid md:grid-cols-2 gap-3">
                    <div className="">
                        <Label htmlFor="qty" className="mb-2 block">Quantity</Label>
                        <Input value={data.quantity}
                        onChange={(e) => setData('quantity', e.target.value)} 
                        type="number" id="qty" className="form-input" placeholder="Enter Quantity" aria-describedby="input-helper-text"/>
                        <InputError message={errors.title} className="mt-1" />
                    </div>

                    <div className="">
                            <Label htmlFor="price" className="mb-2 block">Price</Label>
                            <Input value={data.price}
                            onChange={(e) => setData('price', e.target.value)} type="number" id="price" className="form-input" placeholder='Enter Price'/>
                            <InputError message={errors.price} className="mt-1" />
                        </div>
                    </div>

                     <div>
                        <Label htmlFor="description" className="mb-2 block">
                            Describe your product
                        </Label>
                        <QuillEditor 
                            quillValue={data.description ?? ''}
                            setQuillValue={handleQuillChange} 
                        />
                            <InputError message={errors.description} className="mt-1" />
                    </div>

                    <div className="mt-2">
                        {product?.product_images && (
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="card-title">Uploaded Product Images</h4>
                        </div>
                        )}


                <div className="flex gap-3 mt-2">
                        <div className="flex flex-wrap gap-2">
                        {product?.product_images && (
                        product.product_images.map((prod: { id: number; image: string }) => (
                            <div key={prod.id} className="relative group">
                               <img key={prod.id} 
                                    src={filePath + prod.image} alt={`image-${prod.id}`} className="h-32 w-32 rounded"/>
                                <button
                                onClick={() => onRemove(prod.id)}
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

                 <div className={`${'flex justify-between items-center mb-2' } ${product?.product_images ? "mt-4" : " "}`} >
                    <h4 className="card-title">Add Product Images</h4>
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
                        {product ? 'Update' : 'Create'}
                    </Button>
                </div>
            </div>
        </div>
        <Toaster />
    </div>

    </Authenticated>
  )
}
