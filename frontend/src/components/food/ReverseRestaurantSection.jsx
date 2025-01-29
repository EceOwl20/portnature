import React from 'react'
import UnderLine from '../../svg/UnderLine/UnderLine'
import { Link } from 'react-router-dom'

const ReverseRestaurantSection = ({image,header,text,span,buttonText, buttonLink}) => {
  return (
    <section className='flex w-screen h-auto my-12 items-center justify-center'>
    <div className='flex w-[100%] lg:w-[90%] flex-col lg:flex-row-reverse items-center justify-center gap-5 lg:gap-0'>
      <img src={image.firebaseUrl} alt='img' width={988} height={560} className='flex w-full sm:w-[95%] md:w-[90%] lg:w-[60%] min-h-[360px] object-cover'/>
      <div className='flex w-[90%] lg:w-[40%] items-center justify-center'>
          <div className='flex flex-col w-[95%] lg:w-[70%] items-center md:items-start justify-center text-center md:text-start gap-[18px] lg:gap-[30px] font-monserrat leading-[22.5px]'>
              <h3 className='text-[25px] md:text-[40px] text-customGray font-medium leading-normal font-lora'>{header}</h3>
              <UnderLine width={170} height={1}/>
              <p className='text-[13px] md:text-[15px] text-black font-normal'>{text}</p>
              <span className='text-[15px] text-[#3D515E] font-bold '>{span}</span>
              <Link to={buttonLink} className='flex items-center justify-center py-[12px] w-[150px] border border-[#868686] bg-transparent hover:bg-customGray hover:text-white text-[14px] font-monserrat leading-normal text-center font-bold text-customGray'>{buttonText}</Link>
          </div>
      </div>
    </div>
  </section>
  )
}

export default ReverseRestaurantSection
