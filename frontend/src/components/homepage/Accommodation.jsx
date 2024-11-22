import React from 'react';
import familyroom from "../../../public/images/homepage/FamilyRoom.png"
import kingroom from "../../../public/images/homepage/KingRoom.png"
import standardroom from "../../../public/images/homepage/StandardRoom.png"
import { RoomCarousel } from './RoomCarousel';

const images = [familyroom,kingroom,standardroom];
const header=["FAMILY ROOM","KING ROOM","STANDARD ROOM"];
const text=["h","h","h"];

const Accommodation = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-around mt-[10px]'>
      <div className='flex flex-col w-[90%] lg:w-[50%] text-center items-center justify-center gap-[30px]'>
        <h2 className='font-lora text-[25px] lg:text-[40px] font-medium leading-normal text-[#233038]'>ACCOMMODATION</h2>
        <span className='w-[96.6%] lg:w-[60%] text-[12px] lg:text-[20px] text-[#233038CC] lg:text-[#233038] leading-normal lg:leading-[30px] font-bold font-monserrat'>Experience the most relaxing holiday in the plush comfort of soothing rooms inspired by the nature.</span>
      </div>
      <div className='flex w-[90%] items-center justify-center'>
        <RoomCarousel images={images} text={text} header={header}/>
      </div>
    </div>
  )
}

export default Accommodation
