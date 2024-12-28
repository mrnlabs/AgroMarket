export const formatCurrency = (amount: number) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error('Input must be a valid number');
    }
    const parts = Math.abs(amount).toFixed(2).split('.');
    
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const formattedAmount = `R${integerPart}`;    
    return amount < 0 ? `-${formattedAmount}` : formattedAmount;
  };