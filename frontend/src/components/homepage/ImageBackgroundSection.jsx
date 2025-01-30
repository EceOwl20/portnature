import React from 'react'
import { Link } from 'react-router-dom'

const ImageBackgroundSection = ({image, buttonText, text, buttonLink,lang}) => {
  return (
   <main className='flex h-screen w-screen items-center justify-center'>
     <div className='flex w-screen items-center lg:items-start justify-center h-5/6 lg:h-[675px] bg-cover bg-center' style={{ backgroundImage: `url(${image.firebaseUrl})` }}>
      <div className='flex flex-col items-center justify-center text-center w-[70%] lg:w-[55%] mt-[2%] lg:mt-[5%] gap-[20px] lg:gap-[30px]'>
        <h3 className='font-lora text-[28px] text-[#233038] italic leading-[42px] font-medium'>{text}</h3>
        <Link to={buttonLink} className='flex bg-white py-[12px] px-[31px] font-monserrat font-bold text-[14px] text-center text-[#233038] leading-normal hover:bg-[#233038] hover:text-[#fff]'>{buttonText}</Link>
      </div>
    </div>
   </main>
  )
}

export default ImageBackgroundSection