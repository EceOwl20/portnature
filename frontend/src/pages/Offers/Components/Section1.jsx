import React from 'react'
import OffersImg from "../Images/Offers.png"
import BigCloudSvg from '../../../svg/offers/BigCloudSvg'
import CloudSvg from '../../../svg/offers/CloudSvg'

const Section1 = () => {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto items-center justify-center gap-[150px] mb-12">
      {/* Üstteki resim */}
      <div className="flex w-full items-center justify-center">
        <img 
          className="max-w-full h-auto" 
          src="../../../../public/images/portnature-beach.jpeg" 
          alt="" 
        />
      </div>

      {/* Metin ve sağındaki resim */}
      <div className="flex flex-row items-center justify-center gap-36 pb-16 relative">
        <div className="flex flex-col gap-8 max-w-[378px] ">
          <div className='flex flex-col gap-12 h-16'>
            <BigCloudSvg className="w-[117px]" />
            <CloudSvg className="w-[78px] absolute -left-20 top-52" />
          </div>
          <h1 className="text-center font-lora text-[40px] text-[#233038] font-medium leading-[50px]">
            ANTALYA HOTELS
          </h1>
          <div className='flex flex-row w-full'>
            <div className='bg-custom-gradient h-[1px] w-[50%]'></div>
            <div className='bg-custom-gradient-reverse h-[1px] w-[50%]'></div>
          </div>
          <p className='font-monserrat text-[14px] font-normal leading-5'>
            Antalya includes the best all inclusive 5 star hotels with flexible deals. 
            If you are looking for luxury travel deals, don’t look any further Anlaya hotels await you. 
            You can make a reservation easily with the call center or online booking at Antalya hotels. 
            Also, the Antalya hotels call center service has the best price and last-minute opportunities. 
            Antalya hotels website and call center service offer the best deals package. 
            Don’t miss this chance and call now. 
            There are rooms for everyone in the Antalya hotel. 
            When you looking for accommodation with last-minute deals Antalya hotel waiting for you.
          </p>
        </div>
        <img 
          src={OffersImg} 
          alt="Offers" 
          className="max-w-[800px] max-h-[738px]" 
        />
      </div>
    </div>
  )
}

export default Section1
