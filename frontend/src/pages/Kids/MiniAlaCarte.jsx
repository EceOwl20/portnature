import React, { useState, useEffect } from "react";
import MiniAlaCarteSection1 from './components/MiniAlaCarteSection1'
import ContactSection from '../../components/homepage/ContactSection'
import OtherRestaurants from './components/OtherRestaurants'

const MiniAlaCarte = ({page}) => {
  return (
    <section>
        <MiniAlaCarteSection1/>
        {/* <ContactSection/> */}
        <OtherRestaurants/>
    </section>
  )
}

export default MiniAlaCarte