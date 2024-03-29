// CartModal.js
import React, { Fragment } from "react";
import { createPortal } from "react-dom";

const BackDrop = (props) => {
  const backDropHandler = () => {
    if (props.showCart === true) {
      props.setShowCart(false);
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };
  return (
    <div
      onClick={backDropHandler}
      className="bg-black z-40 cursor-pointer opacity-[0.5] fixed top-0 bottom-0 left-0 right-0 "
    />
  );
};

const CartOverLay = ({ children, className }) => {
  return (
    <div
      className={`bg-white z-50 fixed right-0 top-0 bottom-0 left-[65%] ${className} `}
    >
      {children}
    </div>
  );
};

const CartModal = ({ showCart, setShowCart, children, className }) => {
  const domElements = document.getElementById("overLays");

  return (
    <Fragment>
      {createPortal(
        <BackDrop showCart={showCart} setShowCart={setShowCart} />,
        domElements
      )}
      {createPortal(
        <CartOverLay className={className}>{children}</CartOverLay>,
        domElements
      )}
    </Fragment>
  );
};

export default CartModal;
