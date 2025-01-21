import { Button } from '@/Components/ui/button';
import { getDocDisplayTitle } from '@/utils/getDocDisplayTitle';
import { FileX } from 'lucide-react';
import React from 'react';

export default function DocsCard({ setModalOpen, setUploadType,uploadType }: any) {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <p className="card-title">
          Upload {getDocDisplayTitle(uploadType)} <span className="text-red-500">*</span>
        </p>
        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
          {/* <Lock size={20} className='text-slate-900 dark:text-slate-200' /> */}
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-center">
          {/* <FileX size={70} className="text-red-900 dark:text-red-500" /> */}
        </div>
        <Button
          onClick={() => {
            setModalOpen(true);
            setUploadType(uploadType);
          }}
          className="w-full"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}