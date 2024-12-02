import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'
import img from "../../../public/images/rooms/familyroom-banner.png"
import SubroomsInfoSection from './components/SubroomsInfoSection'

const SubRooms = () => {
  return (
    <div>
      <MainBackgroundRooms img={img} header="Family room"/>
      <SubroomsInfoSection text="A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home"/>
    </div>
  )
}

export default SubRooms
