import React from 'react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const BeachSection1 = () => {
  return (
    <section>
      <div className='flex flex-col mt-24 max-w-[1920px]'>
        <div className='flex flex-row items-center justify-center gap-36'>
            <div className='flex flex-col items-center justify-center text-center'>
                <img className='flex items-center justify-center' src="/images/Beach/icon/sunbed.png" alt="sunbed" />
                <span className='mt-4 font-monserrat text-[14px] font-bold leading-normal'>SUNBED</span>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <img src="/images/Beach/icon/gazebo.png" alt="pavilion" />
                <span className='mt-4 font-monserrat text-[14px] font-bold leading-normal'>PAVILION</span>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <img src="/images/Beach/icon/jetski.png" alt="water sports" />
                <span className='mt-4 font-monserrat text-[14px] font-bold leading-normal'>WATER SPORTS</span>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <img src="/images/Beach/icon/volleyball.png" alt="beach games" />
                <span className='mt-4 font-monserrat text-[14px] font-bold leading-normal'>BEACH GAMES</span>
             </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-8 mt-8'>
            <h1 className='font-lora text-[40px] leading-normal font-medium text-center'>BEACH</h1>
            <div className="flex flex-col items-center justify-center">
                <LineVerticalSvg width={1} height={90} />
                <LineVertical2Svg width={1} height={90} />
             </div>
            <p className='font-monserrat text-[15px] font-normal leading-5 w-7/12 text-left'>Welcome to our luxurious paradise! Step onto the pristine private sandy beach, where the sun-kissed experience becomes a thrilling adventure. Get comfortable on our high-quality sunbeds, soaking up the golden rays and letting all worries drift away. For the ultimate VIP treatment, pre-book a pavilion and immerse yourself in premium service, savoring every moment of your sun-drenched escape.</p>
        </div>
      </div>
    </section>
  )
}

export default BeachSection1
