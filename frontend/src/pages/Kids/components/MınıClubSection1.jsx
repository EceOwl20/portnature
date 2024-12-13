import React from 'react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const MınıClubSection1 = () => {
  return (
    <section>
        <div className='flex flex-col max-w-[1920px] gap-36'>
            <div className='flex flex-row items-center justify-center gap-60 font-monserrat text-[14px] font-bold leading-normal'>
                <div className='flex flex-col items-center justify-center'>
                    <img src="../../../../public/images/miniclub/Icons/console1.png" className='w-[39px] h-[39px] mb-4' alt="console" />
                    GAMES
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src="../../../../public/images/miniclub/Icons/paint1.png" className='w-[39px] h-[39px] mb-4' alt="console" />
                    PAINTING
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src="../../../../public/images/miniclub/Icons/children1.png" className='w-[39px] h-[39px] mb-4' alt="console" />
                    SPORTS ACTIVITIES
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src="../../../../public/images/miniclub/Icons/chef1.png" className='w-[39px] h-[39px] mb-4' alt="console" />
                    COOKING
                </div>
            </div>
            <div className='flex flex-row'>
                <h1 className='flex font-lora text-[40px] leading-normal font-medium'>
                    MINI CLUB
                </h1>
                <div className="absolute -bottom-10 left-1/2 flex flex-col w-1/3 h-auto">
                    <LineVerticalSvg width={1} height={90}/>
                    <LineVertical2Svg width={1} height={90}/>
                </div>
                <div className='flex'></div>
            </div>
        </div>
    </section>
  )
}

export default MınıClubSection1