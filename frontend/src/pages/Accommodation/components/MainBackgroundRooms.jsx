import React from 'react'

const MainBackgroundRooms = ({img,header}) => {
  return (
    <div className="flex flex-col w-screen h-[50vw] lg:h-[34vw] bg-cover bg-center items-enter justify-end text-center" style={{ backgroundImage: `url(${img})` }}>
      <h2 className='text-[25px] leading-[37px] lg:text-[40px] font-lora text-white font-medium lg:leading-normal uppercase  text-shadow-custom'>{header}</h2>
    </div>
  )
}

export default MainBackgroundRooms
