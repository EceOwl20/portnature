import React from 'react'
import AquaLeaf from "../../../svg/aquapark/AquaLeaf"

const AquaParkSection1 = () => {
  return (
    <div className='flex flex-row max-w-[1920px] max-h-[4745px] p-10 items-center justify-center mx-auto relative'>
        <AquaLeaf 
          className="absolute top-0 right-0 pointer-events-none z-0" 
          width={280} 
          height={582} 
        />
        <img
          src='../../../public/images/aquapark/AquaPark.png'
          alt='Aquapark max-w-[997px] max-h-[868px]'
        />
        <div className='flex flex-col gap-10 items-center border-t border-r border-b border-dotted p-16 border-black relative z-10'>
          <h1 className='items-center justify-center text-center font-lora text-[40px] font-medium leading-normal'>
            AQUAPARK
          </h1>
          <div className='flex flex-row w-full'>
            <div className='bg-custom-gradient h-[1px] w-[50%]'></div>
            <div className='bg-custom-gradient-reverse h-[1px] w-[50%]'></div>
          </div>
          <h2 className='font-monserrat text-[20px] font-bold leading-[22.5px] text-black w-11/12 text-center'>
            Our Aquapark with 18 slides and pools are the ideal place for your children to enjoy some great time
          </h2>
          <p className='font-monserrat text-[15px] font-normal leading-[22.5px] text-black w-9/12 text-center'>
            We have prepared an entertainment area of 1000 m2, where our children can make a lot of friends from different nationalities and socialize under the supervision of our experienced employees
          </p>
        </div>
      </div>
  )
}

export default AquaParkSection1