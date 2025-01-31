import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";

const FoodCarousel = ({images = [], text, header}) => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align:"center",
        startIndex:0,
      });
    
      const [curr, setCurr] = useState(0);
    
      const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurr(emblaApi.selectedScrollSnap());
      }, [emblaApi]);
    
      useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
      }, [emblaApi, onSelect]);

      

  return (
    <div className="flex flex-col w-full h-auto items-center justify-center mt-0 lg:mt-10">
    <div className="overflow-hidden relative h-auto" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative z-10 flex-[0_0_auto] sm:mx-2 md:mx-1 w-[calc(90%-1rem)] mr-4 sm:w-[calc(70%-1rem)] md:w-[calc(64%-1rem)] lg:mx-4 xl:mx-3 lg:w-[calc(33.3%-1rem)] xl:w-[calc(35%-7rem)] flex justify-center group lg:max-h-[420px]" key={index}>
              <img
                className="cursor-pointer overflow-hidden object-cover"
                height={image.height}
                width={image.width}
                src={image.firebaseUrl}
                alt={image.altText}
                loading="lazy" 
              />
              <div className="absolute inset-0 w-full flex bg-black/30 "></div>
              <div className="flex flex-col absolute inset-0 w-full text-center text-white z-20 justify-start items-center top-1/2 -translate-y-1/2">
            <h2 className="text-[25px] md:text-[40px] lg:text-[25px] xl:text-[40px] font-medium leading-normal font-monserrat w-[40%]">{header}</h2>
            <p className="text-[#F8F8F8] text-[17px] md:text-[28px] lg:text-[18px] xl:text-[28px] leading-[42px] italic font-medium font-lora w-[40%]">{text}</p>
        </div>
            </div>
            
          ))}        
          
        </div>
       
        
    </div>
  
  </div>
  )
}

export default FoodCarousel
