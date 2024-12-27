import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import RoomInfo from "./components/RoomInfo";
import RoomFeatures from "./components/RoomFeatures";
import RoomsInfoCarousel from "./components/RoomsInfoCarousel";
import Cookies from "js-cookie";

const Rooms = ({links,linkstext,text1,text2,text3,images1,images2,images3}) => {
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [roomsCarouselData, setRoomsCarouselData] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [error, setError] = useState(null);
  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/roomspage");
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
          console.warn("MainBackgroundData data not found in Rooms page");
        }

        // RoomsInfoCarousel verilerini çek
        const roomsCarouselComponent = data.components.find(
          (comp) => comp.type === "RoomsInfoCarousel"
        );

        if (roomsCarouselComponent) {
          setRoomsCarouselData(roomsCarouselComponent.props);
        } else {
          console.warn("RoomsInfoCarousel data not found in Rooms page");
        }

        // RoomsFeatures verilerini çek
        const roomsFeaturesComponent = data.components.find(
          (comp) => comp.type === "RoomsFeatures"
        );

        if (roomsFeaturesComponent) {
          setRoomsFeaturesData(roomsFeaturesComponent.props);
        } else {
          console.warn("RoomsFeatures data not found in Rooms page");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !roomsCarouselData && !roomsFeaturesData) return <p>Loading...</p>;

  return (
    <div>
      <MainBackgroundRooms {...mainBackgroundData} lang={lang}/>
      {/* <RoomInfo links={links} linkstext={linkstext} text1={text1} text2={text2} text3={text3} images1={images1} images2={images2} images3={images3}/> */}
      <RoomsInfoCarousel {...roomsCarouselData} lang={lang}/>
        {/* <RoomsInfoCarousel images={images2} text={text2}/>
        <RoomsInfoCarousel images={images3} text={text3}/> */}

        <RoomFeatures {...roomsFeaturesData} lang={lang}/>
      {/* <ContactSection/> */}
    </div>
  )
}

export default Rooms
