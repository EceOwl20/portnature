import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";

export function ChildrenCarousel({ images }) {

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
    <div className="flex flex-col w-full h-auto items-center justify-center">
      <div className="overflow-hidden relative h-auto" ref={emblaRef}>
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div className="flex-[0_0_auto] sm:mx-2 md:mx-3 sm:w-[calc(70%-1rem)] md:w-[calc(33.3%-1rem)] lg:mx-4 xl:mx-3 lg:w-[calc(33.3%-1rem)] xl:w-[calc(33%-5rem)] w-full flex justify-center relative group" key={index}>
                <img
                  className="cursor-pointer overflow-hidden object-cover"
                  height={image.height}
                  width={image.width}
                  layout="responsive"
                  src={image.firebaseUrl}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          
      </div>
      <div className="flex items-center justify-center gap-2 w-11/12 md:w-3/4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all mt-8 w-2 h-2 bg-slate-300 rounded-full ${
                  curr === i ? "p-1" : "bg-slate-200"
                }`}
                onClick={() => handleJump(i)}
              />
            ))}
          </div>
    </div>
  );
}