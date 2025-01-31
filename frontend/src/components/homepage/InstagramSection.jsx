import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";

export function InstagramSection({ images=[], image }) {

  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align:"center",
    startIndex:1,
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
    <div className="flex flex-col w-full h-auto items-center justify-center mt-[60px] relative">
      <div className="overflow-hidden relative h-auto" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] mx-1 md:mx-2 sm:w-[calc(40%-1rem)] md:w-[calc(35%-0.5rem)] lg:mx-3 xl:mx-[15px] lg:w-[calc(25%-0.75rem)] xl:w-[calc(16%-1.8rem)]  flex justify-center relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover h-[270px]"
                  height={270}
                  width={270}
                  src={image.firebaseUrl}
                  alt={`Slide ${index + 1}`}
                  loading="lazy" 
                />

                <div className="absolute flex flex-col top-4 text-start items-center justify-center ">
                  <span className="text-[18px] font-lora lg:text-[25px] leading-normal text-white uppercase font-medium "></span>
                </div>
                
                
              </div>
            ))}
          </div>
      </div>
      <img src={image.firebaseUrl} alt="instagram" width={image.width} height={image.height} className="hidden md:flex absolute md:left-[50%] -translate-x-1/2 lg:-translate-x-0 lg:left-[18.5%]" loading="lazy" />
    </div>
  );
}
