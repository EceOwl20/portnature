import React from 'react'
import EmblaCarousel from './Embla/EmblaCarousel'
import Concert from './Images/Concerts.png'
import DayAndNight from './Images/Day&NightParties.png'
import StageShow from './Images/StageShow.png'
import LightShow from './Images/LightShows.png'
import KidsShow from './Images/KidsShow.png'
import Festival from './Images/Festivals.png'
import PoolGames from './Images2/PoolGames.png'
import AquaPark from './Images2/AquaPark.png'
import BeachVolley from './Images2/BeachVolley.png'
import Fitness from './Images2/Fitness.png'
import WaterAerobics from './Images2/WaterAerobics.png'
import Darts from './Images2/Darts.png'
import MiniGolf from './Images2/MiniGolf.png'
import Yoga from './Images2/Yoga.png'
import TenisCourt from './Images2/TenisCourt.png'
import TableTennis from './Images2/TableTennis.png'
import Basketball from './Images2/Basketball.png'

const Section2 = ({images=[], items=[]}) => {
  // İlk Slider için Slayt Verileri
  const slides = [
    { id: 1, title: 'CONCERTS', image: Festival },
    { id: 2, title: 'DAY & NIGHT PARTIES', image: StageShow },
    { id: 3, title: 'STAGE SHOWS', image: Concert },
    { id: 4, title: 'LIGHT SHOWS', image: DayAndNight },
    { id: 5, title: 'KIDS SHOWS', image: KidsShow },
    { id: 6, title: 'FESTIVALS', image: LightShow },
  ]

  // İkinci Slider için Slayt Verileri
  const secondSlides = [
    { id: 1, title: 'POOL GAMES', image: PoolGames },
    { id: 2, title: 'AQUAPARK', image: AquaPark },
    { id: 3, title: 'BEACH VOLLEY', image: BeachVolley },
    { id: 4, title: 'FITNESS', image: Fitness },
    { id: 5, title: 'WATER AEROBICS', image: WaterAerobics },
    { id: 6, title: 'DARTS', image: Darts },
    { id: 7, title: 'MINI GOLF', image: MiniGolf },
    { id: 8, title: 'YOGA', image: Yoga },
    { id: 9, title: 'TENNIS COURT', image: TenisCourt },
    { id: 10, title: 'TABLE TENNIS', image: TableTennis },
    { id: 11, title: 'BASKETBALL', image: Basketball },
  ]

  const options = { loop: true, align: 'start', }

  return (
    <section className="p-5">
      {/* İlk Slider */}
      <div className="flex w-full mt-5">
        <div className="bg-custom-gradient h-[1px] w-[50%]" />
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
      </div>
      <div className="w-8/12 ml-auto items-end justify-end">
        <EmblaCarousel slides={images} options={options} />
      </div>

      {/* İkinci Slider - Soldan Başlama */}
      <div className="flex justify-start mt-5">
        <div className="w-8/12">
          <EmblaCarousel slides={items} options={options} />
        </div>
      </div>
    </section>
  )
}

export default Section2
