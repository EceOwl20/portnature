import React from 'react'

const MainBackgroundRooms = ({img,header}) => {
  return (
    <div className="flex flex-col w-screen h-[100vw] lg:h-[34vw] bg-cover bg-center items-enter justify-center text-center" style={{ backgroundImage: `url(${img})` }}>
      <h2 className='text-[25px] leading-[37px] lg:text-[40px] font-lora text-white font-medium lg:leading-normal uppercase drop-shadow-2xl'>{header}</h2>
    </div>
  )
}

export default MainBackgroundRooms
