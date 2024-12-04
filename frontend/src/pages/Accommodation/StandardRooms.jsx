import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'
import sideview from "../../../public/images/rooms/sideview.png"
import landview from "../../../public/images/rooms/landview.png"
import RoomInfo from './components/RoomInfo'
import StandardRoomComponent from './components/StandardRoomComponent'
import { Link } from 'react-router-dom'
import ContactSection from '../../components/homepage/ContactSection'
import RoomFeatures from './components/RoomFeatures'

const StandardRooms = ({img,header,links,linkstext}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <MainBackgroundRooms img={img} header={header}/>
        <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
      <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-[98%] lg:w-[80%] items-center justify-center lg:justify-around mb-5'>
       <Link className='flex py-[16px] w-[70%] md:w-[40%] lg:w-[16%] xl:w-[20%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[0]}>{linkstext[0]}</Link>
       <Link className='flex py-[16px]  w-[70%] md:w-[40%] lg:w-[16%] xl:w-[20%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[1]}>{linkstext[1]}</Link>
       <Link className='flex py-[16px]  w-[70%] md:w-[40%] lg:w-[16%] xl:w-[20%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white' to={links[2]}>{linkstext[2]}</Link>
      </div></div>
        <StandardRoomComponent roomtypeImg={sideview} roomheader="Side View" roomP="A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home n the comfort of your own home"/>
        <StandardRoomComponent roomtypeImg={sideview} roomheader="Sea View" roomP="A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home n the comfort of your own home"/>
        <StandardRoomComponent roomtypeImg={landview} roomheader="Land View" roomP="A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home n the comfort of your own home"/>
        <RoomFeatures/>
        <ContactSection/>
    </div>
  )
}

export default StandardRooms
