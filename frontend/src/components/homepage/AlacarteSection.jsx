import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NewUnderline from "../../svg/NewUnderline";

const AlacarteSection = ({
  images = [],
  header,
  textComponent = [],
  image
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleJump = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col items-center justify-center h-auto my-[50px] w-screen gap-[40px]">
      <div className="flex flex-col w-[90%] items-center justify-center gap-[30px] ">
        <div className="flex text-center font-medium font-lora text-[#233038] gap-2 lg:gap-5">
          <span className="text-[60px] leading-[42px] italic ">7</span>
          <h2 className="text-[25px] lg:text-[28px] leading-[37px] lg:leading-[42px] ">
            {header}
          </h2>
        </div>

        <NewUnderline width={243} height={1} className="flex" />
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 items-center justify-center lg:mt-[20px] w-[85%] lg:w-[70%] text-[#233038] ">
          {textComponent.map((item, index) => (
            <div
              className="flex items-start justify-start gap-[2%] md:justify-center lg:justify-start md:cols-span-2 lg:col-span-1"
              key={index}
            >
              <img
                src={item.image.firebaseUrl}
                width={item.image.width}
                height={item.image.height}
                loading="lazy" 
              />
              <div className="flex flex-col gap-[6px]">
                <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">
                  {item.header}
                </h3>
                <p className="text-[13px] font-normal font-monserrat leading-[19px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tek bir carousel yapısı */}
      <div
        className="hidden relative w-full bg-cover bg-center h-[572px] items-center justify-center mdlg-custom:flex"
        style={{ backgroundImage: `url(${image.firebaseUrl})` }}
      >
        <div
          className="w-[85%] min-h-[515px] mx-auto overflow-hidden flex"
          ref={emblaRef}
        >
          <div className="flex grid-flow-col w-full items-end">
            {images.map((resim, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-full h-3/4 flex items-center justify-between relative"
              >
                <img
                  src={resim.firebaseUrl}
                  style={{ objectFit: "cover" }}
                  alt={`Slide ${index + 1}`}
                  className="flex h-auto w-[65%]"
                  width={resim.width}
                  height={resim.height}
                />
                <div className="flex flex-col w-[30%] text-start items-start justify-center text-white gap-[15px]">
                  <h3 className=" text-[25px] font-lora leading-normal font-medium ">
                    {resim.header}
                  </h3>
                  <NewUnderline width={100} height={1} className="mb-[15px]" />
                  <div className="flex items-center justify-start gap-[10px]">
                    <img src={resim.image.firebaseUrl} width={resim.image.width} height={resim.image.height} />
                    <span className="text-[12px]">{resim.text1}</span>
                  </div>
                  <div className="flex items-center justify-start gap-[10px]">
                    <img src={resim.image.firebaseUrl} width={resim.image.width} height={resim.image.height}   loading="lazy" />
                    <span className="text-[12px]">{resim.text2}</span>
                  </div>
                  <button className=" bottom-12 mt-[20px] bg-transparent text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-white border border-[#fff] py-[12px] px-[32px] hover:bg-white hover:text-[#233038]">
                    <p>{resim.buttonText}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination örneği */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-[6px] h-[6px] bg-slate-300 rounded-full cursor-pointer ${
                curr === i ? "bg-slate-500" : ""
              }`}
              onClick={() => handleJump(i)}
            />
          ))}
        </div>
      </div>

      {/* Eğer mobilde farklı davranış istiyorsanız, CSS ile yukarıdaki yapıyı uyarlayın veya ayrı bir carousel tanımlayın. 
          Ancak ayrı carousel tanımlayacaksanız ikinci bir useEmblaCarousel çağrısı ve ikinci bir ref gerekli. */}


    </div>
  );
};

export default AlacarteSection;
