import React from 'react'
import img1 from "../../public/images/PortCover1.png"
import img2 from "../../public/images/PortCover31.png"
import img3 from "../../public/images/PortCover41.png"
import HomeCarousel from '../components/homepage/HomeCarousel'
import Reservation from '../components/homepage/Reservation'
import HomeIconSection from '../components/homepage/HomeIconSection'
import AllInclusive from '../components/homepage/AllInclusive'
import SubCarousel from '../components/homepage/SubCarousel'
import HolidayImageSection from '../components/homepage/HolidayImageSection'
import Accommodation from '../components/homepage/Accommodation'
import ChildrenSection from '../components/homepage/ChildrenSection'

const images =[img1,img2,img3];

const Homepage = () => {
  return (
    <div>
      <HomeCarousel images={images}/>
      <Reservation/>
      <HomeIconSection/>
      <div className='flex w-screen'>
      <div class="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div class="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <AllInclusive/>
      <HolidayImageSection/>
      <Accommodation/>
      <ChildrenSection/>
    </div>
  )
}

export default Homepage
