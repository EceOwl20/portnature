import React from "react";
import image from "../../../public/images/alacarteMain.png";

const RestaurantMainSection = ({images}) => {
  return (
      <section className="flex w-screen h-[70vh] items-start justify-between bg-white">
        <div className="flex flex-col w-full lg:w-[49%] items-center justify-center lg:gap-[20px] text-center lg:text-start ">
         <div className="relative flex w-full">
         <img
            src={image}
            alt="img"
            width={image.width}
            height={image.height}
          />
          <div className="absolute inset-0 bg-black/20 z-1"></div>
          <h3 className="absolute bottom-2 z-10 left-1/2 -translate-x-1/2 text-shadow-custom flex text-[25px] text-white font-lora font-medium leading-normal uppercase lg:text-[40px]">ALA CARTE</h3>
         </div>
          
          <div className="flex w-[80%] lg:w-[70%] items-center justify-end gap-[28px] mt-[43px] text-center">
           <h2 className="text-[40px] text-customGray font-lora leading-normal font-medium">MAIN RESTAURANT</h2>
          </div>
          <p className="flex lg:hidden text-[12px] w-[95%] text-black font-monserrat font-normal leading-normal"> We offer a wide selection of mouth-watering dishes that will satisfy every palate, from savory meats to fresh salads with open buffet. Our expert chefs use only the freshest ingredients to create flavorful and healthy dishes.</p>
        </div>

        <div className="hidden lg:flex flex-col w-[49%] items-center lg:items-center justify-center lg:gap-[20px] text-center lg:text-center">
        <img
            src={image}
            alt="img"
            width={image.width}
            height={image.height}
          />
          <p className="text-[15px] w-[90%] lg:w-[65%] text-black font-monserrat font-normal leading-[22.5px] lg:mt-[43px]">
          We offer a wide selection of mouth-watering dishes that will satisfy every palate, from savory meats to fresh salads with open buffet. Our expert chefs use only the freshest ingredients to create flavorful and healthy dishes.
          </p>
        </div>

      </section>
     
   
  );
};

export default RestaurantMainSection;
