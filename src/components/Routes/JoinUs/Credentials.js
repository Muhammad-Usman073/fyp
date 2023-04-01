import React from "react";
import JoinModal from "./CredentialsModal";
import blackMen from "../../../assets/blackMen.jpg";
const JoinUs = ({ showCart, setShowCart }) => {

  // const cartHandler = () => {
  //   if (showCart === true) {
  //     setShowCart(false);
  //     if (document.body.classList.contains("overflow-hidden")) {
  //       document.body.classList.remove("overflow-hidden");
  //     }
  //   }
  // };
  return (
    <JoinModal>
      <div className="flex shadow-2xl ">
        <div className=" h-[90vh] w-[70vw] bg-white text-black ">
          <form action="">
            <div className=" flex flex-col mt-[4rem] items-center ">
              <div className=" flex flex-col items-center gap-[1rem] ">
                <p className=" font-[700] text-[24px] font-Sans">
                  Welcome back, multifasahalaza.store
                </p>
                <p className=" text-[16px] font-[200] text-gray-400 font-Sans">
                  welcome back! please enter your details.
                </p>
                <button className=" px-[3.5rem] font-[200] py-[.5rem] text-[16px] shadow-md font-Sans border-[1px] rounded ">
                  Log in with Google
                </button>

                <p className=" font-Sans font-[500]">Or</p>
              </div>

              <div className="flex gap-[3rem] mt-[2rem] items-center flex-col">
                <input
                  className="border-b outline-none w-[15rem] font-[200] font-Sans"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="border-b outline-none w-[15rem] font-[200] font-Sans"
                  placeholder="Password"
                  type="password"
                />
                <input
                  className=" cursor-pointer px-[7rem] font-[200] py-[.6rem] text-[16px] shadow-md bg-black text-white font-Sans rounded "
                  type="submit"
                  value="Log in"
                />
              </div>
              <div>
                <p className=" mt-[2rem] text-[14px] font-[200] font-Sans">
                  Dont't have an account? create account
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="h-[90vh] relative w-[70vw]">
          <span className="material-symbols-outlined absolute p-[1rem] right-0 cursor-pointer text-white z-50 hover:bg-white hover:rounded-full hover:text-black text-[2rem] ">
            close
          </span>

          <img className="h-[90vh] w-[70vw]" src={blackMen} alt="blackMen" />
          <div className=" absolute bg-opacity-[.8] bg-black top-0 bottom-0 left-0 right-0 ">
            <div className="flex flex-col items-start px-[2rem] gap-4 mt-[13rem] ">
              <span className="material-symbols-outlined text-opacity-[1] text-[5rem] text-white ">
                format_quote
              </span>
              <p className="text-white font-[700] text-opacity-[1] text-[30px] font-Sans  ">
                "Fashion is not something that exists in dresses only. Fashion
                is in the sky, in the street; fashion has to do with ideas, the
                way we live, what is happening." - Coco Chanel
              </p>
            </div>
          </div>
        </div>
      </div>
    </JoinModal>
  );
};

export default JoinUs;
