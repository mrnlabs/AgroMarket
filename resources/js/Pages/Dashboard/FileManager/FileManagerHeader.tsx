import { StoreDocuments } from '@/types'
import FolderCard from './FolderCard'
import { formatFileSize } from '@/utils/formatFileSize';

interface FileStats {
	totalSize: number;
	count: number;
  }
  

export default function FileManagerHeader({docs = []}: 
	{
		docs: StoreDocuments[]
	}
) {

	const initialTrashedDocs = docs.filter((doc: any) => doc.is_trashed == true);
	
	  function calculateFileStats(docs: any[], fileTypes: string[]): FileStats {
		return docs.reduce((acc: FileStats, doc) => {
		  const isMatchingType = fileTypes.some(type => 
			doc.document_name?.toLowerCase().endsWith(type.toLowerCase())
		  );
		  
		  if (isMatchingType) {
			return {
			  totalSize: acc.totalSize + (doc.size || 0),
			  count: acc.count + 1
			};
		  }
		  return acc;
		}, { totalSize: 0, count: 0 });
	  }


	const imageStats = calculateFileStats(docs, ['jpg', 'jpeg', 'png', 'PNG','JPG','JPEG']);
	const documentStats = calculateFileStats(docs, ['pdf', 'PDF']);
	const videoStats = calculateFileStats(docs, ['mp4', 'mov', 'avi', 'mkv']);
	const trashedStats = calculateFileStats(initialTrashedDocs, ['jpg', 'jpeg', 'png', 'PNG','JPG','JPEG','pdf', 'PDF','mp4', 'mov', 'avi', 'mkv']);

  return (
    <>
    <FolderCard 
        folderName='Documents' 
        storageUsage={Math.round((documentStats.totalSize / (10 * 1024 * 1024 * 1024)) * 100)} // Just Assumed 10GB total storage
        totalFiles={documentStats.count}
        totalSize={formatFileSize(documentStats.totalSize)}
      />
      <FolderCard 
        folderName='Pictures' 
        storageUsage={Math.round((imageStats.totalSize / (10 * 1024 * 1024 * 1024)) * 100)}
        totalFiles={imageStats.count}
        totalSize={formatFileSize(imageStats.totalSize)}
      />
      <FolderCard 
        folderName='Videos' 
        storageUsage={Math.round((videoStats.totalSize / (10 * 1024 * 1024 * 1024)) * 100)}
        totalFiles={videoStats.count}
        totalSize={formatFileSize(videoStats.totalSize)}
      />
	  <FolderCard 
        folderName='Trashed' 
        storageUsage={Math.round((trashedStats.totalSize / (10 * 1024 * 1024 * 1024)) * 100)}
        totalFiles={trashedStats.count}
        totalSize={formatFileSize(trashedStats.totalSize)}
      />
    
	
	</>
  )
}
