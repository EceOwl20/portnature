import React from "react";
import image from "../../../public/images/alacarteMain.png";
import LeafSvg from "../../svg/LeafSvg";
import FreeSvg from "../../svg/FreeSvg";
import DrinksSvg from "../../svg/DrinksSvg";

const AlaCarteMain = () => {
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
          
          <div className="flex w-[80%] lg:w-[70%] items-center justify-center gap-[28px] mt-[43px] text-center">
            <LeafSvg width={33} height={39} color="#CFCFCF"/>
            <FreeSvg width={37} height={40} color="#CFCFCF"/>
            <DrinksSvg width={29} height={39} color="#CFCFCF"/>
          </div>
          <p className="text-[15px] lg:text-[20px] font-monserrat font-bold leading-[30px] text-customGray80">
            The taste of tradition in every dish!
          </p>
          <p className="flex lg:hidden text-[12px] w-[95%] text-black font-monserrat font-normal leading-normal"> With a convivial and welcoming ambiance, our A'la Cartes are the perfect spot to catch up with family, or simply take a break and indulge in some much-needed delicious food. </p>
          <p className="flex lg:hidden text-[12px] text-black font-monserrat font-normal leading-normal mt-3"> Всемирно известные блюда ждут вас в роскоши Port Nature </p>
        </div>

        <div className="hidden lg:flex flex-col w-[49%] items-center lg:items-center justify-center lg:gap-[20px] text-center lg:text-center">
        <img
            src={image}
            alt="img"
            width={image.width}
            height={image.height}
          />
          <p className="text-[15px] w-[90%] lg:w-[65%] text-black font-monserrat font-normal leading-[22.5px] lg:mt-[43px]">
          With a convivial and welcoming ambiance, our A'la Cartes are the perfect spot to catch up with family, or simply take a break and indulge in some much-needed delicious food. 
          </p>

          <p className="text-[15px] w-[90%] lg:w-[55%] text-black font-monserrat font-normal leading-[22.5px]">Всемирно известные блюда ждут вас в роскоши Port Nature</p>
        </div>

      </section>
     
   
  );
};

export default AlaCarteMain;
