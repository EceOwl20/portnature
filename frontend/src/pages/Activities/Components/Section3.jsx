import React from 'react';
import { Link } from "react-router-dom";

const Section3 = ({image,header,text,buttonText,buttonLink}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col h-[45vh] lg:h-[752px] w-full items-start justify-center pl-16"
        style={{
          backgroundImage: `
                linear-gradient(to top, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 50%), 
                url(${image.firebaseUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-[#fff] font-lora text-[28px] italic font-medium leading-10">{header}</h3>
          <div className="flex w-full mt-5 mb-5">
            <div className="bg-custom-gradient h-[1px] w-[50%]" />
            <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
          </div>
          <p className="text-[#fff] font-monserrat text-[14px] font-bold leading-normal text-start">
            {text}
          </p>
          <Link
          to={buttonLink}
            className="text-[#fff] border px-5 py-2 font-monserrat text-[14px] font-bold text-start"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
