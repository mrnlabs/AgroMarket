import QuillEditor from '@/Components/editors/QuillEditor'
import InputError from '@/Components/InputError'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { useToast } from '@/hooks/use-toast'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { RolesIndexProps, User } from '@/types'
import { generatePassword } from '@/utils/generatePassword'
import { router, useForm, usePage } from '@inertiajs/react'
import { ArrowLeft, ImagePlus, Loader, Lock } from 'lucide-react'
import React, { lazy, Suspense, useEffect } from 'react'
import UserDocument from './UserDocument'
import UserDangerZone from './UserDangerZone'
import { Toaster } from '@/Components/ui/toaster'

const FileUpload = lazy(
    () => import("@/Components/FileUpload"),
   );


export default function Create({roles, user}:{
    roles:RolesIndexProps, 
    user:User
}) {
    const filePath = usePage().props.filePath;
    const [quillValue, setQuillValue] = React.useState('');

    const [showFileInput, setShowFileInput] = React.useState(!user);
    const { toast } = useToast();
    

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

    useEffect(() => {
        //Its edit
        if (user) {
            //@ts-ignore
            setData({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                alt_phone: user.alt_phone,
                address: user.address ?? '',
                bio: user.bio ?? '',
                role: user.roles[0]?.name
            });
        }
    }, [user]);

    const handleQuillChange = (value: string) => {
        setQuillValue(value);
        setData('bio', value);
    };

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
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

const handleUpdate = () => {
    if(!isDirty){
        toast({
            title: "Error",
            description: "No changes detected",
            variant: "destructive",
        })
        return;
    }
    post(route('users.update', user.slug), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            reset('first_name', 'last_name', 'email', 'phone', 'alt_phone', 'role', 'bio', 'password');
            setData('photo_path', null);
            setShowFileInput(false);
            toast({
                title: "Success",
                description: "User updated successfully",
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
    
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('alt_phone', data.alt_phone);
    formData.append('bio', data.bio);
    formData.append('phone', data.password);
    if (data.photo_path) {
        formData.append('photo_path', data.photo_path);
    }
    if(user){return handleUpdate();}
    post(route('users.store'), {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            reset('first_name', 'last_name', 'email', 'phone', 'alt_phone', 'role', 'bio', 'password');
            setData('photo_path', null);
            toast({
                title: "Success",
                description: "User created successfully",
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
                    <h4 className="card-title">{user ? 'Edit' : 'Create'} Profile Picture</h4>
                    <div className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <ImagePlus size={20} className='text-slate-900 dark:text-slate-200' onClick={() => setShowFileInput(!showFileInput)} />
                    </div>
                </div>

                {user?.photo_path && !showFileInput && (
                    <img alt="gallery" 
                    className="object-cover object-center rounded" 
                    src={filePath + user.photo_path}/>
                )}
                {!user || showFileInput && (
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
                <div className=""></div>
            </div>

            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Role <span className="text-red-500">*</span></p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Lock size={20} className='text-slate-900 dark:text-slate-200' />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                <div>
                    {roles && (
                        <Select
                        value={data.role || user?.roles[0]?.name}
                        onValueChange={(value) => setData('role', value)}
                        >
                        <SelectTrigger className="w-full form-select">
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(roles).map(([id, name]) => (
                            <SelectItem key={id} value={name}>
                                {name}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    )}
                    {!roles && <Loader className="mx-auto animate-spin" size={20} />}
                    <InputError message={errors.role} className="mt-1" />
                    </div>

                </div>
            </div>

            {user && (
                <UserDocument />
            )}
            
            {user && (
                <UserDangerZone user={user} />
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
    </div>
</Authenticated>
  )
}
