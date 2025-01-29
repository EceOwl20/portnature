import React from 'react'
import { Link } from 'react-router-dom'

const Section2 = ({header,text,image, links, linksText}) => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 mt-12 mb-12 max-w-[1920px] items-center justify-center'>
        <img src={image.firebaseUrl} className='w-[90%] lg:w-7/12' />
        <div className='flex flex-col w-[85%] lg:w-4/12 gap-7 relative items-center justify-center text-center'>
            <h2 className='flex font-lora text-[25px] lg:text-[40px] font-medium leading-normal mb-4'>
                {header}
            </h2>
                <div className='flex w-4/12 mt-6 mb-4 absolute top-8 lg:top-12 left-1/2 -translate-x-1/2 lg:-left-12'>
                <div className="bg-custom-gradient h-[1px] w-[50%]">
                </div>
                <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
                </div>
                </div>
            <p className='flex font-monserrat max-w-[361px] text-[15px] font-normal leading-5'>
            {text}
            </p>
            <Link to={links} className='flex border border-solid-[1px] w-28 p-3 text-[14px] font-monserrat font-bold leading-normal hover:bg-[#868686] whitespace-nowrap'>{linksText}</Link>
        </div>
    </div>
    </div>
  )
}

export default Section2