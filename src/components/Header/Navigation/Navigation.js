import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../Store/Context";
import { AppContext } from "../../../State";
const Navigation = () => {
  const { state } = useContext(AppContext);
  return (
    // Navigation Container
    <div className="flex justify-center py-2 items-center ">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqSUWGefeLef35q2txrO4W5gaQgjIrJoVvw&usqp=CAU"
          alt="logo"
          className="h-[4rem] w-[4rem] rounded-3xl "
        />
      </Link>
      <nav className="ml-[4rem] mr-[4rem]">
        <ul className="flex">
          <Link
            to="/men"
            className="mr-[2rem] hover:bg-black hover:text-white hover:px-[2rem] hover:py-2 hover:rounded-3xl font-bold font-ubuntu hover:cursor-pointer "
          >
            Men
          </Link>
          <Link
            to="/women"
            className="mr-[2rem]  hover:bg-black hover:text-white hover:px-[2rem] hover:py-2 hover:rounded-3xl font-bold font-ubuntu hover:cursor-pointer "
          >
            Women
          </Link>
        </ul>
      </nav>
      <input
        className="outline-none bg-gray-100 border-[1px] w-[35%] font-bold h-[3rem]"
        type="search"
      />
      <span className="material-symbols-outlined bg-yellow-300 p-[0.25rem] text-[2.5rem] cursor-pointer ">
        search
      </span>
      <div className="flex justify-between ml-[4rem]">
        <div className="ml-[3rem]">
          <Link to="authuser">
            <span className="material-symbols-outlined cursor-pointer  text-[2.5rem]">
              person
            </span>
          </Link>
        </div>
        <div className="ml-[2rem]">
          <Link className="relative" to="cart">
            <span className="material-symbols-outlined  cursor-pointer text-[2.5rem] ">
              shopping_cart
            </span>
            <span className="font-bold absolute "> {state.cart.length} </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
