import React from "react";
import NewUnderline from "../../svg/NewUnderline";
import LeafSvg from "../../svg/LeafSvg"

const AlacarteSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto my-[50px] w-screen">
      <div className="flex flex-col w-[90%] items-center justify-center gap-[30px] ">
        <div className="flex text-center font-medium font-lora text-[#233038] gap-2 lg:gap-5">
          <span className="text-[60px] leading-[42px] italic ">7</span>
          <h2 className="text-[25px] lg:text-[28px] leading-[37px] lg:leading-[42px] ">
            Of Our Premium A’La Carte Restaurants
          </h2>
        </div>
        
        <NewUnderline width={243} height={1} className="flex"/>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 items-center justify-center lg:mt-[20px] w-[85%] lg:w-[70%] text-[#233038] ">
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-[2%] md:justify-center lg:justify-start md:cols-span-2 lg:col-span-1">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AlacarteSection;
