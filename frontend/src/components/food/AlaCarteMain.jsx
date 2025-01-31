import React from "react";

const AlaCarteMain = ({image, image2, header, text, text2, span, subImages=[]}) => {
  return (
      <section className="flex w-screen h-[70vh] items-start justify-between bg-white">
        <div className="flex flex-col w-full lg:w-[49%] items-center justify-center lg:gap-[20px] text-center lg:text-start ">
         <div className="relative flex w-full">
         <img
            src={image.firebaseUrl}
            alt={image.altText}
            width={image.width}
            height={image.height}
             loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 z-1"></div>
          <h3 className="absolute bottom-2 z-10 left-1/2 -translate-x-1/2 text-shadow-custom flex text-[25px] text-white font-lora font-medium leading-normal uppercase lg:text-[40px]">{header}</h3>
         </div>
          
          <div className="flex w-[80%] lg:w-[70%] items-center justify-center gap-[28px] mt-[43px] text-center">
            <img src={subImages[0].firebaseUrl} width={33} height={39} color="#CFCFCF"  loading="lazy"/>
            <img src={subImages[1].firebaseUrl} width={37} height={40} color="#CFCFCF"  loading="lazy"/>
            <img src={subImages[2].firebaseUrl} width={29} height={39} color="#CFCFCF"  loading="lazy"/>
          </div>
          <p className="text-[15px] lg:text-[20px] font-monserrat font-bold leading-[30px] text-customGray80">
          {span}
          </p>
          <p className="flex lg:hidden text-[12px] w-[95%] text-black font-monserrat font-normal leading-normal"> With a convivial and welcoming ambiance, our A'la Cartes are the perfect spot to catch up with family, or simply take a break and indulge in some much-needed delicious food. </p>
          <p className="flex lg:hidden text-[12px] text-black font-monserrat font-normal leading-normal mt-3"> Всемирно известные блюда ждут вас в роскоши Port Nature </p>
        </div>

        <div className="hidden lg:flex flex-col w-[49%] items-center lg:items-center justify-center lg:gap-[20px] text-center lg:text-center">
        <img
            src={image2.firebaseUrl}
            alt={image2.altText}
            width={image2.width}
            height={image2.height}
             loading="lazy"
          />
          <p className="text-[15px] w-[90%] lg:w-[65%] text-black font-monserrat font-normal leading-[22.5px] lg:mt-[43px]">
          {text}
          </p>

          <p className="text-[15px] w-[90%] lg:w-[55%] text-black font-monserrat font-normal leading-[22.5px]"> {text2}</p>
        </div>

      </section>
     
   
  );
};

export default AlaCarteMain;
