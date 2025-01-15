import React from 'react'

const CafeBarsMainSection = ({image, header,text}) => {
  return (
    <div className='flex flex-col items-center w-full justify-center'>
      <div className='flex w-full relative items-start justify-center text-center'>
        <img src={image.firebaseUrl} alt='pub' width={image.width} height={image.height}/>
        <h2 className='absolute bottom-2 left-1/2 -translate-x-1/2 text-[40px] font-lora font-medium leading-normal text-[#F8F8F8]'>{header}</h2>
      </div>
      <div className='flex w-[65%] lg:max-w-[900px] h-[30vh] items-center justify-center text-center'>
        <p className='text-[15px] font-monserrat font-normal leading-[22.5px] text-black'>{text}</p>
      </div>
      <div className='flex w-screen mb-10'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
    </div>
  )
}

export default CafeBarsMainSection
