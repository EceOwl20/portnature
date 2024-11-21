import React from 'react'
import theatre from "../../../public/images/homepage/theatre.png"
import night from "../../../public/images/homepage/portnaturenight.png"
import UnderLine from '../../svg/UnderLine/UnderLine'

const HolidayImageSection = () => {
  return (
    <div className='flex w-screen font-monserrat' >
      <div className='flex flex-col relative w-[50%] h-auto bg-cover items-center justify-center min-h-[415px]' style={{ backgroundImage: `url(${night})` }}>
      <div className='flex absolute inset-0 z-1 bg-black/70'></div>
        <button className='flex py-[15px] px-[38px] text-[16px] text-center text-[#233038] leading-normal font-bold bg-white z-10'>Watch Now</button>
      </div>
      <div className='flex flex-col relative w-[50%] h-auto bg-cover items-center justify-center min-h-[415px]' style={{ backgroundImage: `url(${theatre})` }}>
        <div className='flex absolute inset-0 z-1 bg-black/70'></div>
        <div className='flex flex-col w-[70%] text-[#fff] items-start justify-center text-start gap-[24px] z-10'>
            <h4 className='font-lora text-[28px]  font-italic font-medium leading-[42px]'>How will you spend your holiday?</h4>
            <UnderLine className="flex z-10"/>
            <p className='font-monserrat leading-[22.5px] font-normal text-[15px] text-justify'>Are the comments true and what about the evaluations? 
            What if it is not like the hotel they have shown us?</p>
            <span className='text-justify leading-[22.5px] font-bold text-[15px]'>Learn your holiday</span>
        </div>
      </div>
    </div>
  )
}

export default HolidayImageSection
