import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft, BsNewspaper } from "react-icons/bs";
import Underline from "../../../svg/UnderLine/UnderLine"
import NewUnderline from "../../../svg/NewUnderline"
import BedSvg from "../../../svg/BedSvg"
import SingleBedSvg from "../../../svg/SingleBedSvg"
import SeaViewSvg from "../../../svg/SeaViewSvg"
import Cross2Svg from "../../../svg/Cross2Svg"

const RoomsInfoCarousel = ({images,text}) => {
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
        <div className='flex flex-col mt-0 lg:mt-10 w-screen mb-[20px] lg:mb-[66px]'>
          <div className='flex flex-col gap-[20px] items-center justify-center w-full text-[#233038]'>
            <div className=' flex-col hidden gap-[23px] text-center  text-darkB w-full items-center justify-center'>
              <span className='text-[20px] tracking-[5px] leading-normal font-lora uppercase font-medium mb-[25px]'>{text[0]}</span>
              <text className='text-[14px] font-semibold leading-[22.5px] text-start text-stoneLight'>{text[1]}</text>
              <div className="grid grid-cols-3  items-center justify-center w-full">
                <div className="flex items-center justify-center gap-2">
                    <BedSvg width={43} height={48} color="#3D515E"/>
                    <Cross2Svg width={20} height={20}/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[2]}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <SingleBedSvg width={29} height={48} color="#3D515E"/>
                    <Cross2Svg width={20} height={20}/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[3]}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[4]} </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 col-span-3 mt-8">
                    <SeaViewSvg width={43} height={30} color="#233038"/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[5]}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full relative justify-end mt-[60px] items-end ">

                {/* lg and xl */}
          <div className=" flex flex-row md:flex-col md:items-center items-end text-darkBrown/50 justify-center p-6 bottom-0 w-11/12 md:w-2/5 xl:w-1/3 md:h-full bg-[#ffffff] px-[40px] xl:px-[55px] mx-[26px] xl:mx-[50px]">
          <div className='flex flex-col gap-3 lg:gap-[23px] text-center md:text-start text-darkB w-full lg:w-11/12 items-center justify-center'>
              <span className='text-[20px] lg:text-[40px] leading-normal uppercase font-lora font-medium lg:mb-[25px]'>{text[0]}</span>
              {/* <NewUnderline width={170} height={1}/> */}
              <Underline />
              <text className='text-[12px] lg:text-[15px] font-normal leading-[22.5px] text-start font-monserrat text-black'>{text[1]}</text>
              <div className="grid grid-cols-3  items-center justify-center w-full">
                <div className="flex items-center justify-center gap-2">
                    <BedSvg width={43} height={48} color="#3D515E" className="hidden lg:flex"/>
                    <Cross2Svg width={20} height={20} className="hidden lg:flex"/>

                    <BedSvg width={26.52} height={29.61} color="#3D515E" className="flex lg:hidden"/>
                    <Cross2Svg width={10} height={10} className="flex lg:hidden"/>

                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[2]}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <SingleBedSvg width={29} height={48} color="#3D515E" className="hidden lg:flex"/>
                    <Cross2Svg width={20} height={20} className="hidden lg:flex"/>

                    <SingleBedSvg width={17.88} height={29.61} color="#3D515E" className="flex lg:hidden"/>
                    <Cross2Svg width={10} height={10} className="flex lg:hidden"/>
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[3]}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[4]} </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 col-span-3 mt-8">
                    <SeaViewSvg width={43} height={30} color="#233038" className="hidden lg:flex"/>
                    <SeaViewSvg width={36} height={25} color="#233038" className="flex lg:hidden"/>
                   <span className="text-[15px] lg:text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> {text[5]}</span>
                </div>
              </div>
              <button className="hidden lg:flex mt-3 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-[#233038] border border-[#868686FF] py-[12px] px-[32px] hover:bg-[#868686FF] hover:text-white">
                    <text >More About</text>
                </button>
            </div>
            
          </div>


          <div className="flex overflow-hidden relative w-full md:w-4/5 xl:w-2/3 h-full flex-col" ref={emblaRef}>
            <div className="flex grid-flow-col">
              {images.map((image, index) => (
                <div className="relative flex mx-1 flex-[0_0_auto] border-[2px] border-gray-100 md:max-h-[571px] shadow-lg xl:w-[calc(70%-1.4rem)] xl:mx-3 " key={index}>
                  <img src={image} alt="image" width={image.width} height={image.height} className="object-cover" />
                  
                </div>
              ))}
            </div>
            <div className="flex md:hidden items-center text-darkBrown/50 justify-center mt-5 w-full">
            <button className="flex lg:hidden mt-2 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-[#233038] border border-[#868686FF] py-[12px] px-[32px] hover:bg-[#868686FF] hover:text-white">
                    <text >More About</text>
                </button>
            </div>
          </div>
        </div>
          </div>
        </div>
      )
}

export default RoomsInfoCarousel


