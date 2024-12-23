import React from 'react'
import FoodCarousel from '../../components/food/FoodCarousel'
import FoodMenu from '../../components/food/FoodMenu'
import LogoSection from '../../components/LogoSection'
import ContactSection from '../../components/homepage/ContactSection'
import FindRestaurantSection from '../../components/food/FindRestaurantSection'
import RestaurantSection from '../../components/food/RestaurantSection'
import ReverseRestaurantSection from '../../components/food/ReverseRestaurantSection'

const FoodDrinkPage = ({carouselImg, menuImg, menuLinks,logoImages,findRestaurants,restaurants}) => {
  return (
    <div>
      <FoodCarousel images={carouselImg}/>
      <FoodMenu images={menuImg} links={menuLinks}/>
      <LogoSection images={logoImages}/>
      {restaurants.map((restaurant, index) => (
        index % 2 === 0 ? (
          <RestaurantSection
            key={index} // Benzersiz bir key eklenir
            header={restaurant.header}
            text={restaurant.text}
            span={restaurant.span}
            image={restaurant.image}
            link={restaurant.link}
          />
        ) : (
          <ReverseRestaurantSection
            key={index} // Benzersiz bir key eklenir
            header={restaurant.header}
            text={restaurant.text}
            span={restaurant.span}
            image={restaurant.image}
            link={restaurant.link}
          />
        )
      ))}
      <FindRestaurantSection findRestaurants={findRestaurants} />
      {/* <ContactSection/> */}
    </div>
  )
}

export default FoodDrinkPage
