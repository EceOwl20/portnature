import React from 'react'
import AquaLeaf from "../../../svg/aquapark/AquaLeaf"

const AquaParkSection1 = ({header,text, text2,image}) => {
  return (
    <div className='flex flex-col lg:flex-row max-w-[1920px] max-h-[4745px] w-screen lg:py-10 items-center justify-center mx-auto relative'>
        <AquaLeaf 
          className="absolute top-0 right-0 pointer-events-none z-0 hidden lg:flex" 
          width={280} 
          height={582} 
        />
        <img
          src={image.firebaseUrl}
          width={image.width}
          height={image.height}
          alt='Aquapark '
          className='max-w-screen lg:max-w-[997px] max-h-[868px] flex'
           loading="lazy"
        />
        <div className='flex flex-col gap-4 lg:gap-10 items-center border-t border-r border-b border-dotted p-16 border-black relative z-10'>
          <h1 className='items-center justify-center text-center font-lora text-[25px] lg:text-[40px] font-medium leading-normal'>
            {header}
          </h1>
          <div className='flex flex-row w-full'>
            <div className='bg-custom-gradient h-[1px] w-[50%]'></div>
            <div className='bg-custom-gradient-reverse h-[1px] w-[50%]'></div>
          </div>
          <h2 className='font-monserrat text-[16px] lg:text-[20px] font-semibold leading-[22.5px] text-black w-11/12 text-center'>
          {text}
          </h2>
          <p className='font-monserrat text-[15px] font-normal leading-[22.5px] text-black w-9/12 text-center'>
          {text2}
          </p>
        </div>
      </div>
  )
}

export default AquaParkSection1