import { Fragment } from "react";
import HomePage from "./components/Routes/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Routes/AboutUs/AboutUs";
import ContactUs from "./components/Routes/ContactUs/ContactUs";
import Shop from "./components/Routes/Shopping/Shop";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Shop" element={<Shop />} />
      </Routes>
    </Fragment>
  );
};
export default App;
