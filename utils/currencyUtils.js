export const calculateConversion = (amount, rates, currency) => {
    const numericAmount = parseFloat(amount || '0');
    if (!rates || !rates[currency]) return null;
    return (numericAmount * rates[currency]).toFixed(2);
  };
  
  export const prepareCurrencyList = (rates) => {
    return Object.keys(rates || {}).sort();
  };