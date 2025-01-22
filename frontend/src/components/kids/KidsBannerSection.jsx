import React from 'react'
import UnderLine from '../../svg/UnderLine/UnderLine'

const KidsBannerSection = ({image,text, span}) => {
  return (
    <div className="flex flex-col relative items-center justify-end w-screen h-[40vh] lg:h-[50vh] xl:h-[675px] bg-cover bg-center my-10" style={{ backgroundImage: `url(${image.firebaseUrl})` }}>
        <div className='absolute inset-0 bg-black/20 z-1'></div>
      <div className='flex flex-col w-[100%] md:w-[75%] lg:w-[50%] items-center md:items-start justify-center text-center text-white gap-4 pb-[3%] z-10'>
        <h3 className='text-[28px] font-lora italic leading-[42px] font-medium'>{text}</h3>
        <UnderLine/>
        <span className='text-[14px] font-monserrat leading-normal font-bold '>{span}</span>
      </div>
    </div>
  )
}

export default KidsBannerSection
