import { createContext } from "react";
const CartContext = createContext({
  totalItems:0,
  cart:[],

});

export default CartContext;
