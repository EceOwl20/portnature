import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import food1 from "/images/food1.png"

const images=[food1, food1,food1, food1,food1, food1];

const FoodCarousel = ({images}) => {
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
    <div className="flex flex-col w-full h-auto items-center justify-center mt-10">
    <div className="overflow-hidden relative h-auto" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative z-10 flex-[0_0_auto] sm:mx-2 md:mx-3 sm:w-[calc(70%-1rem)] lg:mx-4 xl:mx-3 lg:w-[calc(33.3%-1rem)] xl:w-[calc(35%-7rem)] w-full flex justify-center group" key={index}>
              <img
                className="cursor-pointer overflow-hidden object-cover"
                height={image.height}
                width={image.width}
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}        
         
        </div>
        <div className="absolute inset-0 w-full flex bg-black/50 "></div>
        <div className="flex flex-col absolute inset-0 w-full text-center text-white z-20 justify-start items-start top-1/2 -translate-y-1/2">
            <h2 className="text-[40px] font-medium leading-normal font-monserrat w-[40%]">FOOD & DRINKS</h2>
            <p className="text-[#F8F8F8] text-[28px] leading-[42px] italic font-medium font-lora w-[40%]">You deserve the best! We offer the best…</p>
        </div>
    </div>
  
  </div>
  )
}

export default FoodCarousel
