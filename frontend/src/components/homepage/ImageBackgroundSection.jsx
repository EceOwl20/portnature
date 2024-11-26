import React from 'react'
import img from "../../../public/images/portnature-beach.jpeg"

const ImageBackgroundSection = () => {
  return (
    <div className='flex w-screen items-center lg:items-start justify-center h-[675px] bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
      <div className='flex flex-col items-center justify-center text-center w-[70%] lg:w-[27%] mt-[2%] gap-[20px] lg:gap-[30px]'>
        <h3 className='font-lora text-[28px] text-[#233038] italic leading-[42px] font-medium'>We must create a happy environment for parents and his children</h3>
        <button className='flex bg-white py-[12px] px-[31px] font-monserrat font-bold text-[14px] text-center text-[#233038] leading-normal hover:bg-[#233038] hover:text-[#fff]'>More About</button>
      </div>
    </div>
  )
}

export default ImageBackgroundSection
