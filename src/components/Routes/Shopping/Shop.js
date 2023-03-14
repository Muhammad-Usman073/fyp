import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Cards from "../../productCards/Cards";
import Footer from "../../Footer/Footer";
import Rights from "../../Footer/Rights";
import axios from "axios";
const Shop = () => {
  const [products, setProducts] = useState([]);

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
    <div className="bg-gray-100 min-h-screen">
      <div>
        <div className="bg-white items-center py-4 ">
          <NavBar textColor={"black"} cartIconColor={"black"} />
        </div>
        {
          //product cards
        }
        <div className=" bg-white mx-[4rem] mt-[4rem] ">
          <div className=" pb-[4rem] ml-[4.5rem] ">
            <div className="font-Barlow pb-[2rem] text-[#54595f] pt-[2rem] text-[80px] ">
              SHOP
            </div>
            <div className="flex flex-wrap gap-[4rem]  ">
              {products.map((items) => {
                return (
                  <Cards>
                    <div className="p-2" key={items.id}>
                      <img
                        className=" h-[20rem] w-[20rem] "
                        src={items.image}
                        alt="images"
                      />

                      <section className="pt-[2rem]">
                        <p className=" text-xl font-Sans font-bold ">
                          ${items.price}
                        </p>
                        <p className="w-[fit-content] font-Barlow ">
                          {items.title}
                        </p>
                      </section>
                    </div>
                  </Cards>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <Rights />
      </div>
    </div>
  );
};

export default Shop;
