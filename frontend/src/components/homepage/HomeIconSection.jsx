import React from 'react'
import LocationSvg from "../../svg/LocationSvg.jsx"
import AquaparkSvg from "../../svg/AquaparkSvg.jsx"
import ConcertSvg from "../../svg/ConcertSvg.jsx"
import SurfboardSvg from "../../svg/SurfboardSvg.jsx"
import EntertainmentSvg from "../../svg/EntertainmentSvg.jsx"

const HomeIconSection = () => {
  return (
    <div className='flex bg-white w-screen h-auto items-center justify-center'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex-row lg:flex w-[80%] md:w-[70%] gap-[10%] items-center justify-center lg:justify-between font-monserrat text-[12px] lg:text-[14px] font-bold leading-normal text-[#000000CC] text-center py-[6%]'>
  <div className='flex flex-col items-center justify-center gap-[10px]'>
    <LocationSvg className="hidden lg:flex" width={30.12} height={47.63}/>
    <LocationSvg className="flex lg:hidden" width={24} height={38}/>
    <p>BELEK . ANTALYA</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-[10px]'>
    <AquaparkSvg className="hidden lg:flex" width={44} height={48}/>
    <AquaparkSvg className="flex lg:hidden" width={35} height={39}/>
    <p>AQUAPARK</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-[10px]'>
    <ConcertSvg className="hidden lg:flex" width={33} height={48}/>
    <ConcertSvg className="flex lg:hidden" width={28} height={38}/>
    <p>CONCERT</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-[10px]'>
    <SurfboardSvg className="hidden lg:flex" width={34} height={48}/>
    <SurfboardSvg className="flex lg:hidden" width={27} height={39}/>
    <p>SANDY BEACH</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-[10px] col-span-2 md:col-span-1'>
    <EntertainmentSvg className="hidden lg:flex" width={34.8} height={47.54}/>
    <EntertainmentSvg className="flex lg:hidden" width={26} height={39}/>
    <p>ENTERTAINMENT</p>
  </div>
</div>

    </div>
  )
}

export default HomeIconSection
