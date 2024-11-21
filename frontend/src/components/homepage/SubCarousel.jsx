import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const SubCarousel = ({images}) => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "start",
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  return (
    <section className='flex flex-col mt-10'>
      <div className='flex flex-col gap-[20px] items-center justify-center'>
        
        <div className="flex flex-col md:flex-row w-full h-full relative justify-end mt-[60px] items-end ">
      <div className="flex overflow-hidden relative w-full h-full flex-col" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex md:w-[calc(90%-1rem)] mx-2 flex-[0_0_auto] border-[2px] border-gray-100 shadow-lg xl:w-[calc(70%-1.4rem)] xl:mx-3 " key={index}>
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
        <div className="flex md:hidden items-center text-darkBrown/50 justify-between p-6 h-[76px] bottom-0 w-full bg-[#F5F5F5]">
          <button className="p-1" onClick={scrollPrev} type="button">
            <BsChevronLeft size="30" />
          </button>
          <div className="text-[45px]">{selectedIndex + 1}</div>
          <button onClick={scrollNext} className="p-1">
            <BsChevronRight size="30" />
          </button>
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}

export default SubCarousel
