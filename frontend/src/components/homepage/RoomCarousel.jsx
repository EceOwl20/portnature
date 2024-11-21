import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";

export function RoomCarousel({ images, text, header }) {

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
    <div className="flex flex-col lg:w-11/12 xl:w-11/12 w-full h-screen items-center mt-[50px]">
      <text className="text-[18px] lg:text-[40px] uppercase leading-normal text-center text-stoneLight tracking-[3.6px] lg:tracking-[8px] font-medium w-11/12 mb-[36px] lg:mb-[60px]">other</text>
      <div className="overflow-hidden relative h-auto" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] mx-1 md:mx-2 sm:w-[calc(50%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 xl:mx-12 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-5rem)] w-11/12 flex justify-center relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover"
                  height={589}
                  width={348}
                  layout="responsive"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />

                <div className="absolute flex flex-col top-4 text-start items-center justify-center ">
                  <span className="text-[18px] font-lora lg:text-[25px] leading-normal text-white uppercase font-medium ">{header[index]}</span>
                </div>
                
                <button className="absolute bottom-12 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-black border border-[#000] py-[12px] px-[32px] hover:bg-black hover:text-white">
                    <text >More About</text>
                </button>
              </div>
            ))}
          </div>
          
      </div>
    </div>
  );
}