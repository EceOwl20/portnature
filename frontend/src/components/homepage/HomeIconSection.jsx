import React from 'react'
import LocationSvg from "../../svg/LocationSvg.jsx"
import AquaparkSvg from "../../svg/AquaparkSvg.jsx"
import ConcertSvg from "../../svg/ConcertSvg.jsx"
import SurfboardSvg from "../../svg/SurfboardSvg.jsx"
import EntertainmentSvg from "../../svg/EntertainmentSvg.jsx"

const HomeIconSection = () => {
  return (
    <div className='flex bg-white w-screen h-auto items-center justify-center'>
      <div className='flex w-[70%] gap-[10%] items-center justify-between font-monserrat text-[14px] font-bold leading-normal text-[#000000CC] text-center py-[6%]'>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <LocationSvg className="flex" width={30.12} height={47.63}/>
          <p >BELEK . ANTALYA</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <AquaparkSvg className="flex" width={44} height={48}/>
          <p >AQUAPARK</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <ConcertSvg className="flex" width={33} height={48}/>
          <p >CONCERT</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <SurfboardSvg className="flex" width={34} height={48}/>
          <p >SANDY BEACH</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <EntertainmentSvg className="flex" width={34.8} height={47.54}/>
          <p >ENTERTAINMENT</p>
        </div>
      </div>
    </div>
  )
}

export default HomeIconSection
