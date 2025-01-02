import React from 'react'
import MiniClubSlider from './components/MiniClubSlider'
import MınıClubSection1 from './components/MınıClubSection1';
import MiniClubSection2 from './components/MiniClubSection2';
import ContactSection from '../../components/homepage/ContactSection';
import SpecialOffers from '../../components/SpecialOffers';

const MiniClub = () => {

  const slides = [
    '../../../public/images/miniclub/miniclub1.png',
    '../../../public/images/miniclub/miniclub2.png',
    '../../../public/images/miniclub/miniclub1.png',
    '../../../public/images/miniclub/miniclub2.png',
    '../../../public/images/miniclub/miniclub1.png',
  ];
  

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section>
        <MiniClubSlider slides={slides} options={OPTIONS} />
        <MınıClubSection1 />
        <MiniClubSection2 />
        {/* <ContactSection/> */}
        <SpecialOffers/>
    </section>
  )
}

export default MiniClub