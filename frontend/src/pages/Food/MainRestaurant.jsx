import React, { useState, useEffect } from "react";
import RestaurantMainSection from '../../components/food/RestaurantMainSection'
import OtherRestaurants from '../Kids/components/OtherRestaurants'
import Cookies from "js-cookie";
import ContactSection from "../../components/homepage/ContactSection";

const MainRestaurant = ({page}) => {
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
              console.warn("Contact data not found ");
            }

      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!mainSectionData && !contactSectionData && !otherRestaurantSectionData) return <p>Loading...</p>;

  return (
    <div>
      <RestaurantMainSection {...mainSectionData} lang={lang}/>
      <ContactSection {...contactSectionData} lang={lang}/>
      <OtherRestaurants {...otherRestaurantSectionData} lang={lang}/>
    </div>
  )
}

export default MainRestaurant
