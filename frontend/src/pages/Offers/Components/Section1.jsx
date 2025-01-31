import React from 'react'

const Section1 = ({image, image2, iconImage, iconImage2, header, text}) => {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto items-center justify-center gap-[150px] lg:mb-12">
      {/* Üstteki resim */}
      <div className="flex w-full items-center justify-center">
        <img 
          className="max-w-full h-[400px] object-cover lg:h-auto" 
          src={image.firebaseUrl}
          alt={image.altText} 
           loading="lazy"
        />
      </div>

      {/* Metin ve sağındaki resim */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-36 pb-16 relative">
        <div className="flex flex-col gap-8 w-[85%] lg:max-w-[378px] text-center lg:text-start">
          <div className='flex flex-col gap-12 h-16'>
            <img src={iconImage.firebaseUrl} alt={iconImage.altText} className="w-[117px]"  loading="lazy"/>
            <img src={iconImage.firebaseUrl} alt={iconImage.altText} className="w-[78px] absolute -left-20 top-52"  loading="lazy"/>
          </div>
          <h1 className="text-center font-lora text-[40px] text-[#233038] font-medium leading-[50px]">
            {header}
          </h1>
          <div className='flex flex-row w-full'>
            <div className='bg-custom-gradient h-[1px] w-[50%]'></div>
            <div className='bg-custom-gradient-reverse h-[1px] w-[50%]'></div>
          </div>
          <p className='font-monserrat text-[14px] font-normal leading-5'>
          {text}
          </p>
        </div>
        <img 
          src={image2.firebaseUrl} 
          alt={image2.altText} 
          className="max-w-[800px] max-h-[738px] w-[95%]" 
           loading="lazy"
        />
      </div>
    </div>
  )
}

export default Section1
