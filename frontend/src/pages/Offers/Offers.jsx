import React from 'react'
import Section1 from './Components/Section1'
import BookingOpportunities from './Components/BookingOpportunities'
import OffersContact from './Components/OffersContact'
import PlanYourTrip from './Components/PlanYourTrip'
import LogoCarousel from './Components/LogoCarousel'
import BookTransfer from './Components/BookTransfer'

const Offers = () => {
  return (
    <section>
        <Section1 />
        <BookingOpportunities/>
        <OffersContact/>
        <PlanYourTrip/>
        <LogoCarousel/>
        <BookTransfer/>
    </section>
  )
}

export default Offers