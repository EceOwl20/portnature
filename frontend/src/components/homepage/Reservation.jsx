import React from 'react'

const Reservation = () => {
  return (
    <div className='flex w-screen h-auto items-center justify-center bg-[#f8f8f8] '>
      <div className='lg:flex lg:flex-row grid grid-cols-2 w-[90%] lg:w-[60%] text-[#233038] font-monserrat font-light text-[15px] lg:text-[20px] leading-normal text-center py-[100px]'>
        <button className=' border-[0.7px] w-[100%] lg:w-[25%] border-[#00000033] py-[15px] px-[50px] bg-white max-h-[60px] whitespace-nowrap'>Check-in</button>
        <button className='border-[0.7px] w-[100%] lg:w-[25%] border-[#00000033]  py-[15px] px-[50px] bg-white max-h-[60px] whitespace-nowrap'>Check-Out</button>
        <button className='border-[0.7px] w-[100%] lg:w-[25%] border-[#00000033]  py-[15px] px-[50px] bg-white max-h-[60px]'>Guest</button>
        <button className='border-[0.7px] w-[100%] lg:w-[25%] border-[#00000033]  py-[15px] px-[50px] font-bold text-white bg-[#233038] lg:max-w-[304px] max-h-[60px] whitespace-nowrap'>Book Now</button>
      </div>
    </div>
  )
}

export default Reservation
