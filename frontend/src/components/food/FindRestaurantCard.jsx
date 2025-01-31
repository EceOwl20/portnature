import React from "react";
import { Link } from "react-router-dom";

const FindRestaurantCard = ({ header, text, link, image, icon}) => {
  return (
    <div className="flex flex-col min-h-content bg-[#F8F8F8] justify-center items-center p-2 w-[97%] gap-[12px] lg:gap-[30px]">
      <img src={image.firebaseUrl} alt="Restaurant" className="w-full h-auto" width={image.width} height={image.height}   loading="lazy"/>
     
      <div className="flex flex-col text-start items-center w-[92%] text-customGray80 gap-2">
        <div className="flex w-full items-center justify-start gap-2">
        {icon && (
        <img
        src={icon.firebaseUrl}
          width={icon.largeWidth}
          height={icon.largeHeight}
           loading="lazy"
        />
      )}
          <h3 className="text-[15px] lg:text-[25px] font-medium font-lora leading-normal pl-1">
            {header}
          </h3>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-[11px] lg:text-[13px] font-normal leading-[20px] font-monserrat w-[65%] lg:w-2/3">
            {text}
          </p>
          <Link
            to={link}
            className="flex w-[35%] lg:w-1/3 lg:px-0 py-[4px] lg:py-[12px] border border-[#6b6b6b] text-customGray text-[11px] lg:text-[14px] font-bold leading-normal font-monserrat whitespace-nowrap text-center justify-center items-center hover:text-white hover:bg-customGray"
          >
            More About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindRestaurantCard;
