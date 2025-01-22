import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import RoomFeatures from "./components/RoomFeatures";
import RoomsInfoCarousel from "./components/RoomsInfoCarousel";
import { useLanguage } from "../../../src/context/LanguageContext";
import ContactSection from "../../components/homepage/ContactSection";

const Rooms = () => {
  const { language: lang } = useLanguage(); 

  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [roomsCarouselData, setRoomsCarouselData] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/roomspage");
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

        // RoomsInfoCarousel verilerini çek
        const roomsCarouselComponent = localizedComponents.find(
          (comp) => comp.type === "RoomsInfoCarousel"
        );

        if (roomsCarouselComponent) {
          setRoomsCarouselData(roomsCarouselComponent.props);
        } else {
          console.warn("RoomsInfoCarousel data not found in Rooms page");
        }

        // RoomsFeatures verilerini çek
        const roomsFeaturesComponent = localizedComponents.find(
          (comp) => comp.type === "RoomsFeatures"
        );

        if (roomsFeaturesComponent) {
          setRoomsFeaturesData(roomsFeaturesComponent.props);
        } else {
          console.warn("RoomsFeatures data not found in Rooms page");
        }

        // ContactSection verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found in homepage");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, [lang]);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !roomsCarouselData && !roomsFeaturesData) return <p>Loading...</p>;

  return (
    <div>
      <MainBackgroundRooms {...mainBackgroundData} />
      {/* <RoomInfo links={links} linkstext={linkstext} text1={text1} text2={text2} text3={text3} images1={images1} images2={images2} images3={images3}/> */}
      <RoomsInfoCarousel {...roomsCarouselData} />
        <RoomFeatures {...roomsFeaturesData} />
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default Rooms
