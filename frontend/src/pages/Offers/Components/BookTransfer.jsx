import React from 'react'
import CarSvg from "../../../svg/offers/CarSvg"
import SunbedSvg from '../../../svg/offers/SunbedSvg'
import DotlineSvg from '../../../svg/offers/DotlineSvg'
import LocationBeachSvg from '../../../svg/offers/LocationBeachSvg'
import FlagSvg from '../../../svg/offers/FlagSvg'
import WavesSvg from '../../../svg/offers/WavesSvg'
import SuitcaseSvg from '../../../svg/offers/SuitcaseSvg'
import PalmtreeSvg from '../../../svg/offers/PalmtreeSvg'
import BirdsSvg from '../../../svg/offers/BirdsSvg'
import PlaneSvg from '../../../svg/offers/PlaneSvg'
import BallSvg from '../../../svg/offers/BallSvg'
import CloudSvg from '../../../svg/offers/CloudSvg'

const BookTransfer = () => {
  return (
    <div className='flex w-screen items-center justify-center my-[150px]'>
      <div className='flex w-[85%] items-center justify-around relative'>
        <CarSvg className="flex" width={353} height={200}/>
        <div className='flex flex-col w-[25%] text-center items-center justify-center'>
            <h2 className='text-[25px] text-customGray font-normal font-lora leading-[42px]'>Click here to book a transfer</h2>
            <text className='text-[16px] text-customGray80 font-bold font-monserrat leading-[30px]'>Spend the road in comfort</text>
            <button className='flex items-center justify-center mt-[30px] py-[12px] px-[26px] border border-[#6B6B6B] text-customGray leading-normal font-monserrat text-[14px] font-bold'>Book Transfer</button>
        </div>
        <SunbedSvg className="flex" width={166} height={148}/>
        <div className="absolute -top-[35%] z-1 flex justify-between items-center">
        <LocationBeachSvg className="flex" width={12} height={21}/>
        <DotlineSvg className="flex" width={1660.5} height={193.895}/>
        <FlagSvg className="flex" width={17.39} height={21.05}/>
        </div>

        <WavesSvg className="absolute -top-[20%] right-[20%]" width={272} height={86}/>
        <SuitcaseSvg className="absolute top-[50%] left-[10%]" width={54} height={116}/>
        <PlaneSvg className="absolute -top-[35%] left-[25%]" width={71.307} height={53.156}/>
        <CloudSvg className="absolute -top-[35%] right-[35%]" width={65} height={23}/>
        <CloudSvg className="absolute -top-[45%] right-[40%]" width={46} height={18}/>
        <BirdsSvg className="absolute -top-[60%] right-[15%]" width={64} height={58}/>
        <PalmtreeSvg className="absolute -top-[45%] right-[1%]" width={192} height={187}/>
        <BallSvg className="absolute top-[55%] right-[4%]" width={32} height={35}/>
      </div>
    </div>
  )
}

export default BookTransfer
