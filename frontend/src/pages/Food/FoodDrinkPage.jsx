import React from 'react'
import FoodCarousel from '../../components/food/FoodCarousel'
import FoodMenu from '../../components/food/FoodMenu'
import LogoSection from '../../components/LogoSection'
import ContactSection from '../../components/homepage/ContactSection'
import FindRestaurantSection from '../../components/FindRestaurantSection'

const FoodDrinkPage = () => {
  return (
    <div>
      <FoodCarousel/>
      <FoodMenu/>
      <LogoSection/>
      <FindRestaurantSection/>
      <ContactSection/>
    </div>
  )
}

export default FoodDrinkPage
