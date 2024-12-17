import React from 'react'
import StarSvg from "../../svg/StarSvg"
import UnderLine from "../../svg/UnderLine/UnderLine"
import SubCarousel from './SubCarousel'
import img1 from "../../../public/images/homepage/portnaturehotel1.png"
import img2 from "../../../public/images/homepage/portnaturehotel2.jpeg"
import img3 from "../../../public/images/homepage/portnaturehotel3.png"
import img4 from "../../../public/images/homepage/portnaturehotel4.png"
import img5 from "../../../public/images/homepage/portnaturehotel5.png"

const images=[img1,img2,img3,img4,img5];

const AllInclusive = ({images=[], lang="en", header,span,text1,text2,starNum,carouselHeader, carouselText, carouselSpan}) => {
  return (
    <main className='flex flex-col w-screen h-auto font-lora items-center justify-center py-[150px]'>
      <div className='flex flex-col gap-[21px] items-center justify-center text-center w-[93%] lg:w-[70%] text-[#233038CC]'>
        <h2 className='text-[25px] lg:text-[35px] italic font-medium leading-[34px] lg:leading-normal'>{header[lang]}</h2>
        <p className='text-[18px] lg:text-[20px] leading-[27px] lg:leading-normal font-monserrat font-bold '>{span[lang]}</p>
        <UnderLine className="flex lg:hidden"/>
        <div className='flex flex-col lg:flex-row w-[90%] lg:w-[70%] text-[#233038CC] text-[13px] lg:text-[15px] text-justify font-normal leading-[19px] lg:leading-[22.5px] gap-[30px] lg:gap-[4%]'>
            <p className='w-[100%] lg:w-[48%]'>{text1[lang]}</p>
            <p className='w-[100%] lg:w-[48%]'>{text2[lang]}</p>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row w-full items-center leading-normal font-medium gap-[2%]'>
        <div className='flex text-start justify-start lg:justify-end lg:items-end items-center w-[86%] lg:w-[49%]'>
          <div className='flex flex-col w-[88%] lg:w-[70%] justify-end items-start gap-[20px]'>
          <span className='text-[55px] lg:text-[65px] text-[#233038] flex items-center justify-center gap-[10px]'>{starNum} <StarSvg className="hidden lg:flex" width={53} height={50}/> <StarSvg className="flex lg:hidden" width={45} height={42}/></span>
          <h3 className='text-[25px] lg:text-[28px] text-[#233038] leading-[32px] lg:leading-normal'>{carouselHeader[lang]}</h3>
          <p className='text-[13px] lg:text-[15px] font-normal leading-[19px] lg:leading-[22.5px] text-start lg:text-justify text-[#233038CC] lg:text-[#000] mt-[7px]'>
          {carouselText[lang]}
          </p>
          <UnderLine/>
          <span className='text-[#515961] text-[15px] leading-[22.5px] font-bold'>{carouselSpan[lang]}</span>
          </div>
        </div>
       <div className='flex w-[100%] lg:w-[49%] items-start justify-start'>
       <SubCarousel images={images}/>
       </div>
      </div>
    </main>
  )
}

export default AllInclusive
