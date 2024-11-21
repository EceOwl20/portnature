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

const AllInclusive = () => {
  return (
    <main className='flex flex-col w-screen h-auto font-lora items-center justify-center py-[150px]'>
      <div className='flex flex-col gap-[21px] items-center justify-center text-center w-[70%] text-[#233038CC]'>
        <h2 className='text-[25px] lg:text-[35px] font-italic font-medium leading-[34px] lg:leading-normal'>Your holiday Experience Premium A'la Carte All Inclusive</h2>
        <p className='text-[18px] lg:text-[20px] leading-[27px] lg:leading-normal font-monserrat font-bold '>You deserve that!</p>
        <UnderLine className="flex lg:hidden"/>
        <div className='flex flex-col lg:flex-row w-[70%] text-[#000000] text-[15px] text-justify font-normal leading-[22.5px] gap-[4%]'>
            <p className='w-[48%]'>Our Premium A La Carte All Inclusive concept is pushing the limits of quality and service. With 148 kinds of Premium.</p>
            <p className='w-[48%]'>Also, we have prepared a unique kids' concept for your kids. Serenity of Davidoff Cafe is free of charge in our facility. </p>
        </div>
      </div>

      <div className='flex w-full items-center leading-normal font-medium gap-[2%]'>
        <div className='flex flex-row-reverse lg:flex-col text-start justify-end items-end w-[49%] '>
          <div className='flex flex-col w-[70%] justify-end items-start gap-[20px]'>
          <span className='text-[65px] text-[#233038] flex items-center justify-center gap-[10px]'>5 <StarSvg className="flex" width={53} height={50}/></span>
          <h3 className='text-[28px] text-[#233038] '>ALL INCLUSIVE</h3>
          <p className='text-[15px] font-normal leading-[22.5px] text-justify text-[#000] mt-[7px]'>
          Our Premium A La Carte All Inclusive concept is pushing the limits of quality and service. With 148 kinds of Premium drink and our rich menus, we will enrich your holiday.
           Also, we have prepared a unique kids' concept for your kids. Serenity of Davidoff Cafe is free of charge in our facility.
          </p>
          <UnderLine/>
          <span className='text-[#515961] text-[15px] leading-[22.5px] font-bold'>Because you deserve it!</span>
          </div>

          {/* carousel */}
        </div>
       <div className='flex w-[49%] items-start justify-start'>
       <SubCarousel images={images}/>
       </div>
      </div>
    </main>
  )
}

export default AllInclusive
