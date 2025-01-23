import React from 'react'

const Card2Other = () => {
  return (
    <div className='flex flex-col w-full h-auto justify-center items-center mt-10'>
    <div className='flex flex-col relative justify-end items-end text-end my-[22px] w-[35%] z-50'>
   {/* <img src={img} alt='img' width={img.width} height={img.height} className='w-auto flex relative z-50'/> */}

    <h3 className='text-[25px] uppercase font-medium font-lora leading-normal text-white absolute top-1 left-1 z-50'>King Suite</h3>
    <span className='text-[12px] text-[#ffffff] font-monserrat font-bold leading-[22.5px] absolute bottom-36 left-2 z-50'>5 Adults + 1 ·  110 m²  ·  Sea View
    </span>
     <div className='flex flex-col w-full gap-[17px] my-4 justify-end items-end'>
     <p className='text-[12px] w-[90%] text-black font-monserrat font-normal leading-[18px]'>A luxurious holiday with your loved ones is waiting for you in King Suite</p>
     <button className='flex text-center justify-center items-center py-[13px] w-[150px] text-[14px] leading-normal font-bold font-monserrat bg-white border border-[#868686]'>More About</button>
     </div>
     <div className='flex border border-[#868686] absolute top-10 left-10 bg-transparent z-1 w-[100%] h-[64vh]'>

     </div>
    </div>
    </div>
  )
}

export default Card2Other
 