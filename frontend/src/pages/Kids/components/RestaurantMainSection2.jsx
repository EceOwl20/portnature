import React,{ useEffect, useCallback, useState }  from "react";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const RestaurantMainSection2 = ({header,text, span,image,videoLink}) => {
  return (
    <div className='flex flex-col max-w-[1920px] mx-3 my-5 items-center justify-center'>
        <div className='flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:h-[30vh] xl:h-[46vh]'>
            <div className='flex w-full lg:w-1/2 h-full'>
                <img src={image.firebaseUrl} alt='minialacarte' width={image.width} height={image.height}/>
            </div>
            <div className='hidden lg:flex w-full h-full lg:w-1/2'>
                <iframe
                    width="560"
                    height="auto"
                    src={videoLink} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className=' flex w-full min-h-content rounded-none'
                    style={{ borderRadius: '0px', border: 'none' }}
                ></iframe>
            </div>
        </div>
        <div className='relative flex flex-row w-full justify-center my-24'>
            <h1 className='flex w-1/3 justify-end text-[40px] font-lora font-medium leading-normal mr-32'>
             {header}
            </h1>
            
            <div className="absolute -bottom-10 left-1/2 flex flex-col w-1/3 h-auto">
                <LineVerticalSvg width={1} height={90}/>
                <LineVertical2Svg width={1} height={90}/>
            </div>
            
            <p className='flex flex-col w-1/3 font-normal font-monserrat text-[15px] leading-6'>
                {text}
                <span className='mt-2 font-monserrat text-[15px] font-bold leading-6'>{span}</span>
            </p>
        </div>

        <div className='flex lg:hidden w-full h-full'>
                <iframe
                    width="100%"
                    height="auto"
                    src={videoLink}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className='w-full min-h-[360px] md:min-h-[420px] rounded-none'
                    style={{ borderRadius: '0px', border: 'none'}}
                ></iframe>
            </div>

    </div>
  )
}

export default RestaurantMainSection2
