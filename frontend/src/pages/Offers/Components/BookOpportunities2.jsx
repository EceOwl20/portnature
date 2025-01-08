import React from 'react'
import img from "../../../../public/images/PortCover31.png"
import { Link } from 'react-router-dom';

const images=[img,img,img];
const headers=["Oncoming concerts at Belek's Hotel 💓💥","Visit the best excursions in Belek 🥰 💤 🏖  ","Experience Ultimate Relaxation at Hotel 🥰 💎"]
const links=["/","/miniclub","/main-restaurant"];
const texts=["Port Nature gives you a taste of enjoyment.Pure enjoyment for kids and adults without worrying. We have prepared an entertainment area of 1000 m².","Port Nature gives you a taste of enjoyment.Pure enjoyment for kids and adults without worrying. We have prepared an entertainment area of 1000 m².","Port Nature gives you a taste of enjoyment.Pure enjoyment for kids and adults without worrying. We have prepared an entertainment area of 1000 m²."]

const BookOpportunities2 = () => {
  return (
    <div className='flex w-screen items-center justify-center h-screen'>
    <div className='flex flex-col w-[95%] items-center justify-center gap-[5%] text-center h-[85%]'>
      <h2 className='text-customGray lg:text-[40px] text-[25px] leading-normal uppercase font-lora font-medium'>Booking Opportunities IN SUMMER</h2>
      <div className='flex flex-col lg:flex-row items-center justify-around w-full '>
          {images.map((image,index) => (
              <div className='flex flex-col gap-[31px] items-start justify-center text-start font-monserrat w-[32%] relative'>
                  <img src={image} width={image.width} height={image.height} className='flex max-w-[513px] max-h-[511px] w-[95%]'/>
                  <h3 className='text-[20px] lg:text-[30px] text-customGray font-semibold leading-[40px] capitalize w-[90%]'>{headers[index]}</h3>
                  <p className='text-[16px] text-[#a8a8a8] leading-[24px] font-medium w-[90%]'>{texts[index]} </p>
                  <Link to={links[index]} className='absolute inset-0 z-10 '></Link>
              </div>
          ))}
         
      </div>
    </div>
  </div>
  )
}

export default BookOpportunities2
