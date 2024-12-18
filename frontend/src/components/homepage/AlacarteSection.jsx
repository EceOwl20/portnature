import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NewUnderline from "../../svg/NewUnderline";
import LeafSvg from "../../svg/LeafSvg";
import alacarteBackground from "../../../public/images/homepage/alacarteBackground.png";
import alacarte1 from "../../../public/images/homepage/alacarte1.jpeg";
import alacarte2 from "../../../public/images/homepage/alacarte2.png";
import alacarte3 from "../../../public/images/homepage/alacarte3.png";
import alacarte4 from "../../../public/images/homepage/alacarte4.png";
import alacarte5 from "../../../public/images/homepage/alacarte5.png";
import alacarte6 from "../../../public/images/homepage/alacarte6.png";
import alacarte7 from "../../../public/images/homepage/alacarte7.png";
import ClockSvg from "../../svg/ClockSvg";
import CheckSvg from "../../svg/CheckSvg";

const AlacarteSection = () => {
  const alacarteImages = [alacarte1, alacarte2, alacarte3, alacarte4, alacarte5, alacarte6, alacarte7];
  const alacarteHeaders = [
    "FAR  EAST A’LA CARTE ",
    "ALL DAY DINING A’LA CARTE",
    "FRENCH A’LA CARTE",
    "SEASIDE A’LA CARTE",
    "ITALIAN A’LA CARTE",
    "MINI CLUB A’LA CARTE",
    "SUSHI BAR A’LA CARTE",
  ];

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
      {/* Üstteki metin alanları aynı kalabilir */}
      <div className="flex flex-col w-[90%] items-center justify-center gap-[30px] ">
        <div className="flex text-center font-medium font-lora text-[#233038] gap-2 lg:gap-5">
          <span className="text-[60px] leading-[42px] italic ">7</span>
          <h2 className="text-[25px] lg:text-[28px] leading-[37px] lg:leading-[42px] ">
            Of Our Premium A’La Carte Restaurants
          </h2>
        </div>

        <NewUnderline width={243} height={1} className="flex" />
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 items-center justify-center lg:mt-[20px] w-[85%] lg:w-[70%] text-[#233038] ">
          <div className="flex items-start justify-start gap-[2%]">
            <LeafSvg width={31} height={36} color="#233038" />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
              <p className="text-[13px] font-normal font-monserrat leading-[19px]">
                We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-[2%]">
            <LeafSvg width={31} height={36} color="#233038" />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
              <p className="text-[13px] font-normal font-monserrat leading-[19px]">
                We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-[2%] md:justify-center lg:justify-start md:cols-span-2 lg:col-span-1">
            <LeafSvg width={31} height={36} color="#233038" />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
              <p className="text-[13px] font-normal font-monserrat leading-[19px]">
                We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tek bir carousel yapısı */}
      <div
        className="relative w-screen bg-cover bg-center md:h-[572px] md:flex md:items-center md:justify-center"
        style={{ backgroundImage: `url(${alacarteBackground})` }}
      >
        <div className="w-[85%] min-h-[515px] mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {alacarteImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] flex items-center justify-between relative">
                <img
                  src={image}
                  style={{ objectFit: "cover" }}
                  alt={`Slide ${index + 1}`}
                  className="h-auto w-[60%]"
                />
                <div className="flex flex-col w-[30%] text-start items-start justify-center text-white gap-[15px]">
                  <h3 className=" text-[25px] font-lora leading-normal font-medium ">{alacarteHeaders[index]}</h3>
                  <NewUnderline width={100} height={1} className="mb-[15px]" />
                  <div className="flex items-center justify-start gap-[10px]">
                    <ClockSvg width={23} height={23} />
                    <span className="text-[12px]">At any working time</span>
                  </div>
                  <div className="flex items-center justify-start gap-[10px]">
                    <CheckSvg width={19} height={18} />
                    <span className="text-[12px]">Booking is not required</span>
                  </div>
                  <button className="absolute bottom-12 mt-[20px] bg-transparent text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-white border border-[#fff] py-[12px] px-[32px] hover:bg-white hover:text-[#233038]">
                    <p>More About</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination örneği */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
          {alacarteImages.map((_, i) => (
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
