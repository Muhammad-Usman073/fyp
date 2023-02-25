import { React, useState } from "react";
import { Images } from "./Images";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className=" mt-[2rem] h-[100vh] w-[100vw] flex translate-x-[0vw] transition-all "
      style={{ transform: `translateX(-${currentIndex * 100})` }}
    >
      <img
        className=" w-[100vw]"
        key={Images[currentIndex].id}
        src={Images[currentIndex].url}
        alt={Images[currentIndex].alt}
      />
      <span className="material-symbols-outlined  hover:text-white cursor-pointer absolute text-[4rem] top-[50%] right-[1.5rem] ">
        arrow_forward_ios
      </span>
      <span className="material-symbols-outlined cursor-pointer absolute hover:text-white text-[4rem] left-[1.5rem] top-[50%] ">
        arrow_back_ios
      </span>
    </div>
  );
};

export default ImageSlider;
