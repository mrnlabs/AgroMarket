import { Button } from '@/Components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { Toaster } from '@/Components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { User } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Camera, Trash2 } from 'lucide-react';
import React, { lazy } from 'react';

const ConfirmDialog = lazy(() => import("@/Components/ConfirmDialog"));


const UserHeader = ({data, errors, setData, user}: {
    data: any,
    errors: any,
    setData: (key: string, value: any) => void,
    user: User
}) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

       const [modalOpen, setModalOpen] = React.useState(false);
       const [dialogOpen, setDialogOpen] = React.useState(false);


    const [photoPathBlob, setPhotoPathBlob] = React.useState<Blob | null>(null);
    const [previewImage, setPreviewImage] = React.useState<string | null>(null);
    
    const [cover_photoPathBlob, setCoverPhotoPathBlob] = React.useState<Blob | null>(null);
    const [previewCoverPhotoImage, setPreviewCoverPhotoImage] = React.useState<string | null>(null);
    const auth = usePage().props.auth;
    const filePath = usePage().props.filePath;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const objectUrl = URL.createObjectURL(file);
        if(type == 'cover_photo'){
            setPreviewCoverPhotoImage(objectUrl);
            setCoverPhotoPathBlob(file);
            setData('cover_photo', file);
        }else{
            setPreviewImage(objectUrl);
            setPhotoPathBlob(file);
            setData('photo_path', file);
        }
       
        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    };


    const onDeleteCoverPhoto = () => {
        router.post(route('users.cover_photo.remove', user.slug), undefined, {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Cover photo deleted successfully",
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
        <div className="relative">
            <div className="relative h-72">
                           <input 
                                type="file" 
                                name="cover_photo" 
                                id="cover_photo" 
                                className="hidden" 
                                onChange={(e) => handleFileChange(e, 'cover_photo')}
                                accept="image/*"
                            />
                <img 
                    src={previewCoverPhotoImage || (user?.cover_photo ? filePath + user?.cover_photo : 'default-cover-image-url')}
                    alt="Cover" 
                    className="w-full h-full object-cover"
                />
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button onClick={() => setDropdownOpen(!dropdownOpen)} className="absolute right-4 bottom-4 px-4 py-2 bg-gray-900 rounded-md text-sm font-medium">
                            Edit cover photo
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Cover photo</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="cursor-pointer">
                                <label htmlFor="cover_photo">
                                    Upload Photo
                                    </label>
                                
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        {user?.cover_photo && (
                            <DropdownMenuItem className='text-red-500 cursor-pointer' onClick={() => setDialogOpen(true)}>
                            Remove
                            <DropdownMenuShortcut><Trash2 /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            
            <div className="px-4 pb-4">
                <div className="flex items-end justify-between mt-[-48px] relative">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                            <img 
                                src={previewImage || (user?.photo_path ? filePath + user?.photo_path : 'https://avatars.githubusercontent.com/u/56942052?s=400&u=6f22fc54e07a2216c867ae8f60b5d0e03dd821bc&v=4')}
                                alt="Profile Image" 
                                className="w-full h-full object-cover"
                            />
                            <input 
                                type="file" 
                                name="photo_path" 
                                id="photo_path" 
                                className="hidden" 
                                onChange={(e) => handleFileChange(e, 'photo_path')}
                                accept="image/*"
                            />
                        </div>
                        <button 
                            className="absolute bottom-0 right-0 p-2 bg-gray-900 bg-opacity-75 rounded-full text-white hover:bg-opacity-90 transition-all duration-200"
                        >
                            <label htmlFor="photo_path" className="cursor-pointer">
                                <Camera size={20} />
                            </label>
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmDialog 
                message="Are you sure you want to remove cover photo?"
                dialogOpen={dialogOpen} 
                setDialogOpen={setDialogOpen}
                onContinue={onDeleteCoverPhoto}
             />
             <Toaster />
        </div>
    );
};

export default UserHeader;