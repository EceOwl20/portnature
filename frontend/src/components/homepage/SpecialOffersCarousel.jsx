import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import { RoomCarousel } from './RoomCarousel';
import VipSvg from "../../svg/VipSvg"

const Accommodation = ({images=[],header}) => {
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
    <div className='flex flex-col w-screen h-auto items-center justify-around my-32 gap-1'>
      <div className='flex flex-col w-[90%] lg:w-[50%] text-center items-center justify-center gap-[30px]'>
        <h2 className='font-lora text-[25px] lg:text-[40px] font-medium leading-normal text-[#233038]'>{header}</h2>
      </div>
      <div className='flex w-[90%] items-center justify-center'>
       <div className="flex flex-col lg:w-11/12 xl:w-11/12 w-full h-[416px] items-center justify-center">
      <div className="overflow-hidden relative h-auto" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto]  mx-1 md:mx-2 sm:w-[calc(50%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 xl:mx-12 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-5rem)] w-11/12 flex justify-start items-end relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover h-[380px] z-20"
                  height={380}
                  width={261}
                  layout="responsive"
                  src={image.firebaseUrl}
                  alt={`Slide ${index + 1}`}
                />

                <div className="flex border border-[#CFCFCF] absolute inset-10 top-[-29px] z-10"></div>

                <div className="absolute flex flex-col top-10 left-1/3 -translate-x-1/3 text-center items-center justify-center z-20">
                    <VipSvg width={54} height={40}/>
                  <span className="text-[17.552px] font-lora lg:text-[23px] lg:leading-[42px] text-white font-medium leading-[31.996px] italic">{image.header}</span>
                  <p className="w-[60%] text-[15px] text-[#CFCFCF] font-normal leading-[22.5px] font-monserrat">{image.text}</p>
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
