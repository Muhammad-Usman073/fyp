import { Fragment } from "react";
import HomePage from "./components/Routes/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Routes/AboutUs/AboutUs";
import ContactUs from "./components/Routes/ContactUs/ContactUs";
import Shop from "./components/Routes/Shopping/Shop";
import AddToCartHandler from "./components/Routes/cart/AddToCartHandler";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="cartHandler" element={<AddToCartHandler />} />
      </Routes>
    </Fragment>
  );
};
export default App;
