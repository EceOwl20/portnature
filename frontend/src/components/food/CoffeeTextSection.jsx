import React from 'react'
import davidoffImage from "../../../public/images/food/davidoff2.png"
import DavidoffSvg from "../../svg/food/DavidoffSvg"

const CoffeeTextSection = ({image,header,texts,children}) => {
  return (
    <div className='flex w-screen h-auto my-10 lg:my-24 items-center justify-center'>
      <div className='flex flex-col relative lg:flex-row w-[90%] lg:w-[85%] xl:max-h-[1170px] justify-around items-center'>
        <img src={image} alt='davidoff' width={image.width} height={image.height} className='z-20'/>
        <div className='flex flex-col xl:max-w-[433px] lg:w-[35%] w-[90%] items-center justify-start text-start gap-[21px] text-black z-20'>
            <h3 className=' font-lora text-[28px] leading-[42px] italic font-medium'>{header}</h3>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>{texts[0]}</p>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>{texts[1]} </p>
        </div>
        {children}
      </div>

    </div>
  )
}

export default CoffeeTextSection
