import React from "react";
import { ChildrenCarousel } from "./ChildrenCarousel";

const ChildrenSection = ({ images = [], items = [], header, buttonText }) => {
  return (
    
    <section
      className="flex flex-col w-screen items-center justify-center gap-[50px] mt-10"
      aria-labelledby="children-section-heading"
    >
      
      <div className="flex flex-col w-[90%] lg:w-[60%] gap-[30px] items-center justify-center text-center">
        <h2
          id="children-section-heading"
          className="text-[#233038] text-[25px] lg:text-[40px] font-lora font-medium leading-normal"
        >
          {header}
        </h2>

        
        <div className="flex w-screen" aria-hidden="true">
          <hr className="bg-custom-gradient h-[1px] w-[50%] border-0" />
          <hr className="bg-custom-gradient-reverse h-[1px] w-[50%] border-0" />
        </div>

        
        <ul className="grid grid-cols-2 lg:flex items-center justify-center lg:justify-between font-monserrat gap-[20px] list-none p-0 m-0">
          {items.map((item, index) => (
            <li
              key={index}
              className={`${item.wrapperClasses} flex flex-col items-center justify-center`}
            >
              
              <img
                src={item.firebaseUrl}
                alt={item.altText || ""}
                className="hidden lg:flex"
                width={item.largeWidth}
                height={item.largeHeight}
                loading="lazy" 
              />
              
              <img
                src={item.firebaseUrl}
                alt={item.altText || ""}
                className="flex lg:hidden"
                width={item.smallWidth}
                height={item.smallHeight}
              />
              <span className="text-[14px] text-[#233038CC] leading-normal font-bold">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      
      <ChildrenCarousel images={images} />

      
      <button
        type="button"
        className="flex bg-white border border-[#868686] py-[12px] px-[31px] font-monserrat 
                   font-bold text-[14px] text-center text-[#233038] leading-normal 
                   hover:bg-[#233038] hover:text-white"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default ChildrenSection;
