import React from 'react'
import MiniClubSlider from '../Kids/components/MiniClubSlider'
import BeachSection1 from './components/BeachSection1';
import BeachSection2 from './components/BeachSection2';
import ContactSection from '../../components/homepage/ContactSection';
import SpecialOffers from '../../components/SpecialOffers';

const Beach = () => {

    const slides = [
        '/images/Beach/beach1.png',
        '/images/Beach/beach2.png',
        '/images/Beach/beach3.png',
      ];
      
    
      const OPTIONS = { loop: true }
      const SLIDE_COUNT = 5
      const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section>
        <MiniClubSlider slides={slides} options={OPTIONS}/>
        <BeachSection1 />
        <BeachSection2/>
        <ContactSection/>
        <SpecialOffers/>
    </section>
  )
}

export default Beach