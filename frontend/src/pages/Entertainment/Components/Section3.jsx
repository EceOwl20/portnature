import React from 'react'
import VolleyballImg from '../Images/PortNatureVoleyball.png'

const Section3 = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-row-reverse gap-24 mt-12 mb-12 max-w-[1920px] items-center justify-center'>
        <img src={VolleyballImg} className='w-5/12' />
        <div className='flex flex-col w-3/12 gap-7 relative'>
            <h2 className='text-start flex font-lora text-[40px] font-medium leading-normal mb-4'>
                ACTIVITIES
            </h2>
                <div className='flex w-5/12 mt-6 mb-4 absolute top-12 -left-12'>
                <div className="bg-custom-gradient h-[1px] w-[50%]">
                </div>
                <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
                </div>
                </div>
            <p className='flex font-monserrat max-w-[361px] text-[15px] font-normal leading-5'>
                You will recharge yourself with fun games and sports activities in company with our professional animation team and you will meet with special programs at fitness center will meet with special programs at fitness center
            </p>
            <span className='font-monserrat text-[15px] leading-5 font-bold'>Enjoy your holiday Enjoy your holiday</span>
            <button className='flex border border-solid-[1px] w-28 p-3 text-[14px] font-monserrat font-bold leading-normal hover:bg-[#868686] whitespace-nowrap'>More About</button>
        </div>
    </div>
    </div>
  )
}

export default Section3