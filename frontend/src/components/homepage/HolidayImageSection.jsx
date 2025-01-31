import React from "react";
import UnderLine from "../../svg/UnderLine/UnderLine";
// import Youtube2Svg from "../../svg/Youtube2Svg"; // Eğer bu SVG'yi kullanacaksanız import edin

const HolidayImageSection = ({
  image,
  image2,
  buttonImage,
  buttonText,
  header,
  text,
  span,
}) => {
  return (
    
    <section
      className="flex flex-col lg:flex-row w-screen font-monserrat"
      aria-labelledby="holiday-image-section-heading"
    >
     
      <h2 id="holiday-image-section-heading" className="sr-only">
        Holiday Image Section
      </h2>

      
      <div
        className="flex flex-col relative w-full lg:w-1/2 h-auto bg-cover items-center justify-center min-h-[415px] xl:h-[548px]"
        style={{ backgroundImage: `url(${image.firebaseUrl})` }}
        
      >
        
        <div className="flex absolute inset-0 z-[1] bg-black/70" aria-hidden="true"></div>

        
        <h3 className="flex lg:hidden font-lora text-[25px] italic font-medium leading-[34px] text-white z-10 w-[70%] text-center mb-[8%]">
          {header}
        </h3>

        
        <button
          type="button"
          className="flex py-[15px] px-[38px] text-[16px] text-center text-[#233038] 
                     leading-normal font-bold bg-white z-10 justify-around items-center 
                     gap-[10px] lg:gap-[19px]"
        >
          
          <img
            src={buttonImage.firebaseUrl}
            alt={buttonImage.altText || "button icon"}
            className="flex"
            width={32}
            height={22}
            loading="lazy" 
          />
          {buttonText}
        </button>
      </div>

      
      <div
        className="flex flex-col relative w-full lg:w-1/2 h-auto bg-cover items-center justify-center min-h-[415px]"
        style={{ backgroundImage: `url(${image2.firebaseUrl})` }}
      >
        <div className="flex absolute inset-0 z-[1] bg-black/70" aria-hidden="true"></div>

        <div className="flex flex-col w-[88%] lg:w-[70%] text-white items-center lg:items-start justify-center text-center lg:text-start gap-[24px] z-10">
         
          <h3 className="hidden lg:flex font-lora text-[28px] italic font-medium leading-[42px]">
            {header}
          </h3>
          <UnderLine className="hidden lg:flex z-10" aria-hidden="true" />

          <p className="font-monserrat leading-[22.5px] font-normal text-[15px] text-center lg:text-justify">
            {text}
          </p>

          <span className="text-justify leading-normal lg:leading-[22.5px] font-bold text-[12px] lg:text-[15px]">
            {span}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HolidayImageSection;
