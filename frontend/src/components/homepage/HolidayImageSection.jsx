import React from 'react'
import theatre from "../../../public/images/homepage/theatre.png"
import night from "../../../public/images/homepage/portnaturenight.png"
import UnderLine from '../../svg/UnderLine/UnderLine'
import Youtube2Svg from '../../svg/Youtube2Svg'

const HolidayImageSection = ({image, image2, buttonImage, buttonText, header,text,span, lang="en"}) => {
  return (
    <div className='flex flex-col lg:flex-row w-screen font-monserrat' >
      <div className='flex flex-col relative w-[100%] lg:w-[50%] h-auto bg-cover items-center justify-center min-h-[415px] xl:h-[548px]' style={{ backgroundImage: `url(${image.firebaseUrl})` }}>
      <div className='flex absolute inset-0 z-1 bg-black/70'></div>
      <h4 className='flex lg:hidden font-lora text-[25px] italic font-medium leading-[34px] text-[#fff] z-10 w-[70%] text-center mb-[8%]'>{header[lang]}</h4>
        <button className='flex py-[15px] px-[38px] text-[16px] text-center text-[#233038] leading-normal font-bold bg-white z-10 justify-around items-center gap-[10px] lg:gap-[19px]'> <img src={buttonImage.firebaseUrl} alt={buttonImage.altText[lang]} className="flex" width={32} height={22}/> {buttonText[lang]}</button>
      </div>
      <div className='flex flex-col relative w-[100%] lg:w-[50%] h-auto bg-cover items-center justify-center min-h-[415px]' style={{ backgroundImage: `url(${image2.firebaseUrl})` }}>
        <div className='flex absolute inset-0 z-1 bg-black/70'></div>
        <div className='flex flex-col w-[88%] lg:w-[70%] text-[#fff] items-center lg:items-start justify-center text-center lg:text-start gap-[24px] z-10'>
            <h4 className='hidden lg:flex font-lora text-[28px] italic font-medium leading-[42px]'>{header[lang]}</h4>
            <UnderLine className="hidden lg:flex z-10"/>
            <p className='font-monserrat leading-[22.5px] font-normal text-[15px] text-center lg:text-justify '>{text[lang]}</p>
            <span className='text-justify leading-normal lg:leading-[22.5px] font-bold text-[12px] lg:text-[15px]'>{span[lang]}</span>
        </div>
      </div>
    </div>
  )
}

export default HolidayImageSection
