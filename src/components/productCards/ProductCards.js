import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductCards = (props) => {
  const [products, setProducts] = useState([]);

  //products

  const response = async () => {
    try {
      const apiData = await axios.get("https://fakestoreapi.com/products");
      console.log(apiData.data);
      setProducts(apiData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div>
      <div className="flex py-[4rem] flex-wrap gap-[3rem]  ">
        {products.map((items) => {
          return (
            <div
              className=" w-[21rem] mx-auto shadow-xl px-2 rounded-md py-2 h-[20]"
              key={items.id}
            >
              <img
                className=" h-[20rem] w-[20rem]"
                src={items.image}
                alt="images"
              />
              <section className="pt-[2rem]">
                <p className=" text-xl font-Sans font-bold ">${items.price}</p>
                <p className="w-[100%] font-Barlow ">{items.title}</p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
