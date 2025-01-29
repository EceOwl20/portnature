import React from "react";

const FoodMenu = ({ images = [], buttonText, buttonText2, buttonText3, buttonLink, buttonLink2,buttonLink3 }) => {
  const buttonTexts=[buttonText, buttonText2, buttonText3];
  return (
    <div className="flex w-screen h-auto justify-center items-center my-10">
      {/* Container */}
      <div className="flex flex-wrap w-full lg:w-[90%] lg:min-w-[1000px] justify-center items-center">
        {images.map((img, index) => (
          <div
            key={index}
          className='flex w-[100%] lg:w-[33%] xl:w-[30%] justify-center items-center bg-cover bg-center relative h-[45vh] lg:h-[35vh] xl:h-[40vh]'
            style={{ backgroundImage: `url(${img.firebaseUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-1 hover:bg-black/0"></div>
            <button className="flex z-10 justify-center items-center capitalize text-center py-[10px] md:py-[18px] w-[60%] sm:w-[50%] md:w-[35%] lg:w-[85%] xl:w-auto xl:px-[92px] border border-[#F8F8F8] text-[17px] lg:text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray">
            {buttonTexts[index]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;