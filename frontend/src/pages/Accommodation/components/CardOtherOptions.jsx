import React from 'react'
import img from "../../../../public/images/rooms/kingsuite-options.png"

const CardOtherOptions = () => {
  return (
    <div className='flex flex-col w-full h-auto justify-center items-center mt-10'>
    <div className='flex flex-col relative border border-[#CFCFCF] justify-end items-end my-[22px] w-[20vw] h-[63vh]'>
    <img src={img} alt='img' width={img.width} height={img.height} className='w-auto absolute top-[-40px] left-[-50px]'/>
     <div className='flex flex-col w-full gap-[17px] my-4 justify-center items-center'>
     <p className='text-[12px] w-[75%] text-black font-monserrat font-normal leading-[18px]'>A luxurious holiday with your loved ones is waiting for you in King Suite</p>
     <button className='flex text-center justify-center items-center py-[13px] w-[150px] text-[14px] leading-normal font-bold font-monserrat bg-white border border-[#868686]'>More About</button>
     </div>
    </div>
    </div>
  )
}

export default CardOtherOptions
