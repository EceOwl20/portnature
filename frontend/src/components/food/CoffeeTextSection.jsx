import React from 'react'
import davidoffImage from "../../../public/images/food/davidoff2.png"
import DavidoffSvg from "../../svg/food/DavidoffSvg"

const CoffeeTextSection = ({image,header,texts,svg}) => {
  return (
    <div className='flex w-screen h-auto my-10 lg:my-24 items-center justify-center'>
      <div className='flex flex-col relative lg:flex-row w-[90%] lg:w-[85%] xl:max-h-[1170px] justify-around items-center'>
        <img src={davidoffImage} alt='davidoff' width={davidoffImage.width} height={davidoffImage.height} className='z-20'/>
        <div className='flex flex-col xl:max-w-[433px] lg:w-[35%] w-[90%] items-center justify-start text-start gap-[21px] text-black z-20'>
            <h3 className=' font-lora text-[28px] leading-[42px] italic font-medium'>Your zest for life sums up the essence of Davidoff brand. It is what makes DAVIDOFF unique.</h3>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>Memorable tastes are waiting for you in our restaurants, where the most special flavors of the world cuisine are offered and enriched with different themes and in our bars, where 148 kinds of Premium drinks are offered.</p>
            <p className='text-[15px] font-normal font-monserrat leading-[22.5px]'>Memorable tastes are waiting for you in our restaurants, where the most special flavors of the world cuisine are offered and enriched with </p>
        </div>
        <DavidoffSvg width={436} height={387} className="absolute top-10 left-[45%] z-1"/>
      </div>

    </div>
  )
}

export default CoffeeTextSection
