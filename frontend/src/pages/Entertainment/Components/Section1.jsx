import React from 'react'

const Section1 = ({header,text,image}) => {

  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col max-w-[1920px] min-h-[600px] lg:h-[986px] items-center justify-center gap-10' style={{
            backgroundImage: `linear-gradient(#00000033, #00000033), url(${image.firebaseUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='flex text-[#fff] font-lora text-[40px] font-medium leading-normal'>{header}</h1>
            <div className='flex w-screen'>
            <div className="bg-custom-gradient h-[1px] w-[50%]">
            </div>
            <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
            </div>
            </div>
            <p className='text-[#f5f5f5] text-center font-monserrat text-[17px] lg:text-[20px] leading-7 font-bold'>{text}</p>
        </div>
    </div>
  )
}

export default Section1