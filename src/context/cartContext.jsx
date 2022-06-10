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

  const subtotalPrice = (restaurantId) => {
    return cart[restaurantId].items
      .reduce(
        (total, item) => (total += Number(item.totalPrice) * item.amount),
        0
      )
      .toFixed(2);
  };

  const totalPrice = (restaurantId) => {
    return (
      Number(subtotalPrice(restaurantId)) + cart[restaurantId].deliveryPrice
    ).toFixed(2);
  };

  const isEnoughForDelivering = (restaurantId) => {
    return Number(subtotalPrice(restaurantId)) >= cart[restaurantId].minOrder;
  };

  const remainingPrice = (restaurantId) => {
    return (
      cart[restaurantId].minOrder - Number(subtotalPrice(restaurantId))
    ).toFixed(2);
  };

  const addToCart = ({ data, restaurantId }) => {
    setCart((prevState) => ({
      ...prevState,
      [restaurantId]: {
        restaurantId,
        deliveryPrice: data.deliveryPrice,
        minOrder: data.minOrder,
        items: [...(prevState[restaurantId]?.items || []), data.menuItem],
      },
    }));
  };

  const updateAmount = ({ newAmount, restaurantId, itemId }) => {
    setCart((prevState) => ({
      ...prevState,
      [restaurantId]: {
        ...prevState[restaurantId],
        items: prevState[restaurantId].items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              amount: newAmount,
            };
          }
          return item;
        }),
      },
    }));
  };

  const removeFromCart = ({ restaurantId, itemId }) => {
    setCart((prevState) => ({
      ...prevState,
      [restaurantId]: {
        ...prevState[restaurantId],
        items: prevState[restaurantId].items.filter(
          (item) => item.id !== itemId
        ),
      },
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCartContext: addToCart,
        onUpdateAmount: updateAmount,
        onRemoveFromCart: removeFromCart,
        subtotalPrice,
        totalPrice,
        isEnoughForDelivering,
        remainingPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};