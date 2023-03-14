import React, { Fragment } from "react";
import { createPortal } from "react-dom";
const Backdrop = (props) => {
  return (
    <div>
      <div
        onClick={props.onClick}
        className=" bg-black min-h-screen absolute z-[1] top-0 "
      />
    </div>
  );
};
const CartModal = () => {
  const clickhandler = () => {
    console.log("got it with backdrop");
  };
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={clickhandler} />,
        document.getElementById("overLays")
      )}
    </Fragment>
  );
};

export default CartModal;
