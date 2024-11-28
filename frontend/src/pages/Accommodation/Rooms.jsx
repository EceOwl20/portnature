import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'
import img from "../../../public/images/rooms/Photo-All-Rooms.png"
import RoomInfo from './components/RoomInfo'

const Rooms = () => {
  return (
    <div>
      <MainBackgroundRooms img={img} header="Feel every advantage of our rooms"/>
      <RoomInfo/>
    </div>
  )
}

export default Rooms
