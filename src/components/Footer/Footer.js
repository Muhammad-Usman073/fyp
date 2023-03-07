import React from "react";
import Logo from "../../assets/Logo.jpg";
const Footer = () => {
  return (
    <div>
      <div className="bg-black flex  justify-around py-[4rem] mt-[2rem] ">
        <div>
          <div className="text-white pb-[1rem]">
            <img
              className="w-[5rem] rounded-full h-[5rem]"
              src={Logo}
              alt="Logo"
            />
          </div>
          <p className="text-white overflow-hidden font-Sans text-[16px] w-[20vw] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laborum
            corporis incidunt accusamus voluptatum excepturi. Adipisci,
            perferendis. Reiciendis commodi dignissimos laborum illum deleniti?
          </p>
        </div>
        <div className="leading-[2rem]">
          <p className="text-white text-[22px] pb-[1rem] font-Barlow ">
            SHOP COLLECTIONS
          </p>
          <p className="text-white text-[16px] font-Sans ">Men's Jeans</p>
          <p className="text-white text-[16px] font-Sans ">Women's Tops</p>
          <p className="text-white text-[16px] font-Sans ">Hoodies</p>
          <p className="text-white text-[16px] font-Sans ">Jackets</p>
          <p className="text-white text-[16px] font-Sans ">Shoes</p>
        </div>
        <div className="leading-[2rem]">
          <p className="text-white text-[22px] pb-[1rem] font-Barlow ">
            POPULAR COLLECTION
          </p>
          <p className="text-white text-[16px] font-Sans ">Women's Shorts</p>
          <p className="text-white text-[16px] font-Sans ">Belts</p>
          <p className="text-white text-[16px] font-Sans ">Watches</p>
          <p className="text-white text-[16px] font-Sans ">Women's Jeans</p>
          <p className="text-white text-[16px] font-Sans ">Formal Shoes</p>
        </div>
        <div className="leading-[2rem]">
          <p className="text-white text-[22px] pb-[1rem] font-Barlow ">
            QUICK LINKS
          </p>
          <p className="text-white text-[16px] font-Sans ">Home</p>
          <p className="text-white text-[16px] font-Sans ">Shop</p>
          <p className="text-white text-[16px] font-Sans ">Lookbook</p>
          <p className="text-white text-[16px] font-Sans ">About Us</p>
          <p className="text-white text-[16px] font-Sans ">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
