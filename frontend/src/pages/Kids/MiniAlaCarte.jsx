import React, { useState, useEffect } from "react";
import RestaurantMainSection2 from './components/RestaurantMainSection2'
import ContactSection from '../../components/homepage/ContactSection'
import OtherRestaurants from './components/OtherRestaurants'
import { useLanguage } from "../../../src/context/LanguageContext";

const MiniAlaCarte = () => {
  const [mainSectionData, setMainSectionData] = useState(null);
  const [otherRestaurantData, setOtherRestaurantData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/beach`);
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
            setMainSectionData(mainSectionComponent.props);
          } else {
            console.warn("mainSectionComponent data not found");
          }

           // otherRestaurantComponent verilerini çek
           const otherRestaurantComponent = localizedComponents.find(
            (comp) => comp.type === "OtherOptions"
          );
  
          if (otherRestaurantComponent) {
            setOtherRestaurantData(otherRestaurantComponent.props);
          } else {
            console.warn("otherRestaurantComponent data not found");
          }


            // Contact verilerini çek
            const contactSectionComponent = localizedComponents.find(
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
  if (!mainSectionData && !contactSectionData && !otherRestaurantData) return <p>Loading...</p>;

  return (
    <section>
        <RestaurantMainSection2 {...mainSectionData}/>
        <ContactSection {...contactSectionData}/>
        <OtherRestaurants {...otherRestaurantData}/>
    </section>
  )
}

export default MiniAlaCarte