import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft, BsNewspaper } from "react-icons/bs";
import Underline from "../../../svg/UnderLine/UnderLine"
import NewUnderline from "../../../svg/NewUnderline"
import BedSvg from "../../../svg/BedSvg"
import SingleBedSvg from "../../../svg/SingleBedSvg"
import SeaViewSvg from "../../../svg/SeaViewSvg"
import Cross2Svg from "../../../svg/Cross2Svg"
import BigBirdSvg from "../../../svg/room/BigBirdSvg"
import { Link } from "react-router-dom";

const RoomsInfoCarousel = ({images=[],header, text, items=[], buttonText, buttonLink}) => {
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
    //md:items-center items-end text-darkBrown/50 justify-center p-6 bottom-0 w-11/12 md:w-2/5 xl:w-1/3 md:h-full px-[40px] xl:px-[55px] mx-[26px] xl:mx-[50px]
      return (
        <div className='flex flex-col mt-0 lg:mt-10 w-screen items-center justify-center mb-[20px] lg:mb-[66px] relative'>
          <div className='flex flex-col gap-[20px] items-center justify-center w-full text-[#233038]'>
            <div className="flex flex-col md:flex-row w-full h-full relative justify-center items-center lg:justify-end mt-[60px] lg:items-end ">
          <div className=" flex flex-row lg:flex-col w-[90%] md:w-[40%] items-center justify-center"> 
         
         
          <div className='flex flex-col gap-3 md:gap-0 lg:gap-[23px] w-[90%] text-center lg:text-start text-darkB lg:w-11/12 items-center justify-center'>
              <span className='text-[20px] lg:text-[40px] leading-normal uppercase font-lora font-medium mb-5 md:mb-[8px]'>{header}</span>
              {/* <NewUnderline width={170} height={1}/> */}
              <Underline className="hidden lg:flex"/>
              <p className='text-[12px] lg:text-[15px] font-normal leading-[22.5px] text-center font-monserrat text-black'>{text}</p>
              <Underline className="flex lg:hidden"/>
              <div className="flex flex-col-reverse md:flex-col items-center justify-center w-full gap-[25px]">
                <div className="flex flex-row w-full justify-between items-center">
                <div className="flex items-center justify-center gap-2">
                <img src={items[0].firebaseUrl} width={43} height={48} color="#3D515E" className="hidden lg:flex" loading="lazy" />
                    <Cross2Svg width={20} height={20} className="hidden lg:flex"/>

                    <img src={items[0].firebaseUrl} width={26.52} height={29.61} color="#3D515E" className="flex lg:hidden" loading="lazy" />
                    <Cross2Svg width={10} height={10} className="flex lg:hidden"/>

                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {items[0].text}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <img src={items[1].firebaseUrl} width={29} height={48} color="#3D515E" className="hidden lg:flex" loading="lazy" />
                    <Cross2Svg width={20} height={20} className="hidden lg:flex"/>

                    <img src={items[1].firebaseUrl} width={17.88} height={29.61} color="#3D515E" className="flex lg:hidden" loading="lazy" />
                    <Cross2Svg width={10} height={10} className="flex lg:hidden"/>
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]">{items[1].text}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {items[2].text} </span>
                </div>
                </div>


                <div className="flex flex-row items-center justify-center gap-2 col-span-3 mt-8">
                <img src={items[2].firebaseUrl} width={43} height={30} color="#233038" className="hidden lg:flex" loading="lazy" />
                <img src={items[2].firebaseUrl} width={36} height={25} color="#233038" className="flex lg:hidden" loading="lazy" />
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {items[2].text}</span>
                </div>
              </div>
              <button className="hidden lg:flex mt-3 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-[#233038] border border-[#868686FF] py-[12px] px-[32px] hover:bg-[#868686FF] hover:text-white">
                    <p >{buttonText}</p>
                </button>
            </div>
            
          </div>


          <div className="flex overflow-hidden relative w-full md:w-3/5 xl:w-2/3 h-[50vh] lg:h-full flex-col items-center justify-center" ref={emblaRef}>
            <div className="flex grid-flow-col">
              {images.map((image, index) => (
                <div className="relative flex mx-1 flex-[0_0_auto] border-[2px] h-[40vh] border-gray-100 md:max-h-[571px] shadow-lg xl:w-[calc(70%-1.4rem)] xl:mx-3 " key={index}>
                  <img src={image.firebaseUrl} alt="image"  className="object-cover " />
                  
                </div>
              ))}
            </div>
            <div className="flex md:hidden items-center text-darkBrown/50 justify-center mt-5 w-full">
            <Link to={buttonLink} className="flex lg:hidden mt-2 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-[#233038] border border-[#868686FF] py-[12px] px-[32px] hover:bg-[#868686FF] hover:text-white">
                    <p>{buttonText}</p>
                </Link>
            </div>
          </div>
        </div>
          </div>
          {/* <BigBirdSvg width={1013.992} height={746.28} className="hidden lg:flex absolute top-0 left-[-100] scale-x-[-1]"/> */}
        </div>
      )
}

export default RoomsInfoCarousel


