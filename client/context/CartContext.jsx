import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => 
    {
      const exist=prevCart.find((item)=> item._id === product._id);
      if(exist)
      {
        return prevCart.map((item)=>
        
          item._id === product._id ? {...item, qty:item.qty+1}: item
        );
      }
      return [...prevCart,{...product,qty:1}]
  });
  }


  const increaseQty=(id)=>
  {
    setCart((prevCart) => 
    prevCart.map((item)=>
          item._id === id ? {...item, qty:item.qty+1}: item
      )
    );
  }

   const decreaseQty=(id)=>
  {
    setCart((prevCart) => 
    prevCart.map((item)=>
          item._id === id ? {...item, qty:item.qty-1}: item
      )
      .filter((item)=>item.qty>0)
    );
  }

  const removeFromCart=(id)=>
  {
    setCart((prevCart)=>prevCart.filter((item)=>item._id!==id));
  }

  const clearCart=()=>
  {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
