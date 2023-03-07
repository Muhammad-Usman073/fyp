import React from "react";
import card1 from "../../../assets/cards/01.jpg";
import card2 from "../../../assets/cards/02.jpg";
import card3 from "../../../assets/cards/03.jpg";
import card4 from "../../../assets/cards/04.jpg";
const CategoryCard = () => {
  return (
    <div >
      <div
        className=" gap-[2rem] p-[2rem] grid "
        style={{
          gridTemplateColumns: "50vw 20vw 20vw",
          gridTemplateRows: "40vh 55vh",
        }}
      >
        <div className="  relative h-[100vh] overflow-hidden rounded-xl row-start-1 row-end-3 col-start-1 col-end-2">
          <div className="bg-black bg-opacity-[0.70] absolute h-[100%] w-[100%] ">
            <p className="font-Barlow text-opacity-[1] absolute bottom-[4rem] ml-[9rem] text-white text-[42px] ">
              SUMMER COLLECTION
            </p>
          </div>
          <img src={card1} alt="card1" />
        </div>
        <div className=" relative overflow-hidden rounded-xl h-[100%] w-[100%] ">
          <div className="bg-[#161616] bg-opacity-[0.70] absolute h-[100%] w-[100%] ">
            <p className="font-Barlow mt-[7rem] ml-[2rem] text-opacity-[1]  text-white text-[42px] ">
              WOMEN'S COLLECTION
            </p>
          </div>
          <img src={card2} alt="card1" />
        </div>
        <div className=" relative overflow-hidden rounded-xl h-[100%] w-[100%] ">
          <div className="bg-[#161616] bg-opacity-[0.70] absolute h-[100%] w-[100%] ">
            <p className="font-Barlow mt-[7rem] ml-[2rem] text-opacity-[1] text-white text-[42px] ">
              MEN'S COLLECTION
            </p>
          </div>
          <img src={card3} alt="card3" />
        </div>
        <div className=" relative overflow-hidden rounded-xl col-start-2 col-end-4 h-[100%] w-[100%] ">
          <div className=" bg-[#161616] bg-opacity-[0.70] absolute  h-[100%] w-[100%] ">
            <div className="absolute bottom-[3rem] ml-[2rem] ">
              <div>
                <p className="text-opacity-[1] font-Barlow text-white text-[42px]">
                  FREE SHIPPING
                </p>
                <p className="text-opacity-[1] font-Barlow text-white text-[30px]">
                  on all orders obove 1000$
                </p>
                <button className="bg-white rounded-md mt-[3rem] tracking-widest text-black font-bold font-Sans px-[2.2rem] py-[1rem] ">
                  VIEW COLLECTION
                </button>
              </div>
            </div>
          </div>
          <img src={card4} alt="card4" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
