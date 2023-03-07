import React, { useState, useEffect, } from "react";
import axios from "axios";
const Items = () => {
  // product handler
  const [products, setProducts] = useState([]);

  //products

  const response = async () => {
    try {
      const apiData = await axios.get("https://fakestoreapi.com/products");
      setProducts(apiData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div className="ml-[8rem] mt-[3rem] ">
      <div className="ml-[31%] font-Barlow mb-8 text-[3rem] ">
      FEATURED PRODUCTS
      </div>
      <div className="inline-flex flex-wrap gap-[4rem]  ">
        {products.map((items) => {
          return (
            <div
              key={items.id}
              className=" h-[fit-content] drop-shadow-md  bg-slate-50 w-[20rem] cursor-pointer rounded "
            >
              <div className="p-2" key={items.id}>
                <img
                  className=" h-[20rem] w-[20rem] "
                  src={items.image}
                  alt="images"
                />
                <section className="pt-[2rem]" >
                  <p className=" text-xl font-Sans font-bold ">
                    ${items.price}
                  </p>
                  <p className="w-[fit-content] font-Barlow ">
                    {items.title}
                  </p>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
