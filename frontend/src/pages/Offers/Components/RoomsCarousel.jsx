import React, { useEffect, useCallback, useRef, useState } from "react";
import useCarousel from "embla-carousel-react";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import PersonSvg from "../../../svg/room/PersonSvg"
import AreaSvg from "../../../svg/room/AreaSvg"
import ImageSearchSvg from "../../../svg/offers/ImageSearchSvg"
import img from "../../../../public/images/offersRoom.png"

const images = [img,img,img,img,img,img];

const RoomsCarousel = () => {
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
     <div className="flex flex-col w-[90%] h-full font-montserrat items-center">
      <div className="overflow-hidden relative h-auto " ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] mx-1 md:mx-2 w-[calc(95%-1rem)] md:w-[calc(80%-1rem)] lg:mx-4 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-2rem)]  flex justify-center relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover w-[90%]"
                  height={img.height}
                  width={img.width}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          {/* Yukarıdan Kayarak Gelen Metin ve Sembol */}
          <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 transition-transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-700 ease-in-out">
            <div className="flex items-center justify-center flex-col text-white text-center">
              
              <p className="text-[20px] text-grayLight leading-[27px] font-semibold px-4 xl:px-7">
              
              </p>
            </div>
          </div>


                <div className="absolute w-full flex top-1/2 text-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 items-center justify-around text-[#F5F5F5] text-[10px] font-bold font-monserrat leading-normal">
                  <div className="flex flex-col items-center justify-center">
                    <PersonSvg className="flex" width={33.567} height={33.567}/>
                    <span className="">4 Adults + 1</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <AreaSvg className="flex" width={36.1} height={36.1}/>
                    <span className="">45 m2</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <ImageSearchSvg className="flex" width={36.1} height={36.1}/>
                    <span className="">Corner Sea View</span>
                  </div>
                 
                </div>
                
                <button className="absolute bottom-3 right-3 bg-white text-[14px] button-shadow lg:text-[16px] font-bold leading-normal font-montserrat text-center text-customGray border-[1px] w-[172px] py-[13px] px-[20px] animated-transparentbutton">
                    <text className="button-text">Rooms name</text>
                    <div className="extra-animation1"></div>
                    <div className="extra-animation2"></div>
                </button>
              </div>
            ))}
          </div>
          
      </div>
    </div>
  )
}

export default RoomsCarousel