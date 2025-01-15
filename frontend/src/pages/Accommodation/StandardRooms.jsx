import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import sideview from "../../../public/images/rooms/sideview.png"
import landview from "../../../public/images/rooms/landview.png"
import RoomInfo from './components/RoomInfo'
import StandardRoomComponent from './components/StandardRoomComponent'
import { Link } from 'react-router-dom'
import ContactSection from '../../components/homepage/ContactSection'
import RoomFeatures from './components/RoomFeatures'
import Cookies from "js-cookie";

const StandardRooms = () => {
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [standardRoomsSecData, setStandardRoomsSecData] = useState(null);
  const [standardRoomsSecData2, setStandardRoomsSecData2] = useState(null);
  const [standardRoomsSecData3, setStandardRoomsSecData3] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/standardrooms");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }

        // MainBackground verilerini çek
        const mainBackgroundComponent = localizedComponents.find(
          (comp) => comp.type === "MainBackground"
        );

        if (mainBackgroundComponent) {
          setMainBackgroundData(mainBackgroundComponent.props);
        } else {
          console.warn("MainBackgroundData data not found in Standard Rooms page");
        }

        // StandardRoomComponent verilerini çek
        const standardRoomsSecComponent = localizedComponents.find(
          (comp) => comp.type === "StandardRoomComponent"
        );
        if (standardRoomsSecComponent) {
          setStandardRoomsSecData(standardRoomsSecComponent.props);
        } else {
          console.warn("standardRoomsSecComponent data not found in Standard Rooms page");
        }

         // StandardRoomComponent verilerini çek
         const standardRoomsSecComponent2 = localizedComponents.find(
          (comp) => comp.type === "StandardRoomComponent2"
        );
        if (standardRoomsSecComponent2) {
          setStandardRoomsSecData2(standardRoomsSecComponent2.props);
        } else {
          console.warn("standardRoomsSecComponent2 data not found in Standard Rooms page");
        }

         // StandardRoomComponent verilerini çek
         const standardRoomsSecComponent3 = localizedComponents.find(
          (comp) => comp.type === "StandardRoomComponent3"
        );
        if (standardRoomsSecComponent3) {
          setStandardRoomsSecData3(standardRoomsSecComponent3.props);
        } else {
          console.warn("standardRoomsSecComponent3 data not found in Standard Rooms page");
        }

        // RoomsFeatures verilerini çek
        const roomsFeaturesComponent = localizedComponents.find(
          (comp) => comp.type === "RoomsFeatures"
        );

        if (roomsFeaturesComponent) {
          setRoomsFeaturesData(roomsFeaturesComponent.props);
        } else {
          console.warn("RoomsFeatures data not found in Standard Rooms page");
        }

        // Contact verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );

        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("Contact data not found in homepage");
        }


      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, [lang]);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !standardRoomsSecData && standardRoomsSecData2 && standardRoomsSecData3 && !roomsFeaturesData && !contactSectionData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col justify-center items-center'>
        <MainBackgroundRooms {...mainBackgroundData} />
        <StandardRoomComponent {...standardRoomsSecData} />
        <StandardRoomComponent {...standardRoomsSecData2} />
        <StandardRoomComponent {...standardRoomsSecData3} />
        <RoomFeatures {...roomsFeaturesData} />
        <ContactSection {...contactSectionData} />
    </div>
  )
}

export default StandardRooms
