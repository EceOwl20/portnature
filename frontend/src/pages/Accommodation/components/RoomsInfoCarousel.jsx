import React, { useState, useEffect, useCallback } from "react";
import img1 from "../../../../public/images/rooms/familyroom-1.png"
import useCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft, BsNewspaper } from "react-icons/bs";
import Underline from "../../../svg/UnderLine/UnderLine"
import NewUnderline from "../../../svg/NewUnderline"
import BedSvg from "../../../svg/BedSvg"
import SingleBedSvg from "../../../svg/SingleBedSvg"
import SeaViewSvg from "../../../svg/SeaViewSvg"
import Cross2Svg from "../../../svg/Cross2Svg"

const images=[img1,img1,img1];

const RoomsInfoCarousel = ({text}) => {
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
        <div className='flex flex-col mt-10 w-screen'>
          <div className='flex flex-col gap-[20px] items-center justify-center w-full text-[#233038]'>
            <div className='flex flex-col lg:hidden gap-[23px] text-center  text-darkB w-full items-center justify-center'>
              <span className='text-[25px] tracking-[5px] leading-normal font-lora uppercase font-medium mb-[25px]'>{text[0]}</span>
              <text className='text-[14px] font-semibold leading-[22.5px] text-start text-stoneLight'>{text[1]}</text>
              
            </div>
            <div className="flex flex-col md:flex-row w-full h-full relative justify-end mt-[60px] items-end ">

                {/* lg and xl */}
          <div className=" hidden md:flex flex-row md:flex-col md:items-center items-end text-darkBrown/50 justify-center p-6 bottom-0 w-1/6 md:w-2/5 xl:w-1/3 md:h-full bg-[#ffffff] px-[40px] xl:px-[55px] mx-[26px] xl:mx-[50px]">
          <div className='flex flex-col gap-[23px] text-center md:text-start text-darkB w-11/12 items-center justify-center'>
              <span className='text-[40px] leading-normal uppercase font-lora font-medium mb-[25px]'>{text[0]}</span>
              {/* <NewUnderline width={170} height={1}/> */}
              <Underline />
              <text className='text-[15px] font-normal leading-[22.5px] text-start font-monserrat text-black'>{text[1]}</text>
              <div className="grid grid-cols-3  items-center justify-center w-full">
                <div className="flex items-center justify-center gap-2">
                    <BedSvg width={43} height={48}/>
                    <Cross2Svg width={20} height={20}/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> 2</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <SingleBedSvg width={29} height={48}/>
                    <Cross2Svg width={20} height={20}/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> 2</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> 45 m2 </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 col-span-3 mt-8">
                    <SeaViewSvg width={43} height={30}/>
                   <span className="text-[20px] font-lora font-medium leading-[42px] text-[#3D515E]"> Corner Sea View</span>
                </div>
              </div>
              <button className="flex mt-2 bg-white text-[14px] button-shadow font-bold leading-normal font-montserrat text-center text-[#233038] border border-[#868686FF] py-[12px] px-[32px] hover:bg-[#868686FF] hover:text-white">
                    <text >More About</text>
                </button>
            </div>
            
          </div>


          <div className="flex overflow-hidden relative w-full md:w-3/5 xl:w-2/3 h-full flex-col" ref={emblaRef}>
            <div className="flex grid-flow-col">
              {images.map((image, index) => (
                <div className="relative flex mx-1 flex-[0_0_auto] border-[2px] border-gray-100 shadow-lg xl:w-[calc(70%-1.4rem)] xl:mx-3 " key={index}>
                  <img src={image} alt="image" width={image.width} height={image.height} className="object-cover" />
                  
                </div>
              ))}
            </div>
            <div className="flex md:hidden items-center text-darkBrown/50 justify-between p-6 h-[76px] bottom-0 w-full bg-[#ffffff]">
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
        </div>
      )
}

export default RoomsInfoCarousel


