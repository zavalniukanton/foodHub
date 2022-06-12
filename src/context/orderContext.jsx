import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addToOrders = (order) => {
    setOrders((prevState) => [...prevState, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, onAddToOrders: addToOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
