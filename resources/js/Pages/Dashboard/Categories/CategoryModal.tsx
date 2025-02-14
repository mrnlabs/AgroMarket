import FileUpload from "@/Components/FileUpload"
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Category } from "@/types"
import { useForm } from "@inertiajs/react"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

function CategoryModal({
    category,
    open,
    setOpen
}: {
    category: Category,
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const { toast } = useToast();
    
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { data, setData, post,  processing, errors } = useForm({
        name: '',
        image: null as File | null
    });


    useEffect(() => {
        if (category) {
            setData('name', category.name);
        }else{
            setData('name', '');
        }
    }, [category]);
        

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setData('image', files[0]);
            setImagePreview(URL.createObjectURL(files[0]));
        }
    };

    const handleFileRemove = () => {
        setData('image', null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create FormData instance for file upload
        const formData = new FormData();
        formData.append('name', data.name);
        if (data.image) {
            formData.append('image', data.image);
        }

        const handleCreate = () => {
            post(route('categories.store'), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    setOpen(false);
                    setData({
                        name: '',
                        image: null
                    });
                    toast({
                        title: "Success",
                        description: "Category created successfully",
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

        const handleUpdate = () => {
            post(route('categories.update', category.id), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    setOpen(false);
                    setData({
                        name: '',
                        image: null
                    });
                    toast({
                        title: "Success",
                        description: "Category updated successfully",
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

        if(category){
            //its update
            handleUpdate();
            }else{
                handleCreate()
            }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] top-[5%] translate-y-0">
                <DialogHeader>
                    <DialogTitle className="card-title">{category ? 'Update' : 'Create'} Category</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <Label htmlFor="name" className="mb-2 block">Category Name</Label>
                        <Input 
                            value={data.name} 
                            onChange={(e) => setData('name', e.target.value)} 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-input" 
                            placeholder="Enter Category Name" 
                            aria-describedby="input-helper-text"
                        />
                         {errors.name && (<p className="text-sm text-red-500 mt-1">{errors.name}</p>)}
                    </div>
                    <div className="mt-2">
                        <FileUpload 
                        onFilesSelected={handleFileSelect}
                        onFileRemove={handleFileRemove}
                        multiple={false}
                        acceptedTypes={['image/jpeg', 'image/png']}
                        maxSize={5 * 1024 * 1024} // 5MB
                        showPreview={true} 
                        />
                        {errors.image && (<p className="text-sm text-red-500 mt-1">{errors.image}</p>)}
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" className="mt-2 h-32 w-full rounded" />
                        )}
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="rounded-[5px] mt-2">
                            {processing ? <Loader className="animate-spin" size={25} /> : category ? 'Update' : 'Create'}
                            </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default CategoryModal
