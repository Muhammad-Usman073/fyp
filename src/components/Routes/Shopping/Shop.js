import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import ProductCards from "../../productCards/ProductCards";
import Footer from "../../Footer/Footer";
import Rights from "../../Footer/Rights";
const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <div className="bg-white items-center py-4 ">
          <NavBar textColor={"black"} cartIconColor={"black"} />
        </div>
        {
          //product cards
        }
        <div className=" px-[3rem] bg-white mx-[4rem] mt-[4rem] ">
          <div className="font-Barlow pb-[2rem] text-[#54595f] pt-[2rem] text-[80px] ">
            SHOP
          </div>
          <div>
            <ProductCards />
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
