import React from 'react'
import PersonSvg from "../../../svg/room/PersonSvg"
import SingleBedSvg from '../../../svg/SingleBedSvg'
import BedSvg from '../../../svg/BedSvg'
import AreaSvg from '../../../svg/room/AreaSvg'
import SeaViewSvg from '../../../svg/SeaViewSvg'
import familyroom1 from "../../../../public/images/rooms/familyroom1.png"
import familyroom2 from "../../../../public/images/rooms/familyroom2.png"
import familyroom3 from "../../../../public/images/rooms/familyroom3.png"
import UnderLine from '../../../svg/UnderLine/UnderLine'

const SubroomsInfoSection = ({text}) => {
  return (
    <div className='flex flex-col w-screen h-auto my-12 justify-center items-center '>
      <div className='flex w-[80%] lg:w-[46%] justify-center items-center text-center text-customGray/80'>
      <p className='text-[20px] font-bold leading-[30px] font-monserrat'>{text}</p>
      </div>
      <div className='flex w-screen mt-20'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>

      <div className='grid grid-cols-3 lg:flex lg:flex-row justify-around items-center w-[95%] lg:w-[85%] text-customGray80 text-[14px] font-bold uppercase  font-monserrat my-10 gap-10'>
        <div className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center '>
            <PersonSvg width={53} height={35}/>
            <p className=''>4 Adults + 1</p>
        </div>
        <div className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center'>
            <SingleBedSvg width={26} height={44} color="#CFCFCF"/>
            <p>2 Single Beds</p>
        </div>
        <div className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center'>
            <BedSvg width={43} height={47} color="#CFCFCF"/>
            <p>1 Double Bed</p>
        </div>
        <div className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center'>
            <AreaSvg width={41} height={41}/>
            <p>45 m2</p>
        </div>
        <div className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center'>
            <SeaViewSvg width={40} height={28} color="#CFCFCF"/>
            <p>Corner Sea View</p>
        </div>
      </div>

      <div className='flex flex-col lg:grid lg:grid-cols-2 w-[80%] gap-[30px] '>
        <img src={familyroom1} alt='familyroom' width={familyroom1.width} height={familyroom1.height}/>
        <img src={familyroom2} alt='familyroom' width={familyroom2.width} height={familyroom2.height}/>
        <img src={familyroom3} alt='familyroom' width={familyroom3.width} height={familyroom3.height}/>
        <div className='flex flex-col w-full itams-center justify-start text-start gap-4 text-[15px] text-black font-monserrat font-normal leading-[22.5px]'>
          <h3 className='text-[28px] italic leading-[42px] font-lora text-customGray font-medium'>Comfort for the whole family</h3>
          <UnderLine width={170} height={1}/>
          <p className=''>A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home
          </p>
          <span className="text-[#3D515E] font-bold ">Enjoy your holiday</span>
        </div>
      </div>

    </div>
  )
}

export default SubroomsInfoSection
