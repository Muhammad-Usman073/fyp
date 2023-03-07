import React from "react";
import girl from "../../../assets/smiling-girl.png";
const PicGirl = () => {
  return (
    <div >
      <div className=" flex relative bg-slate-100 h-[80vh] ">
        <div className="pt-[5rem] pl-[3rem] " >
          <div><span className="material-symbols-outlined text-[4rem] ">
          face_5
          </span></div>
          <div className="font-Barlow text-[42px] ">25% OFF</div>
          <div className="font-Barlow text-[30px] ">
            On All Orders Above $299!
          </div>
          <div className="text-[rgb(79, 79, 79) w-[50%] font-Sans text-[16px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ab? Fuga recusandae corporis magni odit laborum voluptate, suscipit
            vitae, delectus repudiandae libero nisi sequi magnam ex numquam
            facilis incidunt id!
          </div>
          <button className="bg-[#54595f] drop-shadow-xl rounded-md mt-[3rem] tracking-widest text-white font-bold font-Sans px-[2.2rem] py-[1rem] ">
            VIEW COLLECTION
          </button>
        </div>

        <div>
          <img className="w-[40rem] absolute left-[40rem] bottom-0 "  src={girl} alt="smiling girl" />
        </div>
        
      </div>
    </div>
  );
};

export default PicGirl;
