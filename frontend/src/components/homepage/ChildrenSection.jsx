import React from 'react'
import VideoSvg from "../../svg/VideoSvg"
import AgeSvg from "../../svg/AgeSvg"
import MiniclubSvg from "../../svg/MiniclubSvg"

const ChildrenSection = () => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[60%] gap-[30px] items-center justify-center text-center'>
        <h2 className='text-[#233038] text-[40px] font-lora font-medium leading-normal'>CHILDREN</h2>
        <div className='flex items-center justify-between font-monserrat'>
            <div className='flex flex-col gap-[29px]'>
                <VideoSvg className="flex" width={40} height={38}/>
                <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>Watch your child on the video camera from the room</span>
            </div>
            <div className='flex flex-col gap-[29px]'>
                <AgeSvg className="flex" width={34} height={36}/>
                <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>Watch your child on the video camera from the room</span>
            </div>
            <div className='flex flex-col gap-[29px]'>
                <MiniclubSvg className="flex" width={38.91} height={30.63}/>
                <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>Mini Club Al’a Carte, babysitting services  </span>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ChildrenSection;
