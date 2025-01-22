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
import { useToast } from "@/hooks/use-toast"
import { useForm } from "@inertiajs/react"
import { Loader } from "lucide-react"
import {  useState } from "react"

function LogoModal({
    uploadType,
    open,
    setOpen
}: {
    uploadType: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const { toast } = useToast();
    
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { data, setData, post,  processing, errors } = useForm({
        image: null as File | null
    });

        

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
        if (!data.image) { return; }
        const formData = new FormData();
        if (data.image) {
            formData.append('image', data.image);
        }

            post(route('dashboard.stores.update.store_image', uploadType), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    setOpen(false);
                    setData({
                        image: null
                    });
                    setImagePreview(null);
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
            <DialogContent className="sm:max-w-[425px] top-[10%] translate-y-0">
                <DialogHeader>
                    <DialogTitle className="card-title">Upload {uploadType == 'cover' ? 'Cover Photo' : 'Logo '}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
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
                        <Button type="submit" className="rounded-[5px] mt-2 w-full">
                            {processing ? <Loader className="animate-spin" size={25} /> : 'Upload'}
                            </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default LogoModal
