import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PubBarMainSection from '../../components/food/PubBarMainSection'
import ContactSection from '../../components/homepage/ContactSection'
import OtherRestaurants from "../Kids/components/OtherRestaurants";

const PubBarPage = ({page}) => {
  const [mainSectionData, setMainSection] = useState(null);
  const [otherRestaurantSectionData, setOtherRestaurantSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
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

          // mainSectionComponent verilerini çek
          const mainSectionComponent = data.components.find(
            (comp) => comp.type === "MainSection"
          );
  
          if (mainSectionComponent) {
            setMainSection(mainSectionComponent.props);
          } else {
            console.warn("mainSectionComponent data not found");
          }

           // setOtherRestaurantSectionData verilerini çek
           const otherRestaurantSectionComponent = data.components.find(
            (comp) => comp.type === "OtherOptions"
          );
  
          if (otherRestaurantSectionComponent) {
            setOtherRestaurantSectionData(otherRestaurantSectionComponent.props);
          } else {
            console.warn("otherRestaurantSectionComponent data not found");
          }

            // Contact verilerini çek
            const contactSectionComponent = data.components.find(
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
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!mainSectionData) return <p>Loading...</p>;


  return (
    <div>
      <PubBarMainSection {...mainSectionData} lang={lang}/>
      <ContactSection {...contactSectionData} lang={lang}/>
      <OtherRestaurants {...otherRestaurantSectionData} lang={lang}/>
    </div>
  )
}

export default PubBarPage
