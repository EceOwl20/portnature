import React from 'react'
import { Link } from 'react-router-dom'
import RoomsInfoCarousel from './RoomsInfoCarousel'
import familyroom1 from "../../../../public/images/rooms/familyroom-1.png"
import kingsuite1 from "../../../../public/images/rooms/kingSuite-1.png"
import standardroom1 from "../../../../public/images/rooms/standardRoom-1.png"
import RoomFeatures from './RoomFeatures'
import ContactSection from '../../../components/homepage/ContactSection'
const familyImages=[familyroom1,familyroom1,familyroom1];
const kingImages=[kingsuite1,kingsuite1,kingsuite1];
const standardImages=[standardroom1,standardroom1,standardroom1];

const RoomInfo = () => {
    const familyText=["FAMILY ROOM","A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home","2","2","45m2","Corner Sea View",];
    const kingText=["KING SUITE","A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home","1","2","110m2","Sea View",];
    const standardText=["STANDARD ROOM","You will find the unique harmony of modern architecture in comfortable and spacious rooms decorated in pastel colors","1","1","35m2","Side View/Sea View/Land View ",];

  return (
    <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
      <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-[98%] lg:w-[80%] items-center justify-center lg:justify-around mb-5'>
       <Link className='flex py-[16px] w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">Family Room</Link>
       <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">King Suite Room</Link>
       <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to="/">Standard Room</Link>
      </div>
    
        <RoomsInfoCarousel images={familyImages} text={familyText}/>
        <RoomsInfoCarousel images={kingImages} text={familyText}/>
        <RoomsInfoCarousel images={standardImages} text={standardText}/>

        <RoomFeatures/>
        <ContactSection/>
      
    </div>
  )
}

export default RoomInfo
