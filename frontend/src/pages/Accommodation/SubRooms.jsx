import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'
import SubroomsInfoSection from './components/SubroomsInfoSection'
import RoomFeatures from './components/RoomFeatures'
import ContactSection from '../../components/homepage/ContactSection'
import RoomPlan from './components/RoomPlan'

const SubRooms = ({img,header,text,items,images}) => {
  return (
    <div>
      <MainBackgroundRooms img={img} header={header}/>
      <SubroomsInfoSection text={text} images={images} items={items} />
      <RoomFeatures/>
      <RoomPlan/>
      <ContactSection/>
    </div>
  )
}

export default SubRooms
