import React from "react";
import { RoomCarousel } from "./RoomCarousel";

const Accommodation = ({images=[],header,text}) => {
  return (
    
    <section
      className="flex flex-col w-screen h-auto items-center justify-around mt-[60px] lg:my-[75px]"
      aria-labelledby="accommodation-heading"
    >
      
      <h2
        id="accommodation-heading"
        className="font-lora text-[25px] lg:text-[40px] font-medium leading-normal text-[#233038] text-center"
      >
        {header}
      </h2>

      <div className="flex flex-col w-[90%] lg:w-[50%] text-center items-center justify-center gap-[30px] my-8">
        
        <p className="w-[96.6%] lg:hidden lg:w-[60%] text-[12px] lg:text-[20px] text-[#233038CC] lg:text-[#233038] leading-normal lg:leading-[30px] font-bold font-monserrat">
         {text}
        </p>
      </div>

      <div className="flex w-[90%] items-center justify-center mb-8">
        <RoomCarousel images={images}  />
      </div>
    </section>
  );
};

export default Accommodation;
