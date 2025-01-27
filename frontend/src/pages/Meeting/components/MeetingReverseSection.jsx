import React from 'react'
import Underline from "../../../svg/UnderLine/UnderLine"

const MeetingReverseSection = ({image,header,text,span}) => {
  return (
    <div id='perge' className='flex w-full justify-center items-center my-10'>
      <div className='flex flex-col lg:flex-row-reverse w-[90%] justify-between items-center'>
        <img src={image.firebaseUrl} alt={image.altText} className='w-[60%]'/>
        <div className='flex flex-col w-[35%] items-end justify-start text-start'>
           <div className='w-[70%] flex flex-col gap-[30px]'>
           <h2 className='text-[40px] text-customGray font-lora leading-normal font-medium'>{header}</h2>
            <Underline/>
            <p className='text-black text-[15px] font-monserrat font-normal leading-[22.5px]'>{text}</p>
            <span className='text-[#3D515E] font-monserrat text-[15px] font-bold leading-[22.5px]'>{span}</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingReverseSection
