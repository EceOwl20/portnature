import React from 'react'
import { Link } from 'react-router-dom';

const BookingOpportunities = ({images=[],header}) => {
  return (
    <div className='flex w-screen items-center justify-center h-screen'>
      <div className='flex flex-col w-[90%] items-center justify-center gap-[5%] text-center h-[85%]'>
        <h2 className='text-customGray lg:text-[40px] text-[25px] leading-normal uppercase font-lora font-medium'>{header}</h2>
        <div className='flex flex-col lg:flex-row items-center justify-around w-full'>
            {images.map((image,index) => (
                <div key={index} className='flex flex-col gap-[30px] items-start justify-center text-start w-[32%]'>
                    <img src={image.firebaseUrl} width={image.width} height={image.height} className='flex max-w-[513px] max-h-[511px] w-[100%]' alt={image.altText}/>
                    <h3 className='text-[20px] lg:text-[30px] text-customGray font-semibold font-monserrat leading-[40px] capitalize'>{image.header}</h3>
                    <Link to={image.buttonLink} className='flex py-[12px] px-[34px] text-[14px] border border-[#6b6b6b] text-customGray font-monserrat text-center font-bold leading-normal bg-transparent hover:text-white hover:bg-customGray'>{image.buttonText}</Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BookingOpportunities
