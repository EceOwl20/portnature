import React from 'react'
import { Link } from 'react-router-dom'

const SpaMainSection = ({image, image2, header, text, span, buttonText, buttonLink, iconImage}) => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-start gap-[42px]' >
    <div className='flex flex-col w-screen min-h-content items-center justify-end bg-center bg-cover'  style={{ backgroundImage: `url(${image.firebaseUrl})`, height:709 }}>
    <div className='flex flex-col justify-center items-center text-center py-[40px]'>
        <img src={image2.firebaseUrl} alt='logo' width={43} height={33}/>
        <h1 className='text-[40px] font-medium text-white uppercase leading-normal font-lora mt-[20px] mb-[30px]'>{header}</h1>
        <Link to={buttonLink} className='bg-white border py-[10px] px-[34px] justify-center items-center text-[16px] leading-normal font-monserrat font-bold text-customGray gap-[14.67px]'>{buttonText}</Link>
      </div>
    </div>
      <div className='flex w-full items-center justify-center gap-[104px]'>
        <div className='flex justify-center items-center py-[33px] px-[107.5px] border border-[#CFCFCF] gap-[15px] text-[28px] font-lora italic font-normal text-customGray80 leading-[42px]'>{span}</div>
        <div className='flex items-center justify-start text-start w-[35%]'>
        <p className='text-[20px] text-customGray80 font-monserrat font-bold leading-[30px]'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default SpaMainSection
