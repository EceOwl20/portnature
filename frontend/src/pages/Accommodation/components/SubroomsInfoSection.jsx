import React from 'react'
import UnderLine from '../../../svg/UnderLine/UnderLine'

const SubroomsInfoSection = ({images=[], items=[], text, header, text2, span, lang}) => {

  return (
    <div className='flex flex-col w-screen h-auto my-12 justify-center items-center '>
      <div className='flex w-[80%] lg:w-[46%] justify-center items-center text-center text-customGray/80'>
      <p className='text-[20px] font-bold leading-[30px] font-monserrat'>{text[lang]}</p>
      </div>
      <div className='flex w-screen mt-20'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>

      <div className='grid grid-cols-3 lg:flex lg:flex-row justify-around items-center w-[95%] lg:w-[85%] text-customGray80 leading-normal text-[12px] lg:text-[14px] font-bold uppercase font-monserrat my-10 gap-10'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center'>
            <img src={item.firebaseUrl} width={item.width} height={item.height}  />
            <p>{item.text[lang]}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col lg:grid lg:grid-cols-2 w-[100%] md:w-[90%] lg:w-[70%] gap-[30px]'>
        {images.map((image, index) => (
          <img key={index} src={image.firebaseUrl} alt={image.altText[lang]} width={image.width} height={image.height} className='flex w-full'/>
        ))}
        <div className='flex flex-col w-[90%] items-center lg:items-start justify-center text-center lg:text-start gap-4 text-[13px] lg:text-[15px] text-black font-monserrat font-normal leading-[19px] lg:leading-[22.5px]'>
          <h3 className='text-[25px] lg:text-[28px] italic leading-[34px] lg:leading-[42px] font-lora text-customGray font-medium'>
            {header[lang]}
          </h3>
          <UnderLine width={170} height={1} />
          <p>
           {text2[lang]}
          </p>
          <span className='text-[#3D515E] font-bold text-[18px]'>{span[lang]}</span>
        </div>
      </div>

    </div>
  )
}

export default SubroomsInfoSection
