import React from 'react'
import RestaurantSection from "../../components/food/RestaurantSection";
import ReverseRestaurantSection from "../../components/food/ReverseRestaurantSection";

const AllRestaurantSection = ({restaurantItems=[]}) => {
    const restaurants=[...restaurantItems];
  return (
    <div>
       {restaurants.map((restaurant, index) =>
        index % 2 === 0 ? (
          <RestaurantSection
          key={index} // Benzersiz bir key eklenir
          header={restaurant.header}
          text={restaurant.text}
          span={restaurant.span}
          image={restaurant.image}
          buttonLink={restaurant.buttonLink}
          buttonText={restaurant.buttonText}
          />
        ) : (
          <ReverseRestaurantSection
          key={index} // Benzersiz bir key eklenir
          header={restaurant.header}
          text={restaurant.text}
          span={restaurant.span}
          image={restaurant.image}
          buttonLink={restaurant.buttonLink}
          buttonText={restaurant.buttonText}
          />
        )
      )}
    </div>
  )
}

export default AllRestaurantSection
