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

const CartModal = ({ showCart, setShowCart }) => {
  const cartHandler = () => {
    if (showCart === true) {
      setShowCart(false);
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };
  const hoverAffect = "hover:border-[1px] hover:border-black hover:text-black ";
  const className = "flex flex-col py-[1.5rem] justify-between items-center";
  return (
    <Fragment>
      {createPortal(
        <BackDrop showCart={showCart} setShowCart={setShowCart} />,
        document.getElementById("overLays")
      )}
      {createPortal(
        <CartOverLay className={className}>
          <div className="flex items-center gap-[18rem] ">
            <p className="text-[16px] text-gray-500 font-medium font-Sans">
              Shopping Cart
            </p>
            <span
              onClick={cartHandler}
              className="material-symbols-outlined cursor-pointer text-[2rem] "
            >
              close
            </span>
          </div>
          <hr className="w-full mt-[-12rem]" />
          <div>
            <p className="text-[16px] text-gray-400 font-Sans ">
              No products in the cart
            </p>
            {
              // <p>Pic</p>
              // <p>item Name</p>
              // <p>Item price</p>
            }
          </div>
          <div>
            <button
              className={`text-[16px] border-[1px] rounded px-[8rem] py-[1rem] border-gray-400 text-gray-500 font-bold font-Sans ${hoverAffect} `}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </CartOverLay>,
        document.getElementById("overLays")
      )}
    </Fragment>
  );
};

export default CartModal;
