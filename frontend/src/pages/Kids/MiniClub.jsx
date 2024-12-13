import React from 'react'
import DavidoffCarousel from '../../components/food/DavidoffCarousel'
import MiniClubSlider from './components/MiniClubSlider'
import MınıClubSection1 from './components/MınıClubSection1';

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
    </section>
  )
}

export default MiniClub