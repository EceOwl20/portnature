import React from 'react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const MiniAlaCarteSection1 = () => {
  return (
    <div className='flex flex-col max-w-[1920px] mx-3 my-5'>
        <div className='flex flex-col lg:flex-row w-full gap-5 justify-center items-center'>
            <div className='flex w-full lg:w-1/2'>
                <img src='../../../../public/images/minialacarte/miniclubalacarte.png' alt='minialacarte' />
            </div>
            <div className='flex w-full lg:w-1/2'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qs4HrhmnYK0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className='flex w-full min-h-content rounded-none'
                    style={{ borderRadius: '0px', border: 'none' }}
                ></iframe>
            </div>
        </div>
        <div className='relative flex flex-row w-full justify-center my-24'>
            <h1 className='flex w-1/3 justify-end text-[40px] font-lora font-medium leading-normal mr-32'>
                MINI AL’A CARTE 
            </h1>
            
            <div className="absolute -bottom-10 left-1/2 flex flex-col w-1/3 h-auto">
                <LineVerticalSvg width={1} height={90}/>
                <LineVertical2Svg width={1} height={90}/>
            </div>
            
            <p className='flex flex-col w-1/3 font-normal font-monserrat text-[15px] leading-6'>
                Port Nature Mini Club A’la Carte has everything for your children such as healthy and delicious food, safe area and skilled personal.
                <span className='mt-2 font-monserrat text-[15px] font-bold leading-6'>Enjoy your holiday</span>
            </p>
        </div>

    </div>
  )
}

export default MiniAlaCarteSection1