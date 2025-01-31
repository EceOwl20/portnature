import React from 'react'
import UnderLine from '../../../svg/UnderLine/UnderLine'
import BirdSvg from '../../../svg/room/BirdSvg'

const StandardRoomComponent = ({image,header,text, span, text2, buttonText, buttonLink}) => {
  return (
    <div className='flex flex-col relative lg:flex-row xl:w-[85%] lg:w-[90%] w-[100%] bg-white md:bg-[#f8f8f8] justify-center items-center mb-[60px] lg:mb-[100px] min-h-[60vh] text-customGray leading-[22.5px] font-monserrat py-[20px] lg:py-0 gap-4 lg:gap-0'>
      <div className='relative w-full h-auto justify-center items-center text-center'>
      <img src={image.firebaseUrl} alt={image.altText} width={image.width} height={image.height} className='w-[100%] lg:w-[95%] xl:h-[55vh] lg:h-[45vh]' loading="lazy" />
      <p className='  absolute bottom-4 text-[16px] font-bold text-[#F8F8F8] '>{text2}</p>
      </div>
      <div className='flex flex-col w-[100%] md:w-[80%] lg:w-[50%] items-center justify-center'>
       <div className='flex flex-col w-[80%] items-center lg:items-start justify-center text-start gap-[15px] lg:gap-[25px]'>
       <h3 className='text-[28px] font-lora font-medium leading-[42px] italic'>{header}</h3>
        <UnderLine width={170} height={1}/>
        <p className='text-black text-[15px] font-normal mt-[5px] w-[86%]'>{text}</p>
        <span className='text-[#3D515E] text-[15px] font-bold'>{span}</span>
        <button className='flex mt-[15px] lg:mt-[25px] text-[14px] py-[13px] w-[150px] justify-center items-center text-center leading-normal font-bold border border-[#868686FF]'>{buttonText}</button>
       </div>
      </div>
      <BirdSvg width={214} height={166} className="absolute right-[25px] top-10 hidden lg:flex"/>
    </div>
  )
}

export default StandardRoomComponent
