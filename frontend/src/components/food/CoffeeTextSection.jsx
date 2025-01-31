import React from 'react'

const CoffeeTextSection = ({image,header,text, text2, iconImage}) => {
  return (
    <div className='flex w-screen h-auto my-10 lg:my-24 items-center justify-center'>
      <div className='flex flex-col relative lg:flex-row w-[90%] lg:w-[85%] xl:max-h-[1170px] justify-around items-center'>
        <img src={image.firebaseUrl} alt={image.altText} width={image.width} height={image.height} className='z-20'  loading="lazy"/>
        <div className='flex flex-col xl:max-w-[433px] lg:w-[35%] w-[90%] items-center justify-start text-start gap-[21px] text-black z-20'>
            <h3 className=' font-lora text-[28px] leading-[42px] italic font-medium'>{header}</h3>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>{text}</p>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>{text2} </p>
        </div>
        <img src={iconImage.firebaseUrl} width={436} height={387} className="absolute top-10 left-[42%] z-1"  loading="lazy"/>
      </div>

    </div>
  )
}

export default CoffeeTextSection
