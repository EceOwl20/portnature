import React from 'react'
import FoodCarousel from '../../components/food/FoodCarousel'
import FoodMenu from '../../components/food/FoodMenu'
import LogoSection from '../../components/LogoSection'
import ContactSection from '../../components/homepage/ContactSection'
import FindRestaurantSection from '../../components/food/FindRestaurantSection'

const FoodDrinkPage = ({carouselImg, menuImg, menuLinks,logoImages,findFoodImages}) => {
  return (
    <div>
      <FoodCarousel images={carouselImg}/>
      <FoodMenu images={menuImg} links={menuLinks}/>
      <LogoSection images={logoImages}/>
      <FindRestaurantSection images={findFoodImages}/>
      <ContactSection/>
    </div>
  )
}

export default FoodDrinkPage
