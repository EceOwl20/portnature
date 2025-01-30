import React from "react";
import StarSvg from "../../svg/StarSvg";
import UnderLine from "../../svg/UnderLine/UnderLine";
import SubCarousel from "./SubCarousel";

const AllInclusive = ({
  images = [],
  header,
  span,
  text1,
  text2,
  starNum,
  carouselHeader,
  carouselText,
  carouselSpan,
}) => {
  return (
    <main
      className="flex flex-col w-screen h-auto font-lora items-center justify-center py-20 lg:py-[150px]"
      
      aria-labelledby="all-inclusive-heading"
    >

      <div className="flex flex-col gap-[21px] items-center justify-center text-center w-[93%] lg:w-[70%] text-[#233038CC]">
        
        <h2 className="text-[25px] lg:text-[35px] italic font-medium leading-[34px] lg:leading-normal">
          {header}
        </h2>

        <p className="text-[18px] lg:text-[20px] leading-[27px] lg:leading-normal font-monserrat font-bold">
          {span}
        </p>
       
        <UnderLine className="flex lg:hidden" aria-hidden="true" />

      
        <div className="flex flex-col lg:flex-row w-[90%] lg:w-[70%] text-[#233038CC] text-[13px] lg:text-[15px] text-justify font-normal leading-[19px] lg:leading-[22.5px] gap-[30px] lg:gap-[4%]">
          <p className="w-[100%] lg:w-[48%]">{text1} </p>
          <p className="w-[100%] lg:w-[48%]">{text2}</p>
        </div>
      </div>

     
      <div className="flex flex-col-reverse lg:flex-row w-full items-center leading-normal font-medium gap-[2%]">
        <div className="flex text-start justify-start lg:justify-end lg:items-end items-center w-[86%] lg:w-[49%]">
          <div className="flex flex-col w-[88%] lg:w-[70%] justify-end items-start gap-[20px]">
            <span className="text-[55px] lg:text-[65px] text-[#233038] flex items-center justify-center gap-[10px]">
              {starNum}
              <StarSvg
                className="hidden lg:flex"
                width={53}
                height={50}
                aria-hidden="true"
              />
              <StarSvg
                className="flex lg:hidden"
                width={45}
                height={42}
                aria-hidden="true"
              />
            </span>

            <h3 className="text-[25px] lg:text-[28px] text-[#233038] leading-[32px] lg:leading-normal">
              {carouselHeader}
            </h3>

            <p className="text-[13px] lg:text-[15px] font-normal leading-[19px] lg:leading-[22.5px] text-start lg:text-justify text-[#233038CC] lg:text-[#000] mt-[7px]">
              {carouselText}
            </p>

            <UnderLine aria-hidden="true" />
            <span className="text-[#515961] text-[15px] leading-[22.5px] font-bold">
              {carouselSpan}
            </span>
          </div>
        </div>
        <div className="flex w-[100%] lg:w-[49%] items-start justify-start">
          <SubCarousel images={images} />
        </div>
      </div>
    </main>
  );
};

export default AllInclusive;
