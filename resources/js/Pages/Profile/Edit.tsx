import QuillEditor from '@/Components/editors/QuillEditor'
import InputError from '@/Components/InputError'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useToast } from '@/hooks/use-toast'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { generatePassword } from '@/utils/generatePassword'
import { router, useForm, usePage } from '@inertiajs/react'
import { ArrowLeft, ImagePlus, Loader, Lock } from 'lucide-react'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from '@/Components/ui/toaster'
import UserDocument from '../Dashboard/Users/UserDocument'

const FileUpload = lazy(
    () => import("@/Components/FileUpload"),
   );


export default function Create() {
    const filePath = usePage().props.filePath;
    const user = usePage().props.auth.user;
    const [quillValue, setQuillValue] = React.useState('');

    const [showFileInput, setShowFileInput] = React.useState(!user);
    const [imageSinglePreview, setImageSinglePreview] = useState<File | null>(null);
    
    const { toast } = useToast();
    
    useEffect(() => {
        if (user) {
            setData('first_name', user.first_name);
            setData('last_name', user.last_name);
            setData('email', user.email);
            setData('phone', user.phone);
            setData('alt_phone', user.alt_phone);
            setData('address', user.address ?? '');
            setData('bio', user.bio ?? '');
            // setData('role', user.roles ? user.roles[0].name : '');
            setQuillValue(user.bio ?? '');
            setShowFileInput(false);
        }
    }, [user]);

    const { data, setData, post, processing, errors, isDirty, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: generatePassword(),
        phone: '',
        alt_phone: '',
        address: '',
        bio: quillValue,
        role: '',
        photo_path: null as File | null,
    });
    const handleQuillChange = (value: string) => {
        setQuillValue(value);
        setData('bio', value);
    };

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setImageSinglePreview(files[0])
            setData('photo_path', files[0]);
        }
    };

    const handleFileRemove = () => {
        setData('photo_path', null);
    };

const handleBack = () => {
    if(isDirty){
        if(!window.confirm('You have unsaved changes. Are you sure you want to leave?')){return;}
    }
    router.get(route('users.index'));
}

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    post(route('profile.update'), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            setData('photo_path', null);
            setImageSinglePreview(null);
            toast({
                title: "Success",
                description: "Profile updated successfully",
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
                    <h4 className="card-title">{user.photo_path ? 'Edit' : 'Add'} Profile Picture</h4>
                    <div className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <ImagePlus size={20} className='text-slate-900 dark:text-slate-200' onClick={() => setShowFileInput(!showFileInput)} />
                    </div>
                </div>

                {user?.photo_path && !showFileInput && (
                    <img alt="gallery" 
                    className="object-cover object-center rounded" 
                    src={filePath + user.photo_path}/>
                )}
                {(!user.photo_path || showFileInput) && (
                    <div className="dropzone text-gray-700 dark:text-gray-300 h-52">
                    <Suspense fallback={<Loader className="mx-auto" size={20} />}>
                    <FileUpload 
                            onFilesSelected={handleFileSelect}
                            onFileRemove={handleFileRemove}
                            multiple={false}
                            acceptedTypes={['image/jpeg', 'image/png']}
                            maxSize={5 * 1024 * 1024} // 5MB
                            showPreview={true} 
                            />
                            <InputError message={errors.photo_path} className="mt-1" />
                            <Toaster />
                    </Suspense>
                        <div className=" w-full h-full flex items-center justify-center">
                            
                        </div>
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
            </div>

            {user && (
                <UserDocument />
            )}
            
        </div>

        <div className="lg:col-span-3 space-y-6">
            <div className="card p-6" style={{height: '30rem'}}>
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">User Details</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <ArrowLeft onClick={() => router.get(route('users.index'))} size={20} className='cursor-pointer text-slate-900 dark:text-slate-200' />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                <div className="grid md:grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="first_name" className="mb-2 block">First Name
                            <span className="text-red-500">*</span>
                            </Label>
                            <Input 
                              value={data.first_name}
                              onChange={(e) => setData('first_name', e.target.value)}
                             type="text" id="first_name" className="form-input" />
                             <InputError message={errors.first_name} className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="last_name" className="mb-2 block">Last Name
                            <span className="text-red-500">*</span>
                            </Label>
                            <Input value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} type="text" id="last_name" className="form-input"/>
                            <InputError message={errors.last_name} className="mt-1" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="email" className="mb-2 block">Email
                            <span className="text-red-500">*</span>
                            </Label>
                            <Input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" id="email" className="form-input" />
                            <InputError message={errors.email} className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="phone" className="mb-2 block">Phone</Label>
                            <Input value={data.phone} onChange={(e) => setData('phone', e.target.value)} type="text" id="phone" className="form-input"/>
                            <InputError message={errors.phone} className="mt-1" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="alt_phone" className="mb-2 block">Alt Phone</Label>
                            <Input value={data.alt_phone} onChange={(e) => setData('alt_phone', e.target.value)} type="number" id="alt_phone" className="form-input" />
                            <InputError message={errors.alt_phone} className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="address" className="mb-2 block">Address</Label>
                            <Input value={data.address} onChange={(e) => setData('address', e.target.value)} type="text" id="address" className="form-input"/>
                            <InputError message={errors.address} className="mt-1" />
                        </div>
                    </div>
                    

                    <div>
                        <Label htmlFor="bio" className="mb-2 block">
                            Bio
                        </Label>
                        <QuillEditor 
                            quillValue={data.bio ?? ''}
                            setQuillValue={handleQuillChange} 
                        />
                          <InputError message={errors.bio} className="mt-1" />
                    </div>
                   
                </div>
            </div>
            <div className="lg:col-span-4 mt-5">
                <div className="flex justify-end gap-3">
                    <Button disabled={processing} onClick={handleBack} type='button' className='rounded-[5px] px-4 py-2 bg-red-500 text-white'>Cancel</Button>
                    <Button disabled={processing} onClick={handleSubmit} type='button' className='rounded-[5px] px-4 py-2 bg-neutral-900 text-white'>
                       {processing ? <Loader className="animate-spin" size={25} /> : 'Submit'}</Button>
                </div>
            </div>
        </div>
        <Toaster />
    </div>
</Authenticated>
  )
}
