import React from 'react'
import MainBackgroundRooms from './components/MainBackgroundRooms'
import SubroomsInfoSection from './components/SubroomsInfoSection'
import RoomFeatures from './components/RoomFeatures'
import ContactSection from '../../components/homepage/ContactSection'
import RoomPlan from './components/RoomPlan'
import OtherOptions from './components/OtherOptions'

const SubRooms = ({img,header,text,items,images,planImg}) => {
  return (
    <div>
      <MainBackgroundRooms img={img} header={header}/>
      <SubroomsInfoSection text={text} images={images} items={items} />
      <RoomFeatures/>
      <RoomPlan img={planImg}/>
      <ContactSection/>
      <OtherOptions/>
    </div>
  )
}

export default SubRooms
