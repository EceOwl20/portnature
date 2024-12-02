import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'

import RoomInfo from './components/RoomInfo'

const Rooms = ({img,header,links,linkstext,text1,text2,text3,images1,images2,images3}) => {
  return (
    <div>
      <MainBackgroundRooms img={img} header={header}/>
      <RoomInfo links={links} linkstext={linkstext} text1={text1} text2={text2} text3={text3} images1={images1} images2={images2} images3={images3}/>
    </div>
  )
}

export default Rooms
