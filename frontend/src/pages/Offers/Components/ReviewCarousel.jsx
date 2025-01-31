import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import StarsSvg from "../../../svg/offers/StarsSvg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const ReviewCarousel = ({restaurantItems=[],header}) => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align:"start",
        startIndex:0,
      });
    
      const [curr, setCurr] = useState(0);
    
      const scrollPrev = useCallback(() => {
        if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
        setCurr((curr) => (curr === 0 ? restaurantItems.length - 1 : curr - 1));
        //setCurr(newIndex);
      }, [emblaApi, curr, restaurantItems.length]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
        setCurr((curr) => (curr === restaurantItems.length - 1 ? 0 : curr + 1));
        //setCurr(newIndex);
      }, [emblaApi, curr, restaurantItems.length]);
    
      const handleJump = useCallback(
        (index) => {
          if (emblaApi && emblaApi.scrollTo) emblaApi.scrollTo(index);
          setCurr(index);
        },
        [emblaApi]
      );
    
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
    <div className="flex flex-col w-screen h-full font-montserrat items-center my-32 justify-center text-center">
      <h2 className="text-[28px] font-lora leading-[42px] italic text-customGray font-medium mb-[57px]">{header}</h2>
      <div className="w-full flex flex-col items-end md:items-end justify-center">
      <div className="overflow-hidden relative h-auto w-[95%] justify-end items-start md:items-end flex flex-col" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {restaurantItems.map((item, index) => (
              <div className="flex-[0_0_auto] bg-[#F6FAFD] py-[20px] mx-1 md:mx-2 w-[calc(55%-1rem)] sm:w-[calc(55%-1rem)] md:w-[calc(33%-1rem)] lg:mx-4 lg:w-[calc(33.3%-1rem)] xl:w-[calc(27%-2rem)] flex justify-center relative group" key={index}>
                <div className="flex flex-col w-[92%] items-start justify-center gap-[20px]">
               <div className="flex w-full items-center justify-start gap-[5%]">
               <img
                  className="object-cover w-[80px] h-[80px] rounded-full"
                  height={item.image.height}
                  width={item.image.width}
                  src={item.image.firebaseUrl}
                  alt={`Slide ${index + 1}`}
                   loading="lazy"
                />
                <div className="flex flex-col w-[66%] items-start justify-center gap-[18px] text-[15px] lg:text-[20px] font-semibold font-monserrat">
                    <span>{item.header}</span>
                    <StarsSvg className="flex" width={150} height={30}/>
                </div>
               </div>
               <p className="text-[12px] lg:text-[14px] text-black font-normal font-monserrat leading-normal">{item.text}</p>
                </div>
                
              </div>
            ))}
          </div>
          <div className="flex items-end justify-end h-[76px] w-[80%] bg-[#ffffff]">
          <button className="p-2" onClick={scrollPrev} type="button">
            <FaChevronLeft size="25" color="#ecd392"/>
          </button>
          <button onClick={scrollNext} className="p-2 mr-4">
            <FaChevronRight size="25" color="#ecd392"/>
          </button>
          <div className="flex items-center justify-end gap-1 w-11/12 md:w-3/4 h-full">
            {restaurantItems.map((_, i) => (
              <div
                key={i}
                className={`transition-all mt-8 w-[20%] h-[2px] rounded-full ${
                  curr === i ? "p-[2px] bg-[#ecd392] " : "bg-[#f5edd8]"
                }`}
                onClick={() => handleJump(i)}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
