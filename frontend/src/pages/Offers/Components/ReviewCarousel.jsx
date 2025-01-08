import React, { useEffect, useCallback, useRef, useState } from "react";
import useCarousel from "embla-carousel-react";
import img from "../../../../public/images/offersRoom.png"
import StarsSvg from "../../../svg/offers/StarsSvg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const images = [img,img,img,img,img,img];

const ReviewCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align:"start",
        startIndex:0,
      });
    
      const [curr, setCurr] = useState(0);
    
      const scrollPrev = useCallback(() => {
        if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
        //setCurr(newIndex);
      }, [emblaApi, curr, images.length]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
        //setCurr(newIndex);
      }, [emblaApi, curr, images.length]);
    
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
    <div className="flex flex-col w-full h-full font-montserrat items-end my-40 justify-center">
      <div className="overflow-hidden relative h-auto w-[95%] justify-end items-end flex flex-col" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] bg-[#F6FAFD] py-[20px] mx-1 md:mx-2 sm:w-[calc(50%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 lg:w-[calc(33.3%-1rem)] xl:w-[calc(27%-2rem)] w-11/12 flex justify-center relative group" key={index}>
                <div className="flex flex-col w-[92%] items-start justify-center gap-[20px]">
               <div className="flex w-full items-center justify-start gap-[5%]">
               <img
                  className="object-cover w-[80px] h-[80px] rounded-full"
                  height={img.height}
                  width={img.width}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="flex flex-col w-[66%] items-start justify-center gap-[18px]">
                    <span>Irina S</span>
                    <StarsSvg className="flex" width={150} height={30}/>
                </div>
               </div>
               <p className="text-[14px] text-black font-normal font-monserrat leading-normal">They settled in immediately . Daily cleaning, the rooms are fully equipped with hygiene products. Amazed by the wonderful service in restaurants . Coffee and ice cream with desserts just fly away) Responsive Russian-speaking staff solves any request.</p>
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
            {images.map((_, i) => (
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
  )
}

export default ReviewCarousel
