import { createContext, useContext, useState } from "react";

const CartContext = createContext()

//create a provider
export const CartProvider = ({ children }) => {
  const [cartOn, setCartOn] = useState(false)
  // cartOn is a boolean to toggle the cart visibility
  function toggleCart(){
    setCartOn(prev => !prev)
  }
  // setCartOn is a function to update the cartOn state


  return (
    <CartContext.Provider value={{ cartOn, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
//create custom hook that would provide the context