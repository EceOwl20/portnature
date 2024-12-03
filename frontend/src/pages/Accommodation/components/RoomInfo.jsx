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

const RoomInfo = ({links,linkstext,text1,text2,text3,images1,images2,images3}) => {

  return (
    <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
      <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-[98%] lg:w-[80%] items-center justify-center lg:justify-around mb-5'>
       <Link className='flex py-[16px] w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[0]}>{linkstext[0]}</Link>
       <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[1]}>{linkstext[1]}</Link>
       <Link className='flex py-[16px]  w-[40%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[2]}>{linkstext[2]}</Link>
      </div>
    

        <RoomsInfoCarousel images={images1} text={text1}/>
        <RoomsInfoCarousel images={images2} text={text2}/>
        <RoomsInfoCarousel images={images3} text={text3}/>

        <RoomFeatures/>
        <ContactSection/>
      
    </div>
  )
}

export default RoomInfo
