import React from 'react';
import flipflop from "../../../../public/images/flipflopIcon.png"
import suitcase from "../../../../public/images/suitcaseIcon.png"
import messageOfferIcon from "../../../../public/images/messageOffersIcon.png"
import phoneOfferIcon from "../../../../public/images/phoneOffersIcon.png"
import coconut from "../../../../public/images/coconutIcon.png"

const OffersContact = () => {
  return (
    <div className='flex w-screen items-center justify-center bg-[#F8F8F8]'>
      <div className='flex flex-col lg:flex-row items-center justify-around w-[75%] my-[20px] border border-[#AAA]'>
        <div className='flex w-[50%] items-center justify-center'>
            <img src={flipflop} alt="flipflop" width={164} height={149}/>
            <img src={suitcase} alt="suitcase" width={194} height={355}/>
            <img src={coconut} alt="coconut" width={174} height={199}/>
        </div>
        <div className='flex w-[50%] items-center justify-center'>
            <div className='flex flex-col items-start justify-center text-start w-[95%] gap-[10px]'>
                <h4 className='text-[25px] text-customGray font-lora font-medium leading-[42px]'>Free contact call center or online booking</h4>
                <div className='flex items-center justify-start w-full gap-[4%]'>
                    <img src={phoneOfferIcon} alt="phoneOfferIcon" width={43.803} height={43.803}/>
                    <span className='text-[18px] text-customGray80 font-monserrat font-normal leading-[30px]'>+90 (242) 731 07 07</span>
                </div>
                <div className='flex items-center justify-start w-full gap-[4%]'>
                    <img src={messageOfferIcon} alt="messageOfferIcon" width={43.266} height={43.266}/>
                    <span className='text-[18px] text-customGray80 font-monserrat font-normal leading-[30px]'>info@portnature.com.tr</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OffersContact
