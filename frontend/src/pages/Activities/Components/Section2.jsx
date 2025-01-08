import React from 'react'
import EmblaCarousel from './Embla/EmblaCarousel'
import Concert from './Images/Concerts.png'
import DayAndNight from './Images/Day&NightParties.png'
import StageShow from './Images/StageShow.png'
import LightShow from './Images/LightShows.png'
import KidsShow from './Images/KidsShow.png'
import Festival from './Images/Festivals.png'

const Section2 = () => {
  const slides = [
    { id: 1, title: 'First Slide', description: 'This is the first slide', image: Concert },
    { id: 2, title: 'Second Slide', description: 'This is the second slide', image: DayAndNight },
    { id: 3, title: 'Third Slide', description: 'This is the third slide', image: StageShow },
    { id: 4, title: 'Fourth Slide', description: 'This is the fourth slide', image: LightShow },
    { id: 5, title: 'Fifth Slide', description: 'This is the fifth slide', image: KidsShow },
    { id: 6, title: 'Sixth Slide', description: 'This is the sixth slide', image: Festival },
  ]

  const options = { loop: true, align: 'start' }

  return (
    <section className="p-5">
      <div className="flex w-full mt-5 mb-12">
        <div className="bg-custom-gradient h-[1px] w-[50%]" />
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
      </div>

     
      <div className="w-8/12 ml-auto items-end justify-end">
        <EmblaCarousel slides={slides} options={options} />
      </div>
    </section>
  )
}

export default Section2