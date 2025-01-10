import React, { useState, useEffect } from "react";
import MainBackgroundRooms from './components/MainBackgroundRooms'
import SubroomsInfoSection from './components/SubroomsInfoSection'
import RoomFeatures from './components/RoomFeatures'
import ContactSection from '../../components/homepage/ContactSection'
import RoomPlan from './components/RoomPlan'
import OtherOptions from './components/OtherOptions'
import Cookies from "js-cookie";

const SubRooms = ({page}) => {
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [subroomInfoSecData, setSubroomInfoSecData] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [roomPlanData, setRoomPlanData] = useState(null);
  const [error, setError] = useState(null);

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/page/${page}`);
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

        // setSubroomInfoSecData verilerini çek
        const subroomInfoSecComponent = data.components.find(
          (comp) => comp.type === "SubroomInfoSection"
        );

        if (subroomInfoSecComponent) {
          setSubroomInfoSecData(subroomInfoSecComponent.props);
        } else {
          console.warn("SubroomInfoSection data not found in Rooms page");
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

        // RoomPlan verilerini çek
        const roomPlanComponent = data.components.find(
          (comp) => comp.type === "RoomPlan"
        );

        if (roomPlanComponent) {
          setRoomPlanData(roomPlanComponent.props);
        } else {
          console.warn("RoomPlan data not found in Rooms page");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !roomsFeaturesData && !subroomInfoSecData && !roomPlanData) return <p>Loading...</p>;


  return (
    <div>
      <MainBackgroundRooms {...mainBackgroundData} lang={lang}/>
      <SubroomsInfoSection {...subroomInfoSecData} lang={lang}/>
      <RoomFeatures {...roomsFeaturesData} lang={lang}/>
      <RoomPlan {...roomPlanData} lang={lang}/>
      {/* <ContactSection/> */}
      <OtherOptions/>
    </div>
  )
}

export default SubRooms
