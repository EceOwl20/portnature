import React from 'react'
import FindRestaurantCard from './FindRestaurantCard'

const FindRestaurantSection = ({header, iconImage, filterItems=[]}) => {
  return (
    <div className='flex w-screen  h-auto py-10 justify-center items-center'>
      <div className='flex flex-col w-[90%] lg:w-[75%] xl:max-w-[1180px] justify-center items-center text-start'>
       <div className='flex w-full items-start justify-start text-start gap-[30px]'>
        <img src={iconImage.firebaseUrl} width={30} height={47}  loading="lazy"/>
       <h2 className='text-[25px] lg:text-[35px] text-customGray80 font-medium font-lora leading-normal uppercase'>{header}</h2>
       </div>
        <div className='flex flex-col md:grid grid-cols-2 w-full gap-[25px] lg:gap-[3%] mt-10 justify-between items-center'>
        {filterItems.map((restaurant, index) => (
        <FindRestaurantCard
          key={index}
          header={restaurant.header}
          text={restaurant.text}
          link={restaurant.buttonLink}
          icon={restaurant.iconImage}
          image={restaurant.image}
        />
      ))}
        </div>
      </div>
    </div>
  )
}

export default FindRestaurantSection
