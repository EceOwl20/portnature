import React from 'react'
import Underline from "../../../svg/UnderLine/UnderLine"

const MeetingSection = ({image,header,text,span}) => {
  return (
    <div id='thermesos' className='flex w-full justify-center items-center my-20'>
      <div className='flex flex-col lg:flex-row w-[90%] justify-between items-center'>
        <img src={image.firebaseUrl} alt={image.altText} className='w-[95%] lg:w-[60%]'/>
        <div className='flex flex-col lg:w-[35%] items-center md:items-start justify-center md:justify-start text-center md:text-start w-[95%]'>
           <div className='w-[85%] lg:w-[70%] flex flex-col gap-3 lg:gap-[30px] mt-4'>
           <h2 className='text-[25px] lg:text-[40px] text-customGray font-lora leading-normal font-medium'>{header}</h2>
            <Underline/>
            <p className='text-black text-[13px] lg:text-[15px] font-monserrat font-normal leading-[22.5px]'>{text}</p>
            <span className='text-[#3D515E] font-monserrat text-[15px] font-bold leading-[22.5px]'>{span}</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingSection
