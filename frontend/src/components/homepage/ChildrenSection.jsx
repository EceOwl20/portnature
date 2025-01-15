import React from 'react'
import { ChildrenCarousel } from './ChildrenCarousel'

const ChildrenSection = ({images=[], items=[], header, buttonText}) => {
  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] mt-10'>
      <div className='flex flex-col w-[90%] lg:w-[60%] gap-[30px] items-center justify-center text-center'>
        <h2 className='text-[#233038] text-[25px] lg:text-[40px] font-lora font-medium leading-normal'>{header}</h2>
        <div className='flex w-screen'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <div className='grid grid-cols-2 lg:flex items-center justify-center lg:justify-between font-monserrat gap-[20px]'>
      {items.map((item, index) => (
        <div key={index} className={item.wrapperClasses}>
          <img src={item.firebaseUrl} className="hidden lg:flex" width={item.largeWidth} height={item.largeHeight} />
          <img src={item.firebaseUrl} className="flex lg:hidden" width={item.smallWidth} height={item.smallHeight}/>
          <span className='text-[14px] text-[#233038CC] leading-normal font-bold'>{item.text}</span>
        </div>
      ))}
    </div>
      </div>
      <ChildrenCarousel images={images}/>
      <button className='flex bg-white border border-[#868686] py-[12px] px-[31px] font-monserrat font-bold text-[14px] text-center text-[#233038] leading-normal hover:bg-[#233038] hover:text-[#fff]'>{buttonText}</button>
    </div>
  )
}
export default ChildrenSection;
