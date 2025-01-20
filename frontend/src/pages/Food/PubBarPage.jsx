import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../src/context/LanguageContext";
import PubBarMainSection from '../../components/food/PubBarMainSection'
import ContactSection from '../../components/homepage/ContactSection'
import OtherRestaurants from "../Kids/components/OtherRestaurants";

const PubBarPage = ({page}) => {
  const [mainSectionData, setMainSection] = useState(null);
  const [otherRestaurantSectionData, setOtherRestaurantSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
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

          // mainSectionComponent verilerini çek
          const mainSectionComponent = localizedComponents.find(
            (comp) => comp.type === "MainSection"
          );
  
          if (mainSectionComponent) {
            setMainSection(mainSectionComponent.props);
          } else {
            console.warn("mainSectionComponent data not found");
          }

           // setOtherRestaurantSectionData verilerini çek
           const otherRestaurantSectionComponent = localizedComponents.find(
            (comp) => comp.type === "OtherOptions"
          );
  
          if (otherRestaurantSectionComponent) {
            setOtherRestaurantSectionData(otherRestaurantSectionComponent.props);
          } else {
            console.warn("otherRestaurantSectionComponent data not found");
          }

            // Contact verilerini çek
            const contactSectionComponent = localizedComponents.find(
              (comp) => comp.type === "ContactSection"
            );
    
            if (contactSectionComponent) {
              setContactSectionData(contactSectionComponent.props);
            } else {
              console.warn("Contact data not found");
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
      <PubBarMainSection {...mainSectionData} />
      <ContactSection {...contactSectionData} />
      <OtherRestaurants {...otherRestaurantSectionData} />
    </div>
  )
}

export default PubBarPage
