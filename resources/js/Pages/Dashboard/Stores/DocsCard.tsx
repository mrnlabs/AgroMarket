import { Button } from '@/Components/ui/button';
import React from 'react'

export default function DocsCard({setModalOpen, setUploadType}: any) {
  return (
    <div className="card p-6">
    <div className="flex justify-between items-center mb-4">
        <p className="card-title">Upload ID Documents <span className="text-red-500">*</span></p>
        <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
        {/* <Lock size={20} className='text-slate-900 dark:text-slate-200' /> */}
        </div>
    </div>

    <div className="flex flex-col gap-3">
    <Button onClick={() => {
            setModalOpen(true)
            setUploadType('ID')
            }}
             className='w-full'>Upload</Button>

    </div>
</div>
  )
}
