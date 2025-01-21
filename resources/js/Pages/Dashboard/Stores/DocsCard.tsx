import { Button } from '@/Components/ui/button';
import { getDocDisplayTitle } from '@/utils/getDocDisplayTitle';
import { CircleCheck, CircleX, FileX } from 'lucide-react';
import React from 'react';

export default function DocsCard({ storeDoc, setModalOpen, setUploadType,uploadType }: any) {

    const handleDocUpload = () => {
        // if (storeDoc) {
            setModalOpen(true);
            setUploadType(uploadType);
    }
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <p className="card-title">
          Upload {getDocDisplayTitle(uploadType)} <span className="text-red-500">*</span>
        </p>
        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
            {storeDoc ? (
                <CircleCheck size={20} className='text-green-900 dark:text-green-500' />
            ) : (
                <CircleX size={20} className='text-red-900 dark:text-red-500' />
            )
            }
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-center">
            {storeDoc ? (
                <CircleCheck size={70} className="text-green-900 dark:text-green-500" />
            ) : (
                <CircleX size={70} className="text-red-500 dark:text-red-500" />
            )
            }
        
        </div>
        <Button
          onClick={handleDocUpload}
          className={`${storeDoc ? 'bg-red-500 hover:bg-red-600!' : ''} w-full`}
        >
          {storeDoc ? 'Replace' : 'Upload'}
        </Button>
      </div>
    </div>
  );
}