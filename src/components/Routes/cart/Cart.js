import React from "react";
import CartModal from "./CartModal";

const Cart = ({ showCart, setShowCart }) => {
  return (
    <CartModal showCart={showCart} setShowCart={setShowCart}/>
  );
};

export default Cart;
