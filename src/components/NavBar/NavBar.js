import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import Cart from "../Routes/cart/Cart";
import JoinUs from "../Routes/JoinUs/Credentials";
const NavBar = ({ textColor, cartIconColor }) => {
  const [showCart, setShowCart] = useState(false);
  const [joinUs, setJoinUs] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
    document.body.classList.add("overflow-hidden");
  };
  const toggleJoinUs = () => {
    console.log("join us");
    setJoinUs(!joinUs);
    document.body.classList.add("overflow-hidden");
  };

  const navIcons = `text-${textColor} font-font-extralight font-Sans text-opacity-[1]`;
  const cart = ` cursor-pointer material-symbols-outlined text-${cartIconColor} text-opacity-[1] text-[2.3rem]`;

  return (
    <div>
      <div className="gap-[4rem] flex justify-between items-center">
        {
          // complete navigation
        }
        <div>
          {
            //Logo Image
          }
          <Link to="/">
            <img
              className="w-[5rem] cursor-pointer ml-4 rounded-full h-[5rem]"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[2rem] mr-4 ">
          {
            //Nav Links
          }
          <Link to="/" className={navIcons}>
            HOME
          </Link>
          <Link to="/Shop" className={navIcons}>
            SHOP
          </Link>
          <Link className={navIcons}>LOOKBOOK</Link>
          <Link to="/AboutUs" className={navIcons}>
            ABOUT US
          </Link>
          <Link to="/ContactUs" className={navIcons}>
            CONTACT US
          </Link>

          <div
            className={`text-${textColor} cursor-pointer font-font-extralight font-Sans text-opacity-[1]`}
            onClick={toggleJoinUs}
          >
            JOIN US
          </div>

          <span onClick={toggleCart} className={cart}>
            local_mall
          </span>
        </div>
      </div>
      <div>
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </div>

      {<div>{joinUs && <JoinUs />}</div>}
    </div>
  );
};

export default NavBar;
