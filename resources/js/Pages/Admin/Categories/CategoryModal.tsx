import FileUpload from "@/Components/FileUpload"
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "@inertiajs/react"
import { Loader } from "lucide-react"

function CategoryModal({
    open,
    setOpen
}: {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const { toast } = useToast();

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        image: null as File | null
    });

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setData('image', files[0]);
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
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] top-[5%] translate-y-0">
                <DialogHeader>
                    <DialogTitle className="card-title">Create Category</DialogTitle>
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
                            placeholder="Enter Title" 
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
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="rounded-[5px] mt-2">
                            {processing ? <Loader className="animate-spin" size={25} /> : 'Create'}
                            </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default CategoryModal
