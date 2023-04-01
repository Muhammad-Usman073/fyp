import { Fragment } from "react";
import HomePage from "./components/Routes/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Routes/AboutUs/AboutUs";
import ContactUs from "./components/Routes/ContactUs/ContactUs";
import Shop from "./components/Routes/Shopping/Shop";
import AddToCartHandler from "./components/Routes/cart/AddToCartHandler";
// import JoinUs from "./components/Routes/JoinUs/JoinUs";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="cartHandler" element={<AddToCartHandler />} />
{      
    // <Route path="JoinUs" element={<JoinUs />} />
}      </Routes>
    </Fragment>
  );
};
export default App;
