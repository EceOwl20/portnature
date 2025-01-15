import React from 'react'
import { Link } from 'react-router-dom'

const MainBackgroundRooms = ({image,header, buttonText,buttonText2,buttonText3,buttonLink,buttonLink2,buttonLink3}) => {
  return (
    <>
    <div className="flex flex-col w-screen h-[50vw] lg:h-[34vw] bg-cover bg-center items-enter justify-end text-center" style={{ backgroundImage: `url(${image.firebaseUrl})` }}>
      <h2 className='text-[25px] leading-[37px] lg:text-[40px] font-lora text-white font-medium lg:leading-normal uppercase  text-shadow-custom'>{header}</h2>
    </div>
    {buttonLink && buttonLink2 && buttonLink3 && (
    <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
    <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-[98%] lg:w-[80%] items-center justify-center lg:justify-around mb-5'>
     <Link className='flex py-[16px] w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={buttonLink}>{buttonText}</Link>
     <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={buttonLink2}>{buttonText2}</Link>
     <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={buttonLink3}>{buttonText3}</Link>
    </div>
  </div>
  )}
    </>
  )
}

export default MainBackgroundRooms
