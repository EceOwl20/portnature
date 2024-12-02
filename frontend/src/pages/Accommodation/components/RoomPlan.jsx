import React from 'react'
import img from "../../../../public/images/rooms/familyroomPlan.png"
import PlusSvg from "../../../svg/room/PlusSvg"

const RoomPlan = () => {
  return (
    <div className='flex bg-[#f8f8f8] w-screen h-auto justify-center items-center '>
      <div className='flex flex-col justify-center items-center w-[90%] lg:w-[80%] my-[40px] gap-2'>
      <img src={img} alt='img' width={img.width} height={img.height}/>

      <div className='flex flex-col justify-center items-center text-center w-[80%] gap-6'>
        <PlusSvg width={48} height={48}/>
        <p className='text-[12px] lg:text-[15px] text-[#4f595e] font-monserrat font-bold leading-normal lg:leading-[22px]'>4 Adults + 1  ·  1 double bed  ·  2 single beds <br></br> 45 m²  ·  Corner Sea View</p>
      </div>
      </div>
    </div>
  )
}

export default RoomPlan
