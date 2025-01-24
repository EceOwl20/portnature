import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import StandardRoomComponent from './components/StandardRoomComponent'
import ContactSection from '../../components/homepage/ContactSection'
import RoomFeatures from './components/RoomFeatures'
import { useLanguage } from "../../context/LanguageContext";
import OtherOptions from "./components/OtherOptions";

const StandardRooms = () => {
  const { language: lang } = useLanguage();

  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [standardRoomsSecData, setStandardRoomsSecData] = useState(null);
  const [standardRoomsSecData2, setStandardRoomsSecData2] = useState(null);
  const [standardRoomsSecData3, setStandardRoomsSecData3] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [othersectionData, setOthersectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/standardrooms");
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
            console.warn("MainBackgroundData data not found in Rooms page");
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

      // ContactSection verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found");
        }

        // otheroptionsComponent verilerini çek
        const otheroptionsComponent = localizedComponents.find(
          (comp) => comp.type === "OtherOptions"
        );

        if (otheroptionsComponent) {
          setOthersectionData(otheroptionsComponent.props);
        } else {
          console.warn("otheroptionsComponent data not found ");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, [lang]);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !standardRoomsSecData && !standardRoomsSecData2 && !standardRoomsSecData3 && !roomsFeaturesData && !contactSectionData && !othersectionData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col justify-center items-center'>
         <MainBackgroundRooms {...mainBackgroundData} />
        <StandardRoomComponent {...standardRoomsSecData} />
        <StandardRoomComponent {...standardRoomsSecData2} />
        <StandardRoomComponent {...standardRoomsSecData3} />
        <RoomFeatures {...roomsFeaturesData} />
        <ContactSection {...contactSectionData} />
        <OtherOptions {...othersectionData}/>
    </div>
  )
}

export default StandardRooms
