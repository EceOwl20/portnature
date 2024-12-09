import React from 'react'

const FoodMenu = ({images,links}) => {
  return (
    <div className='flex w-screen h-auto justify-center items-center my-10'>
      <div className='flex flex-col lg:flex-row w-full lg:w-[90%] lg:min-w-[1000px] lg:gap-[20px] justify-center items-center'>
        <div className='flex w-[100%] lg:w-[33%] xl:w-[30%] justify-center items-center bg-cover bg-center relative h-[45vh] lg:h-[35vh] xl:h-[40vh]' style={{ backgroundImage: `url(${images[0]})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[10px] md:py-[18px] w-[60%] sm:w-[50%] md:w-[35%] lg:w-[85%] xl:w-auto xl:px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
        <div className='flex w-[100%] lg:w-[33%] xl:w-[30%] justify-center items-center bg-cover bg-center relative h-[45vh] lg:h-[35vh]  xl:h-[40vh]' style={{ backgroundImage: `url(${images[1]})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[10px] md:py-[18px] w-[60%] sm:w-[50%] md:w-[35%] lg:w-[85%] xl:w-auto xl:px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
        <div className='flex w-[100%] lg:w-[33%] xl:w-[30%] justify-center items-center bg-cover bg-center relative h-[45vh] lg:h-[35vh] xl:h-[40vh]' style={{ backgroundImage: `url(${images[2]})` }}>
            <div className='absolute inset-0 bg-black/30 z-1 hover:bg-black/0'></div>
            <button className='flex z-10 justify-center items-center text-center py-[10px] md:py-[18px] w-[60%] sm:w-[50%] md:w-[35%] lg:w-[85%] xl:w-auto xl:px-[92px] border border-[#F8F8F8] text-[20px] leading-normal font-semibold font-monserrat text-[#F8F8F8] hover:bg-white hover:text-customGray'>Bar & Cafes</button>
        </div>
      </div>
    </div>
  )
}

export default FoodMenu
