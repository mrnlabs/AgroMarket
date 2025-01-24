import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { MoreVertical,  Link, Share2, Download, ShieldCheck } from 'lucide-react';
import {  StoreDocumentsProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/Components/ui/toaster';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

export default function DropdownAction({doc}: StoreDocumentsProps) {
    const filePath = usePage().props.filePath;

    const handleCopy = () => {
        navigator.clipboard.writeText(filePath + (doc?.document_path ?? ''));
        toast({
            title: "Success",
            description: "Link copied successfully",
            variant: "default",
        })
    };

    const handleShare = () => {
        const shareData = {
            title: doc?.document_name,
            text: "Check out this file",
            url: filePath + (doc?.document_path ?? ''),
        }
        navigator.share(shareData);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath + (doc?.document_path ?? '');
        link.setAttribute('download', doc?.document_path ?? 'default_filename');
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleVerify = () => {

        router.post(route('dashboard.store.verify_document', doc?.id), undefined, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Document verified successfully",
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
    <>
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
        <MoreVertical className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem className='cursor-pointer' onClick={handleCopy}>
          <Link className="w-4 h-4 mr-3" />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={handleShare}>
          <Share2 className="w-4 h-4 mr-3" />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={handleDownload}>
          <Download className="w-4 h-4 mr-3" />
          Download
        </DropdownMenuItem>
        
        <DropdownMenuItem className='cursor-pointer' onClick={handleVerify} className='cursor-pointer'>
          <ShieldCheck className="w-4 h-4 mr-3" />
          Verify
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Toaster />
    </>
  );
};

