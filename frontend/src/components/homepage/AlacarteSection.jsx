import React from "react";
import NewUnderline from "../../svg/NewUnderline";
import LeafSvg from "../../svg/LeafSvg"

const AlacarteSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto my-[50px] w-screen">
      <div className="flex flex-col w-[90%] items-center justify-center">
        <div className="flex text-center font-medium font-lora text-[#233038]">
          <span className="text-[60px] leading-[42px] italic ">7</span>
          <h2 className="text-[25px] lg:text-[28px] leading-[37px] lg:leading-[42px] ">
            Of Our PremiumA’La Carte Restaurants
          </h2>
        </div>
        <div className="flex lg:hidden w-screen mt-20">
          <div class="bg-custom-gradient h-[1px] w-[50%]"></div>
          <div class="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
        </div>
        <NewUnderline width={243} height={1} className="flex"/>
        <div className="grid grid-cols-2 gap-5 items-center justify-center">
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col">
                    <h3>Top Quality</h3>
                    <p>We do not work with unknown brands. We offer top qualityWe do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col">
                    <h3>Top Quality</h3>
                    <p>We do not work with unknown brands. We offer top qualityWe do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex  items-start justify-start gap-[2%] col-span-2">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col">
                    <h3>Top Quality</h3>
                    <p>We do not work with unknown brands. We offer top qualityWe do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AlacarteSection;
