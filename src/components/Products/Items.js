import React, { useState, useEffect } from "react";
import axios from "axios";
const Items = () => {
  const [products, setProducts] = useState([]);
  const response = async () => {
    try {
      const apiData = await axios.get("https://fakestoreapi.com/products");
      console.log(apiData.data, "api data");
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
      <div className="ml-[40%] font-ubuntu font-bold mb-8 text-[1.5rem] ">
        Popular Items
      </div>
      <div className="inline-flex flex-wrap gap-[4rem]  ">
        {products.map((items) => {
          console.log(items, "items");
          return (
            <div
              key={items.id}
              className="h-[fit-content] w-[20rem] overflow-clip border-2 rounded "
            >
              <div className=" p-2" key={items.id}>
                <img
                  className=" h-[20rem] w-[20rem] "
                  src={items.image}
                  alt="none"
                />
                <section>
                  <div className=" text-xl font-ubuntu font-bold ">
                    ${items.price}{" "}
                  </div>
                  <div className="w-[fit-content] font-ubuntu ">
                    {" "}
                    {items.title}{" "}
                  </div>
                </section>
                <button
                  onClick={(e) => console.log(e.target.value)}
                  className="p-2 w-[100%] rounded font-bold text-yellow-50 bg-orange-400"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
