import React from 'react'
import Section1 from './Components/Section1'
import BookingOpportunities from './Components/BookingOpportunities'
import OffersContact from './Components/OffersContact'
import PlanYourTrip from './Components/PlanYourTrip'
import LogoCarousel from './Components/LogoCarousel'
import BookTransfer from './Components/BookTransfer'
import ReviewCarousel from './Components/ReviewCarousel'
import BookOpportunities2 from './Components/BookOpportunities2'

const Offers = () => {
  return (
    <section>
        <Section1 />
        <BookingOpportunities/>
        <OffersContact/>
        <PlanYourTrip/>
        <LogoCarousel/>
        <BookTransfer/>
        <ReviewCarousel/>
        <BookOpportunities2/>
    </section>
  )
}

export default Offers