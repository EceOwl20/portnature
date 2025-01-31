import React from 'react';
import UnderLine from '../../../svg/UnderLine/UnderLine';

const OffersContact = ({images=[],header,text,text2,iconImage,iconImage2}) => {
  return (
    <div className='flex w-screen items-center justify-center bg-[#F8F8F8] my-16'>
      <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-around w-[91.5%] lg:w-[75%] my-[20px] border border-[#AAA] py-8 sm-py-0'>
        <div className='flex w-[90%] sm:w-2/5 items-end justify-end py-8 px-[1%] h-full'>
            <img src={images[0].firebaseUrl} alt={images[0].altText} width={164} height={149} className='w-[32%] h-auto'  loading="lazy"/>
            <img src={images[1].firebaseUrl} alt={images[1].altText} width={194} height={355} className='w-[36%] h-auto'  loading="lazy"/>
            <img src={images[2].firebaseUrl} alt={images[2].altText} width={174} height={199} className='w-[32%] h-auto'  loading="lazy"/>
        </div>
        <div className='flex w-[90%] sm:w-3/5 items-start justify-center h-full'>
            <div className='flex flex-col items-start justify-center text-start w-[95%] gap-[10px]'>
                <h4 className='text-[25px] text-customGray font-lora font-medium leading-[42px]'>{header}</h4>
                <UnderLine/>
                <div className='flex items-center justify-start w-full gap-[4%]'>
                    <img src={iconImage.firebaseUrl} alt="phoneOfferIcon" width={43.803} height={43.803}  loading="lazy"/>
                    <span className='text-[18px] text-customGray80 font-monserrat font-normal leading-[30px]'>{text}</span>
                </div>
                <div className='flex items-center justify-start w-full gap-[4%]'>
                    <img src={iconImage2.firebaseUrl} alt="messageOfferIcon" width={43.266} height={43.266}  loading="lazy"/>
                    <span className='text-[18px] text-customGray80 font-monserrat font-normal leading-[30px]'>{text2}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OffersContact
