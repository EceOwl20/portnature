import React from 'react'
import VideoSvg from "../../svg/VideoSvg"
import AgeSvg from "../../svg/AgeSvg"
import MiniclubSvg from "../../svg/MiniclubSvg"
import img1 from "../../../public/images/children/child1.png"
import img2 from "../../../public/images/children/child2.png"

import img4 from "../../../public/images/children/child4.png"
import img5 from "../../../public/images/children/child5.png"
import img6 from "../../../public/images/children/child6.png"
import img7 from "../../../public/images/children/child7.png"
import img8 from "../../../public/images/children/child8.png"
import img9 from "../../../public/images/children/child9.png"
import img10 from "../../../public/images/children/child10.png"
import img11 from "../../../public/images/children/child11.png"
import { ChildrenCarousel } from './ChildrenCarousel'

const images = [img1, img2,img4, img5, img6, img7, img8, img9,img10,img11];

const ChildrenSection = () => {
  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] mt-10'>
      <div className='flex flex-col w-[90%] lg:w-[60%] gap-[30px] items-center justify-center text-center'>
        <h2 className='text-[#233038] text-[25px] lg:text-[40px] font-lora font-medium leading-normal'>CHILDREN</h2>
        <div className='flex w-screen'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
        <div className='grid grid-cols-2 lg:flex items-center justify-center lg:justify-between font-monserrat gap-[20px]'>
            <div className='flex flex-col gap-[29px] w-[90%] lg:w-[32%] items-center justify-center'>
                <VideoSvg className="hidden lg:flex" width={40} height={38} color="#233038"/>
                <VideoSvg className="flex lg:hidden" width={40} height={38} color="#CFCFCF"/>
                <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>Watch your child on the video camera from the room</span>
            </div>
            <div className='flex flex-col gap-[29px] w-[90%] lg:w-[32%] items-center justify-center'>
                <AgeSvg className="hidden lg:flex" width={34} height={36} color="#233038"/>
                <AgeSvg className="flex lg:hidden" width={40} height={41} color="#CFCFCF"/>
                <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>Watch your child on the video camera from the room</span>
            </div>
            <div className='flex flex-col gap-[29px] w-[90%] lg:w-[32%] items-center justify-center text-center col-span-2 md:col-span-1'>
                <MiniclubSvg className="hidden lg:flex" width={38.91} height={30.63} color="#233038"/>
                <MiniclubSvg className="flex lg:hidden" width={40} height={32} color="#CFCFCF"/>
                <span className='w-[70%] lg:w-full text-[14px] text-[#233038CC] leading-normal font-bold'>Mini Club Al’a Carte, babysitting services  </span>
            </div>
        </div>
      </div>
      <ChildrenCarousel images={images}/>
      <button className='flex bg-white border border-[#868686] py-[12px] px-[31px] font-monserrat font-bold text-[14px] text-center text-[#233038] leading-normal hover:bg-[#233038] hover:text-[#fff]'>More About</button>
    </div>
  )
}
export default ChildrenSection;
