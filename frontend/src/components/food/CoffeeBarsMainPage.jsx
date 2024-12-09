import React from 'react'
import pubImage from "../../../public/images/food/IrishPub2.png"
import FilterFindCafe from './FilterFindCafe'
import ContactSection from '../homepage/ContactSection'

const CoffeeBarsMainPage = ({filterfindRestaurants}) => {
  return (
    <div className='flex flex-col w-screen h-auto items-center justify-center '>
      <div className='flex w-full h-[50vh] relative items-start justify-center text-center'>
        <img src={pubImage} alt='pub' width={pubImage.width} height={pubImage.height}/>
        <h2 className='absolute bottom-2 left-1/2 -translate-x-1/2 text-[40px] font-lora font-medium leading-normal text-[#F8F8F8]'> BARS & CAFES</h2>
      </div>
      <div className='flex w-[65%] lg:max-w-[900px] h-[30vh] items-center justify-center text-center'>
        <p className='text-[15px] font-monserrat font-normal leading-[22.5px] text-black'>Отведайте вкусную выпечку, бутерброды и хлебобулочные изделия свежих ингредиентов высочайшего качества с свежевыжатым соком и напитками в наших кафе. Или посетите наши бары и откройте для себя импортные алкогольные напитки со всего мира и искусно приготовленные коктейли.</p>
      </div>
      <div className='flex w-screen mb-10'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <FilterFindCafe filterfindRestaurants={filterfindRestaurants}/>
      <ContactSection/>
    </div>
  )
}

export default CoffeeBarsMainPage
