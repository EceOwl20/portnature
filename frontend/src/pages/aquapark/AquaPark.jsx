import React from 'react'
import AquaParkSection1 from './components/AquaParkSection1'
import AquaParkSection2 from './components/AquaParkSection2'
import ContactSection from '../../components/homepage/ContactSection'
import SpecialOffers from '../../components/SpecialOffers'

const AquaPark = () => {
  return (
    <section>
      <AquaParkSection1/>
      <AquaParkSection2/>
      <ContactSection/>
      <SpecialOffers/>
    </section>
  )
}

export default AquaPark