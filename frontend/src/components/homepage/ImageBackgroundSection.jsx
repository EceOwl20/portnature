import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import VipSvg from "../../svg/VipSvg";

import vip from "../../../public/images/homepage/vip-customer.jpeg";
import mixology from "../../../public/images/homepage/mixology.jpeg";
import wedding from "../../../public/images/homepage/wedding.jpeg";

const images = [vip, mixology, wedding];
const headers = ["Become a VIP customer", "Mixology Expert", "Wedding gift"];
const texts = [
  "By booking a trip on our website",
  "Presentation special for you",
  "Spend time together",
];

const Accommodation = () => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
  });

  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi?.scrollPrev) emblaApi.scrollPrev();
    setCurr((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi?.scrollNext) emblaApi.scrollNext();
    setCurr((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [emblaApi]);

  const handleJump = useCallback(
    (index) => {
      if (emblaApi?.scrollTo) emblaApi.scrollTo(index);
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
    
    <section
      className="flex flex-col w-screen h-auto items-center justify-around mb-10 gap-10"
      aria-labelledby="special-offers-heading"
    >
      
      <h2
        id="special-offers-heading"
        className="font-lora text-[25px] lg:text-[40px] font-medium leading-normal text-[#233038] text-center"
      >
        Special Offers
      </h2>

      <div className="flex w-[90%] items-center justify-center">
        <div className="flex flex-col lg:w-11/12 xl:w-11/12 w-full h-[416px] items-center justify-center">
          
          <div className="overflow-hidden relative h-auto" ref={emblaRef}>
            
            <ul className="flex grid-flow-col p-0 m-0 list-none">
              {images.map((image, index) => (
                <li
                  key={index}
                  className="flex-[0_0_auto] mx-1 md:mx-2 sm:w-[calc(50%-1rem)] 
                             md:w-[calc(33.3%-1rem)] lg:mx-4 xl:mx-12 
                             lg:w-[calc(33.3%-1rem)] xl:w-[calc(33.3%-5rem)] 
                             w-11/12 flex justify-start items-end relative group"
                >
                  <figure className="w-full h-auto relative">
                    
                    <img
                      className="cursor-pointer overflow-hidden object-cover h-[380px] z-20 w-full"
                      height={380}
                      width={261}
                      src={image}
                      alt={headers[index] || `Slide ${index + 1}`}
                    />

                    
                    <div className="flex border border-[#CFCFCF] absolute inset-10 top-[-29px] z-10"></div>

                    
                    <figcaption className="absolute flex flex-col top-10 left-1/3 -translate-x-1/3 text-center items-center justify-center z-20">
                      
                      <VipSvg width={54} height={40} aria-hidden="true" />

                      <h3 className="text-[17.552px] font-lora lg:text-[23px] lg:leading-[42px] text-white font-medium leading-[32px] italic">
                        {headers[index]}
                      </h3>
                      <p className="w-[60%] text-[15px] text-[#CFCFCF] font-normal leading-[22.5px] font-monserrat">
                        {texts[index]}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="border px-3 py-1"
            >
              Prev
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="border px-3 py-1"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
