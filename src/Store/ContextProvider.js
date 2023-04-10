import { useState } from "react";
import CartContext from "./CartContext";
const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const addToCart = (name, price, image) => {
    if (items.length > 0) {
      return items.pop();
    } else {
      setItems((prevState) => [...prevState, { name, price, image }]);
    }
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
