import React from 'react'
import barcafes from "../../../public/images/barcafes.png"

const FoodMenu = () => {
  return (
    <div className='flex w-full h-auto justify-center items-center my-10'>
      <div className='flex w-[90%] gap-[20px] justify-center items-center'>
        <div className='flex w-[30%] justify-center items-center bg-cover bg-center relative h-[40vh]' style={{ backgroundImage: `url(${barcafes})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[18px] px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
        <div className='flex w-[30%] justify-center items-center bg-cover bg-center relative h-[40vh]' style={{ backgroundImage: `url(${barcafes})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[18px] px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
        <div className='flex w-[30%] justify-center items-center bg-cover bg-center relative h-[40vh]' style={{ backgroundImage: `url(${barcafes})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[18px] px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
      </div>
    </div>
  )
}

export default FoodMenu
