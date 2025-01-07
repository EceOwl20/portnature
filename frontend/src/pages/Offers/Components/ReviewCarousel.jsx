import React, { useEffect, useCallback, useRef, useState } from "react";
import useCarousel from "embla-carousel-react";
import img from "../../../../public/images/offersRoom.png"
import StarsSvg from "../../../svg/offers/StarsSvg";

const images = [img,img,img,img,img,img];

const ReviewCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align:"center",
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
    <div className="flex flex-col w-full h-full font-montserrat items-center">
      <div className="overflow-hidden relative h-auto " ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] bg-[#F6FAFD]mx-1 md:mx-2 sm:w-[calc(50%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-2rem)] w-11/12 flex justify-center relative group" key={index}>
                <div className="flex flex-col w-[95%] items-center justify-center">
               <div className="flex ">
               <img
                  className="object-cover w-[80px] h-[80px] rounded-full"
                  height={img.height}
                  width={img.width}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="flex flex-col w-[66%] items-center justify-center gap-[18px]">
                    <span>Irina S</span>
                    <StarsSvg className="flex" width={150} height={30}/>
                </div>
               </div>
               <p className="text-[14px] text-black font-normal font-monserrat leading-normal">They settled in immediately . Daily cleaning, the rooms are fully equipped with hygiene products. Amazed by the wonderful service in restaurants . Coffee and ice cream with desserts just fly away) Responsive Russian-speaking staff solves any request.</p>
                </div>
                
              </div>
            ))}
          </div>
          
      </div>
    </div>
  )
}

export default ReviewCarousel
