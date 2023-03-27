import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Rights from "../../Footer/Rights";
import Shirt from "../../../assets/shirt.jpg";
const AddToCartHandler = () => {
  return (
    <div className=" bg-slate-100 min-h-screen  ">
      <div>
        <div className="bg-white py-4 ">
          <NavBar textColor={"black"} cartIconColor={"black"} />
        </div>
        <div className="bg-white py-[2rem] px-[4rem] mx-[2rem] my-[4rem] ">
          <div className="flex gap-[2rem] ">
            <div className=" w-full h-full  ">
              <img className="" src={Shirt} alt="red-shirt" />
            </div>
            <div className=" w-full leading-[29.7143px] ">
              <p className="font-Sans text-[#4f4f4f] text-[16px]  ">
                Red Shirt
              </p>

              <p className="font-Sans text-[#4f4f4f] mt-[2rem] text-[24px] font-[700] ">
                $18.00
              </p>
              <p className="text-[16px] text-[#4f4f4f] mt-[1.5rem] font-[400] w-[80%] font-Sans ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dolor mollitia iusto ad nostrum neque expedita assumenda, esse,
                laborum hic odit soluta id tempora cum quo quis laudantium.
                Voluptas quia ad sunt vero repudiandae. Officiis natus,
                blanditiis esse, temporibus asperiores, corporis unde deserunt
                similique non quam sequi! Obcaecati, minus quas.
              </p>

              <div className="flex gap-[2rem] mt-[1.5rem] pl-2 pt-2 ">
                <div className="flex items-center ">
                  <div className="border-[1px] cursor-pointer font-[500] text-slate-500 text-[16px] px-[0.80rem] py-[0.25rem] border-slate-500">
                    -
                  </div>
                  <div>
                    <input
                      className="w-9 outline-none px-[0.70rem] py-[0.25rem] border-[1px] text-slate-500 border-t-slate-500  border-b-slate-500 "
                      type="text"
                      defaultValue={1}
                    />
                  </div>
                  <div className="border-[1px] cursor-pointer font-[500] text-slate-500 text-[16px] px-[0.80rem] py-[0.25rem] border-slate-500">
                    +
                  </div>
                </div>
                <button className=" bg-gray-500 px-[25px] tracking-[4px] py-[1px] rounded-lg hover:bg-black text-white text-[16px] font-[700] font-Sans ">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div>description</div>
        </div>
        <div>
          <Footer />
        </div>

        <div className="bg-white">
          <Rights />
        </div>
      </div>
    </div>
  );
};

export default AddToCartHandler;
