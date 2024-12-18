import React from 'react'
import MiniClubSlider from '../Kids/components/MiniClubSlider'

const Beach = () => {

    const slides = [
        '../../../public/Beach/beach1.png',
        '../../../public/Beach/beach2.png',
        '../../../public/Beach/beach3.png',
      ];
      
    
      const OPTIONS = { loop: true }
      const SLIDE_COUNT = 5
      const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section>
        <MiniClubSlider slides={slides} options={OPTIONS}/>
    </section>
  )
}

export default Beach