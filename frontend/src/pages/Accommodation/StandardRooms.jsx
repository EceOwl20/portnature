import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import sideview from "../../../public/images/rooms/sideview.png"
import landview from "../../../public/images/rooms/landview.png"
import RoomInfo from './components/RoomInfo'
import StandardRoomComponent from './components/StandardRoomComponent'
import { Link } from 'react-router-dom'
import ContactSection from '../../components/homepage/ContactSection'
import RoomFeatures from './components/RoomFeatures'

const StandardRooms = ({img,header,links,linkstext}) => {
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [standardRoomsSecData, setStandardRoomsSecData] = useState(null);
  const [standardRoomsSecData2, setStandardRoomsSecData2] = useState(null);
  const [standardRoomsSecData3, setStandardRoomsSecData3] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/standardrooms");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // MainBackground verilerini çek
        const mainBackgroundComponent = data.components.find(
          (comp) => comp.type === "MainBackground"
        );

        if (mainBackgroundComponent) {
          setMainBackgroundData(mainBackgroundComponent.props);
        } else {
          console.warn("MainBackgroundData data not found in Standard Rooms page");
        }

        // StandardRoomComponent verilerini çek
        const standardRoomsSecComponent = data.components.find(
          (comp) => comp.type === "StandardRoomComponent"
        );
        if (standardRoomsSecComponent) {
          setStandardRoomsSecData(standardRoomsSecComponent.props);
        } else {
          console.warn("standardRoomsSecComponent data not found in Standard Rooms page");
        }

         // StandardRoomComponent verilerini çek
         const standardRoomsSecComponent2 = data.components.find(
          (comp) => comp.type === "StandardRoomComponent2"
        );
        if (standardRoomsSecComponent2) {
          setStandardRoomsSecData2(standardRoomsSecComponent2.props);
        } else {
          console.warn("standardRoomsSecComponent2 data not found in Standard Rooms page");
        }

         // StandardRoomComponent verilerini çek
         const standardRoomsSecComponent3 = data.components.find(
          (comp) => comp.type === "StandardRoomComponent3"
        );
        if (standardRoomsSecComponent3) {
          setStandardRoomsSecData3(standardRoomsSecComponent3.props);
        } else {
          console.warn("standardRoomsSecComponent3 data not found in Standard Rooms page");
        }

        // RoomsFeatures verilerini çek
        const roomsFeaturesComponent = data.components.find(
          (comp) => comp.type === "RoomsFeatures"
        );

        if (roomsFeaturesComponent) {
          setRoomsFeaturesData(roomsFeaturesComponent.props);
        } else {
          console.warn("RoomsFeatures data not found in Standard Rooms page");
        }


      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !standardRoomsSecData && !roomsFeaturesData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col justify-center items-center'>
        <MainBackgroundRooms {...mainBackgroundData} />
        <StandardRoomComponent {...standardRoomsSecData}/>
        <StandardRoomComponent {...standardRoomsSecData2}/>
        <StandardRoomComponent {...standardRoomsSecData3}/>
        <RoomFeatures {...roomsFeaturesData}/>
        {/* <ContactSection/> */}
    </div>
  )
}

export default StandardRooms
