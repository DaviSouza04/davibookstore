export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPrice = (price: number): boolean => {
    return price > 0;
  };

  export const isValidTitle = (title: string): boolean => {
    return title.length >= 3;
};