import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import CustomTooltip from '@/Layouts/Shared/CustomTooltip';
import { getDocDisplayTitle } from '@/utils/getDocDisplayTitle';
import { router } from '@inertiajs/react';
import { CircleCheck, CircleX } from 'lucide-react';
import React, { lazy, useState } from 'react';

const ConfirmDialog = lazy(() => import("@/Components/ConfirmDialog"));

export default function DocsCard({ storeDoc, setModalOpen, setUploadType,uploadType }: any) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const isDocVerified = storeDoc?.store_documents.find((doc: any) => doc.document_type === uploadType)?.verified_at

    const handleDocUpload = () => {
        if (storeDoc) {
            setDialogOpen(true);
            return;
        }
            setModalOpen(true);
            setUploadType(uploadType);
    }

    const deleteDocument = () => {
        //get doc id where document_type = uploadType
        const storeId = storeDoc.store_documents.find((doc: any) => doc.document_type === uploadType).id;
        router.post(route('fica.docs.destroy', storeId), undefined, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Document deleted successfully",
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
        })
    }
  return (
    <div className="card p-6">{uploadType}
      <div className="flex justify-between items-center mb-4">
        <p className="card-title">
          Upload {getDocDisplayTitle(uploadType)} <span className="text-red-500">*</span>
        </p>
        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
            { isDocVerified ? (
              <CustomTooltip content="Verified">
                <CircleCheck size={20} className="text-green-900 dark:text-green-500" />
              </CustomTooltip>
            ) : (
              <CustomTooltip content="Unverified">
                <CircleX size={20} className='text-red-900 dark:text-red-500' />
              </CustomTooltip>
            )
            }
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-center">
            {storeDoc ? (
              <CustomTooltip content="Document uploaded">
               <CircleCheck size={70} className="text-green-900 dark:text-green-500" />
            </CustomTooltip>
               
            ) : (
              <CustomTooltip content="Document not uploaded">
              <CircleX size={70} className="text-red-500 dark:text-red-500" />
              </CustomTooltip>
                
            )
            }
        
        </div>
        <Button
          onClick={handleDocUpload}
          className={`${storeDoc ? 'bg-red-500 hover:bg-red-500 dark:bg-red-500 dark:text-white dark:hover:bg-red-500' : ''} w-full`}
        >
          {storeDoc ? 'Delete' : 'Upload'}
        </Button>
      </div>
      <ConfirmDialog 
                message="Are you sure you want to delete this document?"
                dialogOpen={dialogOpen} 
                setDialogOpen={setDialogOpen}
                onContinue={deleteDocument}
             />
             <Toaster/>
    </div>
  );
}