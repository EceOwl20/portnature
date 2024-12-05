import React from 'react'
import farEast from "../../../public/images/FarEastRestaurant 1.png"
import LocationSvg from "../../svg/LocationSvg"
import FindRestaurantCard from './FindRestaurantCard'

const FindRestaurantSection = ({images,headers,texts,links}) => {
  return (
    <div className='flex w-screen h-auto py-10 justify-center items-center'>
      <div className='flex flex-col w-[90%] lg:w-[75%] xl:max-w-[1180px] justify-center items-center text-start'>
       <div className='flex w-full items-start justify-start text-start gap-[30px]'>
        <LocationSvg width={30} height={47}/>
       <h2 className='text-[25px] lg:text-[35px] text-customGray80 font-medium font-lora leading-normal uppercase'>FIND A'LA CARTE</h2>
       </div>
        <div className='flex flex-col md:grid grid-cols-2 w-full gap-[25px] lg:gap-[3%] mt-10 justify-between items-center'>
          {images.map((item,index)=>(
             <FindRestaurantCard img={item} header="FAR EAST A'LA CARTE" text="We always offer the freshest. This is the secret of our taste. The freshest was chosen for you." link="/"/>
          ))}
            
        </div>
      </div>
    </div>
  )
}

export default FindRestaurantSection
