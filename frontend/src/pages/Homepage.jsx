import React from 'react'
import img1 from "../../public/images/PortCover1.png"
import img2 from "../../public/images/PortCover31.png"
import img3 from "../../public/images/PortCover41.png"
import HomeCarousel from '../components/homepage/HomeCarousel'
import Reservation from '../components/homepage/Reservation'
import HomeIconSection from '../components/homepage/HomeIconSection'

const images =[img1,img2,img3];

const Homepage = () => {
  return (
    <div>
      <HomeCarousel images={images}/>
      <Reservation/>
      <HomeIconSection/>
    </div>
  )
}

export default Homepage
