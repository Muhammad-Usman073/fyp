import React from "react";
import ProductCards from "../../productCards/ProductCards";
const Items = () => { 
  // product handler

  //products

  return (
    <div className="mx-auto mt-[3rem] ">
      <div className="ml-[31%] font-Barlow mb-8 text-[3rem] ">
        Featured Products
      </div>
      <div>
        <ProductCards />
      </div>
    </div>
  );
};

export default Items;
