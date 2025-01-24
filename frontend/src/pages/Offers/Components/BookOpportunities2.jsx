import React from 'react'
import { Link } from 'react-router-dom';

const BookOpportunities2 = ({images=[],header}) => {
  return (
    <div className='flex w-screen items-center justify-center h-screen'>
    <div className='flex flex-col w-[95%] items-center justify-center gap-[5%] text-center h-[85%]'>
      <h2 className='text-customGray lg:text-[40px] text-[25px] leading-normal uppercase font-lora font-medium'>{header}</h2>
      <div className='flex flex-col lg:flex-row items-center justify-around w-full '>
          {images.map((image,index) => (
              <div className='flex flex-col gap-[31px] items-start justify-center text-start font-monserrat w-[32%] relative'>
                  <img src={image.firebaseUrl} width={image.width} height={image.height} className='flex max-w-[513px] max-h-[511px] w-[95%]'/>
                  <h3 className='text-[20px] lg:text-[30px] text-customGray font-semibold leading-[40px] capitalize w-[90%]'>{image.headers}</h3>
                  <p className='text-[16px] text-[#a8a8a8] leading-[24px] font-medium w-[90%]'>{image.text} </p>
                  <Link to={image.buttonLink} className='absolute inset-0 z-10 '></Link>
              </div>
          ))}
         
      </div>
    </div>
  </div>
  )
}

export default BookOpportunities2
