import { Fragment } from "react";
import Navigation from "./components/Header/Navigation/Navigation";
import Main from "./components/Routes/Main";
import Men from "./components/Routes/Men";
import Women from "./components/Routes/Women";
import AuthUser from "./components/Routes/Authentication/AuthUser";
import Cart from "./components/Routes/Cart";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="cart" element={<Cart />} />
        <Route path="authuser" element={<AuthUser />} />
      </Routes>
    </Fragment>
  );
};
export default App;
