import { File, Paperclip } from 'lucide-react'
import React from 'react'

export default function UserDocument() {
  return (
    <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Documents</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                    <Paperclip size={20} />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                <div className="grid md:grid-cols-2 gap-3">
                                            <div className="p-2 border border-gray-200 dark:border-gray-700 rounded mb-2">
                                                <div className="flex items-center">
                                                    <div className="h-9 w-9 rounded flex justify-center items-center text-primary bg-primary/20 me-3">
                                                        <File size={20} />
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="text-sm font-medium">FICA.pdf</a>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="p-2"><i className="mgc_download_line text-xl"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-2 border border-gray-200 dark:border-gray-700 rounded mb-2">
                                                <div className="flex items-center">
                                                    <div className="h-9 w-9 rounded flex justify-center items-center text-primary bg-primary/20 me-3">
                                                        <File size={20} />
                                                    </div>
                                                    <div className="">
                                                        <a href="#" className="text-sm font-medium">ID.pdf</a>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="p-2"><i className="mgc_download_line text-xl"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </div>
            </div>
  )
}
