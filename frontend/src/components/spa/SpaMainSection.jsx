import React from 'react'
import { Link } from 'react-router-dom'

const SpaMainSection = ({image, image2, header, text, span, buttonText, buttonLink, iconImage}) => {
  return (
    <div className='flex flex-col w-screen h-auto mb-[30px] lg:h-screen items-center justify-start gap-16 lg:gap-[42px]' >
    <div className='flex flex-col w-screen h-[40vh] lg:h-[709px] min-h-content items-center justify-end bg-center bg-cover'  style={{ backgroundImage: `url(${image.firebaseUrl})`}}>
    <div className='flex flex-col justify-center items-center text-center py-[40px]'>
        <img src={image2.firebaseUrl} alt='logo' width={43} height={33}/>
        <h1 className='text-[40px] font-medium text-white uppercase leading-normal font-lora mt-[20px] mb-[30px]'>{header}</h1>
        <Link to={buttonLink} className='flex bg-white border py-[14px] px-[34px] justify-center items-center text-[16px] leading-normal font-monserrat font-bold text-customGray gap-[14.67px]'><img src={iconImage.firebaseUrl} alt='youtube' />{buttonText}</Link>
      </div>
    </div>
      <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-12 lg:gap-[104px]'>
        <div className='flex justify-center items-center py-[25px] lg:py-[34px] w-[45%] lg:w-[20%] lg:min-w-[260px] whitespace-nowrap lg:px-[107.5px] border border-[#CFCFCF] gap-[15px] text-[28px] font-lora italic font-normal text-customGray80 leading-[42px]'>
          
          {span}
          </div>
        <div className='flex items-center justify-start text-center lg:text-start w-[70%] lg:w-[35%] lg:min-w-[450px]'>
        <p className='text-[15px] lg:text-[20px] text-customGray80 font-monserrat font-medium lg:font-bold leading-[26px] lg:leading-[30px]'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default SpaMainSection
