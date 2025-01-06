import React from 'react'
import Section1 from './Components/Section1'
import BookingOpportunities from './Components/BookingOpportunities'
import OffersContact from './Components/OffersContact'
import PlanYourTrip from './Components/PlanYourTrip'

const Offers = () => {
  return (
    <section>
        <Section1 />
        <BookingOpportunities/>
        <OffersContact/>
        <PlanYourTrip/>
    </section>
  )
}

export default Offers