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
import { Loader, Trash2 } from "lucide-react"
import {  useState } from "react"

function FicaDocsModal({
    documentTitle,
    uploadType,
    open,
    setOpen
}: {
    documentTitle: string
    uploadType: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const { toast } = useToast();
    
    const [fileName, setFileName] = useState<File | null>(null);

    const { data, setData, post,  processing, errors } = useForm({
        doc: null as File | null
    });

    const getDisplayTitle = () => {
        if (documentTitle) return documentTitle;
        
        switch (uploadType) {
          case 'ID':
            return 'Identity Document';
          case 'PASSPORT':
            return 'Passport';
          case 'PROOF_OF_RESIDENCE':
            return 'Proof of Residence';
          default:
            return 'Document';
        }
      };

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            setData('doc', files[0]);
            setFileName(files[0]);
        }
    };

    const handleFileRemove = () => {
        setFileName(null);
        setData('doc', null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.doc) { return; }
        const formData = new FormData();
        if (data.doc) {
            formData.append('image', data.doc);
        }

            post(route('fica.docs.store', uploadType), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    setOpen(false);
                    setData({
                        doc: null
                    });
                    setFileName(null);
                    toast({
                        title: "Success",
                        description: getDisplayTitle() + " uploaded successfully",
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
                    <DialogTitle className="card-title">Upload {getDisplayTitle()}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <FileUpload 
                        onFilesSelected={handleFileSelect}
                        onFileRemove={handleFileRemove}
                        multiple={false}
                        acceptedTypes={['image/jpeg', 'image/png', 'image/jpg','application/pdf']} 
                        maxSize={5 * 1024 * 1024} // 5MB
                        showPreview={true} 
                        />
                        {errors.doc && (<p className="text-sm text-red-500 mt-1">{errors.doc}</p>)}
                        <div className="flex items-center mt-3 space-x-4">
                            {fileName && <p className="text-sm text-success mt-1">{fileName.name}</p>}
                            {fileName && <Trash2 onClick={handleFileRemove} size={20} className="text-red-500 cursor-pointer"/>}
                            
                        </div>
                    </div>
                    <DialogFooter>
                        <Button disabled={processing} type="submit" className="rounded-[5px] mt-2 w-full">
                            {processing ? <Loader className="animate-spin" size={25} /> : 'Upload'}
                            </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default FicaDocsModal
