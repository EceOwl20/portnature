import React, {useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NewUnderline from "../../svg/NewUnderline";
import LeafSvg from "../../svg/LeafSvg"
import alacarteBackground from "../../../public/images/homepage/alacarteBackground.png"
import alacarte1 from "../../../public/images/homepage/alacarte1.jpeg"
import alacarte2 from "../../../public/images/homepage/alacarte2.png"
import alacarte3 from "../../../public/images/homepage/alacarte3.png"
import alacarte4 from "../../../public/images/homepage/alacarte4.png"
import alacarte5 from "../../../public/images/homepage/alacarte5.png"
import alacarte6 from "../../../public/images/homepage/alacarte6.png"
import alacarte7 from "../../../public/images/homepage/alacarte7.png"

import ClockSvg from "../../svg/ClockSvg"
import CheckSvg from "../../svg/CheckSvg"

const AlacarteSection = () => {
  const alacarteImages = [alacarte1,alacarte2,alacarte3,alacarte4,alacarte5,alacarte6,alacarte7];
  const alacarteHeaders=["FAR  EAST A’LA CARTE ","ALL DAY DINING A’LA CARTE","FRENCH A’LA CARTE","SEASIDE A’LA CARTE","ITALIAN A’LA CARTE","MINI CLUB A’LA CARTE","SUSHI BAR A’LA CARTE"];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center justify-center h-auto my-[50px] w-screen gap-[40px]">
      <div className="flex flex-col w-[90%] items-center justify-center gap-[30px] ">
        <div className="flex text-center font-medium font-lora text-[#233038] gap-2 lg:gap-5">
          <span className="text-[60px] leading-[42px] italic ">7</span>
          <h2 className="text-[25px] lg:text-[28px] leading-[37px] lg:leading-[42px] ">
            Of Our Premium A’La Carte Restaurants
          </h2>
        </div>
        
        <NewUnderline width={243} height={1} className="flex"/>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 items-center justify-center lg:mt-[20px] w-[85%] lg:w-[70%] text-[#233038] ">
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-[2%]">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-[2%] md:justify-center lg:justify-start md:cols-span-2 lg:col-span-1">
                <LeafSvg width={31} height={36}/>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-lora italic leading-[42px] font-medium">Top Quality</h3>
                    <p className="text-[13px] font-normal font-monserrat leading-[19px]">We do not work with unknown brands. We offer top quality We do not work with unknown brands. We offer top quality</p>
                </div>
            </div>
        </div>
      </div>



      <div className="flex items-center justify-center h-[572px] w-screen bg-cover bg-center " style={{ backgroundImage: `url(${alacarteBackground})` }}>
      <div className="flex w-[85%] min-h-[515px] overflow-visible  items-center justify-start">
      <div
      className=" overflow-hidden relative flex w-[90%] h-full items-center justify-center"
      ref={emblaRef}
    >
      <div className="flex grid-flow-col min-h-[400px] w-full">
        {alacarteImages.map((image, index) => (
          <div className="flex-[0_0_auto] flex-row flex items-center justify-between h-auto w-full relative" key={index}>
            <img src={image} style={{objectFit:'cover'}} width={image.width} height={image.height} alt={`Slide ${index + 1}`} className=" flex h-auto w-[60%]"/>

                <div className="flex flex-col w-[30%] text-start items-center justify-center text-white">
                <h3 className=" text-[25px] font-lora leading-normal font-medium">{alacarteHeaders[index]}</h3>
                <NewUnderline width={100} height={1}/>
                <div className="flex items-center justify-start gap-[10px]">
                <ClockSvg width={23} height={23}/>
                  <span className="text-[12px]">At any working time</span>
                </div>
                <div className="flex items-center justify-start gap-[10px]">
                  <CheckSvg width={19} height={18}/>
                  <span className="text-[12px]">Booking is not required</span>
                </div>
                <button className="absolute bottom-12 bg-transparent text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-white border border-[#fff] py-[12px] px-[32px] hover:bg-white hover:text-[#233038]">
                    <text >More About</text>
                </button>
                </div>

          </div>
        ))}
      </div>

      
    </div>

    </div>
      </div>
    </div>
  );
};

export default AlacarteSection;
