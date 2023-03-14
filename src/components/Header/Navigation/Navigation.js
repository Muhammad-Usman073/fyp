import React from "react";
import BackgroundImage from "../backgroundPic/backgroundImage";
import NavBar from "../../NavBar/NavBar";
const Navigation = () => {
  return (
    <div>
      {
        // Navigation
      }
      <div>
        {
          //Backdrop
        }
        <div className="bg-[#161616] top-0 absolute h-[143.5%] w-[100%] bg-opacity-[0.70]">
          {
            //nav bar
          }
          <div className="mt-4">
            <NavBar textColor={"white"} cartIconColor={"white"} />
          </div>

          <div className="mt-[10rem] ml-[10rem] ">
            {
              //Navvigation Text
            }
            <p className="text-white trackfont-extralighttight font-Barlow text-opacity-[1] text-[20px] ">
              Summer Collection
            </p>
            <div className="mt-[1.5rem] leading-[5.5rem] ">
              <p className="text-white trackfont-extralightwide text-[5rem] text-opacity-[1] font-extralight font-Barlow ">
                INTRODUCING
              </p>
              <p className="text-white trackfont-extralightwide text-[5rem] text-opacity-[1] font-extralight font-Barlow ">
                NEW ARRIVAL
              </p>
            </div>
            <p className="text-white text-font-extralightrem] text-opacity-[1] mt-[3rem] w-[50%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet
              tenetur est eveniet! Aliquid provident quam et rerum culpa
              recusandae distinctio, quaerat natus nisi.
            </p>
            <button className="bg-white rounded-md mt-[3rem] tracking-widest text-black font-bold font-Sans px-[2.2rem] py-[1rem] ">
              VIEW COLLECTION
            </button>
          </div>
        </div>
        {
          //Background Hero Image
        }
        <BackgroundImage />
      </div>
    </div>
  );
};

export default Navigation;
