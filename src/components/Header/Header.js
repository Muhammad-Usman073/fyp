import React from "react";
import Navigation from "./Navigation";
import ImageSlider from "../ImgeSlider/ImageSlider";
import MainItems from "../Routes/mainItems";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navigation />
      <ImageSlider />
      <MainItems />
      <Outlet />
    </div>
  );
};

export default Header;
