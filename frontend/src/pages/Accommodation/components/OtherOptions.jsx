import React from "react";
import CardOtherOptions from "./CardOtherOptions";
import Card2Other from "./Card2Other";

const OtherOptions = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center my-10">
      <div className="flex flex-col w-[90%] text-center justify-center items-center">
        <h3 className="text-[#233038] font-medium font-lora leading-[42px] italic text-[28px]">
          Other Accommodation Options
        </h3>
        <div className="flex w-screen my-5">
          <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
          <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
        </div>
        <p className="text-[20px] text-[#515961] font-bold leading-[30px] font-monserrat">
          A luxurious holiday with your loved ones is waiting for you in Our
          Rooms, designed in the comfort of your home
        </p>
      </div>
      <div className="flex w-[100%] h-auto justify-center items-center">
      <Card2Other/>
      <Card2Other/>
      </div>
    </div>
  );
};

export default OtherOptions;
