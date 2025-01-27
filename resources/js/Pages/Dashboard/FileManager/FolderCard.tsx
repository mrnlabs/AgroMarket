import { Folder } from "lucide-react"

export default function FolderCard(
	{folderName, storageUsage, totalFiles, totalSize}: {
	  folderName: string, 
	  storageUsage: number, 
	  totalFiles: number,
	  totalSize: string
	}
  ) {
	return (
	  <div className="card">
		<div className="p-5">
		  <div className="space-y-4 text-gray-600 dark:text-gray-300">
			<div className="flex items-start relative gap-5">
			  <div className="flex items-center gap-3">
				<div className="h-14 w-14">
				  <span className="flex h-full w-full items-center justify-center">
					<Folder className='h-full w-full fill-warning text-warning' />
				  </span>
				</div>
				<div className="space-y-1">
				  <p className="font-semibold text-base">{folderName}</p>
				  <p className="text-xs">Using {storageUsage}% of storage</p>
				</div>
			  </div>
			  {/* ... rest of your dropdown code ... */}
			</div>
			<div className="flex items-center gap-2">
			  <p className="text-sm">{totalSize}</p>
			  <span className="p-0.5 bg-gray-600 rounded-full"></span>
			  <p className="text-sm">{totalFiles} Files</p>
			</div>
		  </div>
		</div> 
	  </div>
	)
  }