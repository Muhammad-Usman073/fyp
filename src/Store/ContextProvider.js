import React,{useState } from "react";
import CartContext from "./Context";
const ContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0)
  const createContext = {
    totalItems,
    setTotalItems
  };
  return (
    <CartContext.Provider value={createContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
