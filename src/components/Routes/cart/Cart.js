import React from "react";
import CartModal from "./CartModal";

const Cart = ({ showCart, setShowCart }) => {
  const hoverAffect = "hover:border-[1px] hover:border-black hover:text-black ";
  const className = "flex flex-col py-[1.5rem] justify-between items-center";

  const cartHandler = () => {
    if (showCart === true) {
      setShowCart(false);
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };
  return (
    <CartModal
      showCart={showCart}
      setShowCart={setShowCart}
      className={className}
    >
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
    </CartModal>
  );
};

export default Cart;
