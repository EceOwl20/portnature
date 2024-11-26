import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const SubCarousel = ({images}) => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "start",
    startIndex: 0,
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
    <section className='flex flex-col my-[60px] lg:my-[82px]'>
      <div className='flex flex-col gap-[20px] items-center justify-center'>
        
        <div className="flex flex-col  w-full h-full relative justify-center lg:justify-start mt-[60px] items-center lg:items-start">
      <div className="flex overflow-hidden relative w-full h-full flex-col" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex md:w-[calc(90%-1rem)] mx-2 flex-[0_0_auto] border-[2px] h-[227px] lg:h-auto border-gray-100 shadow-lg xl:w-[calc(70%-1.4rem)] xl:mx-3 w-full" key={index}>
              <img
                src={image}
                layout="cover"
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex w-full"
              />
              
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex items-center justify-center gap-2 w-11/12 md:w-3/4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all mt-8 w-[6px] h-[6px] bg-slate-300 rounded-full ${
                  curr === i ? "p-1" : "bg-slate-200"
                }`}
                onClick={() => handleJump(i)}
              />
            ))}
          </div>
    </div>
      </div>
    </section>
  )
}

export default SubCarousel
