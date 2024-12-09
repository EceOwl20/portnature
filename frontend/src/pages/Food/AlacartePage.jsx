import React from 'react'
import AlaCarteMain from '../../components/food/AlaCarteMain'
import FindRestaurantSection from '../../components/food/FindRestaurantSection'
import ContactSection from '../../components/homepage/ContactSection'

const AlacartePage = ({findRestaurants}) => {
  return (
    <div >
      <AlaCarteMain/>
      <FindRestaurantSection findRestaurants={findRestaurants}/>
      <ContactSection/>
    </div>
  )
}

export default AlacartePage
