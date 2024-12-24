import React from 'react'
import RestaurantSection from "../../components/food/RestaurantSection";
import ReverseRestaurantSection from "../../components/food/ReverseRestaurantSection";

const AllRestaurantSection = ({restaurantItems=[], lang="en"}) => {
    const restaurants=[...restaurantItems];
  return (
    <div>
       {restaurants.map((restaurant, index) =>
        index % 2 === 0 ? (
          <RestaurantSection
          key={index} // Benzersiz bir key eklenir
          header={restaurant.header[lang]}
          text={restaurant.text[lang]}
          span={restaurant.span[lang]}
          image={restaurant.image}
          buttonLink={restaurant.buttonLink[lang]}
          buttonText={restaurant.buttonText[lang]}
          />
        ) : (
          <ReverseRestaurantSection
          key={index} // Benzersiz bir key eklenir
          header={restaurant.header[lang]}
          text={restaurant.text[lang]}
          span={restaurant.span[lang]}
          image={restaurant.image}
          buttonLink={restaurant.buttonLink[lang]}
          buttonText={restaurant.buttonText[lang]}
          />
        )
      )}
    </div>
  )
}

export default AllRestaurantSection
