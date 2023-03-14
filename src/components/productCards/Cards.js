import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className=" h-[fit-content] drop-shadow-md  bg-slate-50 w-[20rem] cursor-pointer rounded ">
        {props.children}
      </div>
    </div>
  );
};

export default Cards;
