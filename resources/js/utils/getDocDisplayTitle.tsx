export const getDocDisplayTitle = (uploadType: string) => {
    // if (documentTitle) return documentTitle;
    
    switch (uploadType) {
      case 'ID/PASSPORT':
        return 'Identity Document';
      case 'BUSINESS_REGISTRATION':
        return 'Business Registration';
      case 'PROOF_OF_RESIDENCE':
        return 'Proof of Residence';
      default:
        return 'Document';
    }
  };