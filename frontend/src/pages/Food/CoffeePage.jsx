import React from 'react'
import DavidoffCarousel from '../../components/food/DavidoffCarousel'
import ContactSection from "../../components/homepage/ContactSection"
import CoffeeTextSection from '../../components/food/CoffeeTextSection'

const CoffeePage = () => {
  return (
    <div>
      <DavidoffCarousel/>
      <CoffeeTextSection/>
      <ContactSection/>
    </div>
  )
}

export default CoffeePage
