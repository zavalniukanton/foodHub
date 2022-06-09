import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = ({ data, restaurantId }) => {
    setCart((prevState) => ({
      ...prevState,
      [restaurantId]: {
        deliveryPrice: data.deliveryPrice,
        minOrder: data.minOrder,
        items: [...(prevState[restaurantId]?.items || []), data.menuItem],
      },
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCartContext: addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
