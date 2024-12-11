import React from 'react'
import DavidoffCarousel from '../../components/food/DavidoffCarousel'
import ContactSection from "../../components/homepage/ContactSection"
import CoffeeTextSection from '../../components/food/CoffeeTextSection'

const CoffeePage = ({carouselImg,logo,logoText,carouselTexts,subheader, subTexts, image, children}) => {
  return (
    <div>
      <DavidoffCarousel carouselImg={carouselImg} carouselTexts={carouselTexts} logo={logo} logoText={logoText}/>
      <CoffeeTextSection header={subheader} texts={subTexts} image={image} children={children}/>
      <ContactSection/>
    </div>
  )
}

export default CoffeePage
