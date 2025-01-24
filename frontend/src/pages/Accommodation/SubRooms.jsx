import React, { useState, useEffect } from "react";
import MainBackgroundRooms from "./components/MainBackgroundRooms";
import SubroomsInfoSection from "./components/SubroomsInfoSection";
import RoomFeatures from "./components/RoomFeatures";
import ContactSection from "../../components/homepage/ContactSection";
import RoomPlan from "./components/RoomPlan";
import OtherOptions from "./components/OtherOptions";
import { useLanguage } from "../../../src/context/LanguageContext";

const SubRooms = ({ page }) => {
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [subroomInfoSecData, setSubroomInfoSecData] = useState(null);
  const [roomsFeaturesData, setRoomsFeaturesData] = useState(null);
  const [roomPlanData, setRoomPlanData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [othersectionData, setOthersectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/${page}`);
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

        // setSubroomInfoSecData verilerini çek
        const subroomInfoSecComponent = localizedComponents.find(
          (comp) => comp.type === "SubroomInfoSection"
        );

        if (subroomInfoSecComponent) {
          setSubroomInfoSecData(subroomInfoSecComponent.props);
        } else {
          console.warn("SubroomInfoSection data not found in Rooms page");
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

        // RoomPlan verilerini çek
        const roomPlanComponent = localizedComponents.find(
          (comp) => comp.type === "RoomPlan"
        );

        if (roomPlanComponent) {
          setRoomPlanData(roomPlanComponent.props);
        } else {
          console.warn("RoomPlan data not found in Rooms page");
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
        
         // otheroptionsComponent verilerini çek
         const otheroptionsComponent = localizedComponents.find(
          (comp) => comp.type === "OtherOptions"
        );

        if (otheroptionsComponent) {
          setOthersectionData(otheroptionsComponent.props);
        } else {
          console.warn("otheroptionsComponent data not found in Rooms page");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (
    !mainBackgroundData &&
    !roomsFeaturesData &&
    !subroomInfoSecData &&
    !roomPlanData &&
    !contactSectionData &&
    !othersectionData
  )
    return <p>Loading...</p>;

  return (
    <div>
      <MainBackgroundRooms {...mainBackgroundData} />
      <SubroomsInfoSection {...subroomInfoSecData} />
      <RoomFeatures {...roomsFeaturesData} />
      <RoomPlan {...roomPlanData} />
      <ContactSection {...contactSectionData}/>
      <OtherOptions {...othersectionData}/>
    </div>
  );
};

export default SubRooms;
