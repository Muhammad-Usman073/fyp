import React from "react";
import CategoryCard from "../../Body/CategoryCards/CategoryCard";
import Navigation from "../../Header/Navigation/Navigation";
import Quote from "../../Body/quote/Quote";
import PicGirl from "../../Body/pictureGirl/PicGirl";
import ProductCards from "../../Body/Products/Products";
import Tags from "../../Body/Tags/Tags";
import Footer from "../../Footer/Footer";
import Rights from "../../Footer/Rights";
const HomePage = () => {
  return (
    <div>
      <Navigation />
      <CategoryCard />
      <Quote />
      <PicGirl />
      <ProductCards />
      <Tags />
      <Footer />
      <Rights />
    </div>
  );
};

export default HomePage;
