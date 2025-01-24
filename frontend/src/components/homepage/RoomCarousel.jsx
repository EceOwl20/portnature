import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

export function RoomCarousel({ images }) {

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
    <div className="flex flex-col lg:w-11/12 xl:w-11/12 w-full h-auto items-center justify-center">
      <div className="overflow-hidden relative h-auto" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] mx-1 md:mx-2 sm:w-[calc(50%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 xl:mx-12 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-5rem)] w-11/12 flex justify-center relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover"
                  height={589}
                  width={348}
                  layout="responsive"
                  src={image.firebaseUrl}
                  alt={`Slide ${index + 1}`}
                />

                <div className="absolute flex flex-col top-4 text-start items-center justify-center ">
                  <span className="text-[18px] font-lora lg:text-[25px] leading-normal text-white uppercase font-medium ">{image.header}</span>
                </div>
                
                <Link to={image.buttonLink} className="absolute bottom-12 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-black border border-[#000] py-[12px] px-[32px] hover:bg-black hover:text-white">
                    <p >{image.buttonText}</p>
                </Link>
              </div>
            ))}
          </div>
          
      </div>
    </div>
  );
}