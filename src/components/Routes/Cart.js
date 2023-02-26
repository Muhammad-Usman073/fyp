import React, { useContext } from "react";
import CartContext from "../../Store/Context";
const Cart = () => {
  const cartItems = useContext(CartContext)
  return (
    <div>
      <h1>i am cart Component</h1>
    </div>
  );
};

export default Cart;
