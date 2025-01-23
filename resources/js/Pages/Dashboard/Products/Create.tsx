import QuillEditor from '@/Components/editors/QuillEditor';
import InputError from '@/Components/InputError';
import MultiSelect from '@/Components/MultiSelect'
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { CategoriesTableProps, ProductCardProps } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { ChartColumnStacked, Info, Link, Loader, Paperclip, Tags, X } from 'lucide-react';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from '@/Components/ui/toaster'
import Checkbox from '@/Components/Checkbox';
import { AuthGuard } from '@/guards/authGuard';
import ProductTags from './ProductTags';
import TinyMCE from '@/Components/editors/TinyMCE';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select';
import ProductDangerZone from './ProductDangerZone';

const FileUpload = lazy(
    () => import("@/Components/FileUpload"),
   );

export default function Create({categories, product, tags, products}: {
    categories : CategoriesTableProps,
    product: any,//for edit
    tags: string[],
    products: ProductCardProps
}) {
    const filePath = usePage().props.filePath;
    const auth = usePage().props.auth;

    const { toast } = useToast();
    
    const [imageSinglePreview, setImageSinglePreview] = useState<File | null>(null);
    const [imagePreviews, setImagePreviews] = useState<File[]>([]);
    const [quillValue, setQuillValue] = React.useState('');
    const [selectedCategories, setSelectedCategories] = useState<{ value: string; label: string }[]>([]);
    const [selectedCrossells, setSelectedCrossells] = useState<{ value: string; label: string }[]>([]);
    const [selectedUpsells, setSelectedUpsells] = useState<{ value: string; label: string }[]>([]);
    const [showFileInput, setShowFileInput] = React.useState(!product);

    const [existingTags, setExistingTags] = useState(false);
    
    const mappedProducts = products 
      ? Object.entries(products).map(([id, title]) => ({
          value: id,
          label: title.toString()
        }))
      : [];
      
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
            setData('short_description', product.short_description);
            setData('sale_price', product.sale_price);
            setData('is_on_sale', product.is_on_sale);
            setData('stock_status', product.stock_status);
            setData('minimum_order', product.minimum_order);
            setData('is_featured', product.is_featured);

            const defaultCategories = product.categories.map((category: { id: number; name: string }) => ({
                value: category.id.toString(),
                label: category.name
            }));
            setSelectedCategories(defaultCategories); 
            const tags = product.tags.map((tag: { id: number; name: string }) => tag.name);
            setData('tags', tags);
            console.log(data.tags)
        }
    },[product])


      const { data, setData, post, processing, errors, patch, isDirty, reset } = useForm({
              title: '',
              description: '',
              short_description: quillValue,
              price: '',
              quantity: '',
              stock_status: '',
              sale_price: '',
              is_on_sale: false,
              minimum_order: '',
              is_featured: false,
              category_id: [] as string[],
              crossell_id: [] as string[],
              upsell_id: [] as string[],
              image: null as File | null,
              images: null as File[] | null,
              tags: [] as string[]
          });

        const handleMultiselectChange = (selectedCategories: { value: string }[],type: string) => {
            switch (type) {
                case 'categories':
                    setData('category_id', selectedCategories.map((category) => category.value));
                    break;
                case 'crossells':
                    setData('crossell_id', selectedCategories.map((cross) => cross.value));
                    break;
                case 'upsells':
                    setData('upsell_id', selectedCategories.map((upsell) => upsell.value));
                    break;
                default:
                    break;
            }
            
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

    const onRemoveDBImages = (id: number) => {
        if(!confirm('Are you sure you want to delete this image?')) return;
        post(route('dashboard.products.removeProductImage', id), {
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
        setData('short_description', value);
    };

    const handleUpdate = (formData: FormData) => {
        formData.append('_method', 'PATCH');
        // console.log(data);return
        post(route('dashboard.products.update', product.slug), {
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
        post(route('dashboard.products.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset('title', 'quantity', 'price','short_description', 'description', 'sale_price', 'is_on_sale', 'minimum_order', 'is_featured','stock_status');
                setData('image', null);
                setData('images', null);
                setData('category_id', []);
                setData('tags', []);
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
                    <h4 className="card-title">{product ? 'Edit' : 'Set'} Product Image</h4>
                    {product && (
                        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                            <Paperclip onClick={() => setShowFileInput(!showFileInput)} className='cursor-pointer'/>
                        </div>
                    )}
                </div>

                {product?.image && !showFileInput && (
                    <img 
                        alt="gallery" 
                        className="object-cover object-center rounded" 
                        src={filePath + product.image}
                    />
                )}

                {(!product || showFileInput) && (
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
                    <p className="card-title">Select Product Categories</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <ChartColumnStacked />
                    </div>
                </div>
                
                <div className="flex flex-col gap-3">
                <MultiSelect
                    options={mappedCategories}
                    placeholder="Select product categories..."
                    maxSelected={2}
                    value={selectedCategories}
                    onSelectionChange={(selected) => {
                        setSelectedCategories(selected); 
                        handleMultiselectChange(selected,'categories');
                    }}
                />

                <InputError message={errors.category_id} className="mt-1" />
                </div>
            </div>
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Product Tags</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Tags />
                    </div>
                </div>
                
                <div className="flex flex-col gap-3">
                <ProductTags 
                    value={data.tags}
                    setData={(tags) => setData('tags', tags)}
                    initialTags={tags}
                    existingTags={existingTags}
                />
               
                <div 
                    onClick={() => setExistingTags(true)} 
                    className="text-sm underline text-blue-500 cursor-pointer">
                    Select From Existing Tags
                </div>

                <InputError message={errors.category_id} className="mt-1" />
                </div>
            </div>
            <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Linked Products</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Link />
                    </div>
                </div>
                <p>Upsells</p>
            <MultiSelect
                    options={mappedProducts}
                    placeholder="Select product..."
                    maxSelected={2}
                    value={selectedUpsells}
                    onSelectionChange={(selected) => {
                        setSelectedUpsells(selected); 
                        handleMultiselectChange(selected,'upsells');
                    }}
                />
                
                <p className='mt-3'>Crossells</p>
                    <MultiSelect
                            options={mappedProducts}
                            placeholder="Select product ..."
                            maxSelected={2}
                            value={selectedCrossells}
                            onSelectionChange={(selected) => {
                                setSelectedCrossells(selected); 
                                handleMultiselectChange(selected,'crossells');
                            }}
                        />
            </div>
            {product && (
                <ProductDangerZone product={product} />
            )}


        </div>

        <div className="lg:col-span-3 space-y-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    {auth.user?.store && (
                        <p className="card-title">Create Product for {auth.user?.store ? auth.user.store.name : ''}</p>
                    )}
                    {!auth.user?.store && (
                        <p className="card-title">Product Details</p>
                    )}
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
                    <div className="grid md:grid-cols-3 gap-3">
                    <div className="">
                        <Label htmlFor="qty" className="mb-2 block">Quantity</Label>
                        <Input value={data.quantity}
                        onChange={(e) => setData('quantity', e.target.value)} 
                        type="number" id="qty" className="form-input" placeholder="Enter Quantity" aria-describedby="input-helper-text"/>
                        <InputError message={errors.title} className="mt-1" />
                    </div>

                    <div className="">
                            <Label htmlFor="price" className="mb-2 block">Regular Price</Label>
                            <Input value={data.price}
                            onChange={(e) => setData('price', e.target.value)} type="number" id="price" className="form-input" placeholder='Enter Price'/>
                            <InputError message={errors.price} className="mt-1" />
                        </div>

                        <div className="mt-6 w-50">
                        <div className="flex items-center space-x-2">
                        <Checkbox onChange={(e) => setData('is_on_sale', e.target.checked)} checked={data.is_on_sale} id="onSale" />
                        <label htmlFor="onSale" className="border-0 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            On Sale ?
                        </label>
                        </div>
                        </div>

                        {data.is_on_sale ? (
                            <>
                        <div className="">
                            <Label htmlFor="sale_price" className="mb-2 block">Sale Price</Label>
                            <Input value={data.sale_price}
                            onChange={(e) => setData('sale_price', e.target.value)} 
                            type="number" id="sale_price" className="form-input" placeholder="Enter Sale Price" aria-describedby="input-helper-text"/>
                            <InputError message={errors.sale_price} className="mt-1" />
                        </div>
                        <div className="">
                            <Label htmlFor="minimum_order" className="mb-2 block">Minimum Order</Label>
                            <Input value={data.minimum_order}
                            onChange={(e) => setData('minimum_order', e.target.value)} 
                            type="number" min={1} id="minimum_order" className="form-input" placeholder="Enter Minimum Order" aria-describedby="input-helper-text"/>
                            <InputError message={errors.minimum_order} className="mt-1" />
                        </div>
                        </>
                        ): (
                            ''
                        )}
                      <div>
                        <Label htmlFor="short_description" className="mb-2 block">
                            Stock Status
                        </Label>
                        <Select onValueChange={(e) => setData('stock_status', e)} value={data.stock_status}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select stock status" defaultValue={data.stock_status} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Stock Status</SelectLabel>
                                <SelectItem className='text-green-500 cursor-pointer' value="in_stock">In Stock</SelectItem>
                                <SelectItem className='text-red-500 cursor-pointer' value="sold_out">Sold Out</SelectItem>
                                <SelectItem className='text-yellow-500 cursor-pointer' value="on_backorder">On Backorder</SelectItem>
                                <SelectItem className='text-blue-500 cursor-pointer' value="pre_order">Pre-Order</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            <InputError message={errors.description} className="mt-1" />
                    </div>
                        
                    </div>

                     <AuthGuard 
                            roles={["Admin", "SuperAdmin"]} 
                            permissions={["can_manage_system"]}
                            requireAll={true}>
                            <div className="items-top flex space-x-2">
                            <Checkbox id="is_featured" onChange={(e) => setData('is_featured', e.target.checked)} checked={data.is_featured} />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="is_featured"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Set as Featured
                                </label>
                                <p className="text-sm text-muted-foreground">
                                Featured products are displayed on the top home page.
                                </p>
                            </div>
                            </div>
                     </AuthGuard>
                    


                     <div>
                        <Label htmlFor="short_description" className="mb-2 block">
                            Product Short Description
                        </Label>
                        <QuillEditor 
                            quillValue={data.short_description ?? ''}
                            setQuillValue={handleQuillChange} 
                        />
                            <InputError message={errors.short_description} className="mt-1" />
                    </div>

                    <div>
                        <Label htmlFor="short_description" className="mb-2 block">
                            Product Description
                        </Label>
                        <TinyMCE
                            placeholder="Amazing product description..."
                            value={data.description}
                            onChange={(content) => setData('description', content)}
                            />
                            <InputError message={errors.description} className="mt-1" />
                    </div>
                    
                    
                    <div className={`${product?.product_images.length > 0 ? 'mt-2' : ''}`}>
                        {product?.product_images.length > 0 && (
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
                                onClick={() => onRemoveDBImages(prod.id)}
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
