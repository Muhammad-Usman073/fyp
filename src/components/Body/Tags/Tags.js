import React from "react";
const Tags = () => {
  return (
    <div>
      <div className="flex justify-around  mt-[3rem] ">
        <div>
          <div className=" flex items-center gap-5 font-Barlow text-[20px] drop-shadow-md bg-slate-50 px-[3rem] rounded-xl py-[.5rem] ">
            <span className="material-symbols-outlined text-[3rem] ">local_shipping</span>
            Express Delivery
          </div>
        </div>

        <div>
          <div className=" flex items-center gap-5 font-Barlow text-[20px] drop-shadow-md bg-slate-50 px-[3rem] rounded-xl py-[.5rem] ">
            <span className="material-symbols-outlined text-[3rem] ">share_location</span>
            Order Tracking
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-5 font-Barlow text-[20px] drop-shadow-md bg-slate-50 px-[3rem] rounded-xl py-[.5rem] ">
            <span className="material-symbols-outlined text-[3rem] ">money</span>
            Regular Discounts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
