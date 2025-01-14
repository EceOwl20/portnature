import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import portlogo from "../../../public/images/LogoPortbig.png";

const HomeCarousel = ({ images=[] ,header, autoplay, delay }) => {
  const plugins = autoplay ? [Autoplay({ delay })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    plugins
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex w-screen min-h-screen overflow-visible">
      <div className="overflow-hidden relative flex w-full" ref={emblaRef}>
        <div className="flex grid-flow-col min-h-screen w-full">
          {images.map((image, index) => (
            <div className="flex-[0_0_auto] h-screen w-full relative" key={index}>
              <img
                src={image.firebaseUrl}
                style={{ objectFit: "cover" }}
                width={image.width}
                height={image.height}
                alt={image.altText}
                className="flex h-screen w-full"
              />
              <div className="absolute flex flex-col text-center top-[30%] -translate-y-1/2 left-[50%] transform -translate-x-1/2">
                <span className="text-[28px] lg:text-[40px] leading-normal text-white uppercase font-medium font-lora mb-[10px] lg:mb-[20px]">
                  {header}
                </span>
                <img
                  src={portlogo}
                  alt="logo"
                  width={portlogo.width}
                  height={portlogo.height}
                  className="hidden lg:flex"
                />
                <img
                  src={portlogo}
                  alt="logo"
                  width={280.94}
                  height={110.68}
                  className="flex lg:hidden"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
