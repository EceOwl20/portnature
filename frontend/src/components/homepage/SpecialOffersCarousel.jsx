import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import { RoomCarousel } from './RoomCarousel';
import VipSvg from "../../svg/VipSvg"
import { Link } from 'react-router-dom'

const Accommodation = ({images=[],header}) => {
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
    <div className='flex flex-col w-screen h-auto items-center justify-around my-32 gap-1'>
      <div className='flex flex-col w-[90%] lg:w-[50%] text-center items-start ml-[12%] lg:ml-0 justify-center gap-[30px]'>
        <h2 className='font-lora text-[28px] lg:text-[32px] font-medium leading-normal text-[#233038] mb-10'>{header}</h2>
      </div>
      <div className='flex w-[90%] items-center justify-center'>
       <div className="flex flex-col lg:w-11/12 xl:w-11/12 w-full items-center justify-center">
       <div className="overflow-hidden relative w-11/12 md:w-5/6" ref={emblaRef}>
        <div className="flex gap-x-4 ">
          {images.map((image, index) => (
            <div 
              className="relative flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_45%] lg:flex-[0_0_33%] xl:flex-[0_0_40%] lg:min-w-[343px] flex justify-center items-start" 
              key={index}
              style={{ position: 'relative' }}
            >
              <div className="absolute border border-[#CFCFCF] top-0 right-0 w-10/12 h-[504px] z-10"></div>
              <img
                src={image.firebaseUrl}
                alt={image.altText}
                width={343}
                height={504}
                className="object-cover w-10/12 h-[504px] relative z-20 mt-10 mr-1"
                loading="lazy" 
              />
              <div className="absolute flex flex-col top-20 left-1/2  -translate-x-1/2 text-center items-center justify-center z-20">
                    <VipSvg width={54} height={40}/>
                  <span className="text-[17.552px] font-lora lg:text-[23px] lg:leading-[42px] text-white font-medium leading-[31.996px] italic">{image.header}</span>
                  <p className="w-[68%] text-[15px] text-[#CFCFCF] font-normal leading-[22.5px] font-monserrat">{image.text}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
      </div>
    </div>
  )
}

export default Accommodation


{/* <div className="absolute flex flex-col top-10 left-1/2 lg:left-1/3 -translate-x-1/2  lg:-translate-x-1/3 text-center items-center justify-center z-20">
                    <VipSvg width={54} height={40}/>
                  <span className="text-[17.552px] font-lora lg:text-[23px] lg:leading-[42px] text-white font-medium leading-[31.996px] italic">{image.header}</span>
                  <p className="w-[60%] text-[15px] text-[#CFCFCF] font-normal leading-[22.5px] font-monserrat">{image.text}</p>
                </div> */}