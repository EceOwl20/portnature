import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import UnderLine from "../../svg/UnderLine/UnderLine";
import FooterLineSvg from "../../svg/FooterLineSvg";
import NewUnderline from "../../svg/NewUnderline";

const BarLoungeCarousel = ({ images=[], subImages=[]}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex w-screen min-h-screen overflow-visible mt-[50px]">
      <div className=" overflow-hidden relative flex w-full" ref={emblaRef}>
        <div className="flex grid-flow-col min-h-screen w-full">
          {images.map((image, index) => (
            <div
              className="flex-[0_0_auto] h-screen w-full relative"
              key={index}
            >
              <img
                src={image.firebaseUrl}
                style={{ objectFit: "cover" }}//1920 1079
                width={image.width}
                height={image.height}
                alt={image.altText}
                className=" flex h-screen w-full"
                loading="lazy" 
              />
              <div className="flex absolute inset-0 bg-black/50"></div>

              <div className="absolute flex flex-col lg:flex-row text-center top-[50%] -translate-y-1/2 left-[50%] transform -translate-x-1/2 w-[80%] gap-[20px] lg:gap-[10%] items-center justify-normal">
                <img
                  src={subImages[index].firebaseUrl} //608 352
                  alt={image.altText}
                  width={subImages[index].width}
                  height={subImages[index].height}
                  className="flex "
                />
                <div className="flex flex-col w-[75%] lg:w-[40%] text-[#FFF] gap-[30px] items-center justify-center text-center">
                  <h5 className="text-[25px] font-medium leading-[32px] font-lora lg:text-[28px] lg:leading-[42px]">
                  {image.header}
                  </h5>
                  <p className="text-[12px] font-monserrat font-bold leading-normal lg:text-[20px] lg:leading-[30px]">
                  {image.text}
                  </p>
                  <NewUnderline width={100} height={1} className="flex"/>
                  <button className="text-white border border-white flex py-[12px] px-[32px] w-[150px] whitespace-nowrap bg-transparent hover:text-transparent hover:bg-white text-[14px] leading-normal font-bold font-monserrat cursor-pointer">More About</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-6">
          <button
            className="p-1 hidden lg:flex"
            onClick={scrollPrev}
            type="button"
          >
            <BsChevronLeft size={35} color="#CFCFCF" />
          </button>

          <button onClick={scrollNext} className="p-1 hidden lg:flex">
            <BsChevronRight size={35} color="#CFCFCF" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BarLoungeCarousel;
