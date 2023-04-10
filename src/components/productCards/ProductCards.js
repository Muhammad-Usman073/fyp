import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartContext from "../../Store/CartContext";
const ProductCards = (props) => {
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const hoverAffect = "hover:border-2 hover:border-transparent cursor-pointer ";
  // const productHandler = () => {
  //   navigation("/cartHandler");
  // };
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
    <div>
      <div className="flex py-[4rem] flex-wrap gap-[3rem]">
        {products.map((items) => {
          return (
            <div
              onClick={() => {
                addToCart(items.title,items.price,items.image);
                navigation("/cartHandler");
              }}
              className={`w-[21rem] mx-auto shadow-xl px-2 rounded-md py-2 h-[20] ${hoverAffect} `}
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
