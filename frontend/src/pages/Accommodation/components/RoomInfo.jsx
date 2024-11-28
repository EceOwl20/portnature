import React from 'react'
import { Link } from 'react-router-dom'
import RoomsInfoCarousel from './RoomsInfoCarousel'

const RoomInfo = () => {
    const text=["FAMILY ROOM","A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home","gae","bebaeb"];

  return (
    <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
      <div className='flex w-[80%] items-center justify-around mb-5'>
       <Link className='flex py-[16px] w-[16%] text-[#233038] border border-black/20 text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">Family Room</Link>
       <Link className='flex py-[16px] w-[16%] text-[#233038] border border-black/20 text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">King Suite Room</Link>
       <Link className='flex py-[16px] w-[16%] text-[#233038] border border-black/20 text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">Standard Room</Link>
      </div>
    
        <RoomsInfoCarousel text={text}/>
      
    </div>
  )
}

export default RoomInfo
