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
      className="bg-black z-40 opacity-[0.5] fixed top-0 bottom-0 left-0 right-0 "
    />
  );
};

const JoinOverLay = ({ children }) => {
  return (
    <div className="z-50 fixed right-20 top-[2rem] left-20 ">
      {children}
    </div>
  );
};

const JoinModal = ({ showCart, setShowCart, children }) => {
  const domElements = document.getElementById("overLays");
  return (
    <Fragment>
      {createPortal(
        <BackDrop showCart={showCart} setShowCart={setShowCart} />,
        domElements
      )}
      {createPortal(<JoinOverLay>{children}</JoinOverLay>, domElements)}
    </Fragment>
  );
};

export default JoinModal;
