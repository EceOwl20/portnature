import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import IndoorpoolMainSection from "./components/IndoorpoolMainSection";
import ContactSection from "../../components/homepage/ContactSection";
import OtherRestaurants from "../Kids/components/OtherRestaurants";
import IndoorBorderCarousel from "./components/IndoorBorderCarousel";

const IndoorpoolPage = () => {
  const [mainsectionData, setMainsectionData] = useState(null);
  const [otheroptionsData, setOtheroptionsData] = useState(null);
  const [bordercarouselData, setBordercarouselData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/indoorpool`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

         // Dil bazında transactions verisini al
         const localizedComponents = data.translations[lang];
  
         if (!localizedComponents) {
           throw new Error(`No translations found for language: ${lang}`);
         }
   

          // section1Components verilerini çek
          const mainsectionComponent = localizedComponents.find(
            (comp) => comp.type === "MainSection"
          );
  
          if (mainsectionComponent) {
            setMainsectionData(mainsectionComponent.props);
          } else {
            console.warn("mainsectionComponent data not found");
          }

           // OtherOptions verilerini çek
           const otherOptionsComponent = localizedComponents.find(
            (comp) => comp.type === "OtherOptions"
          );
  
          if (otherOptionsComponent) {
            setOtheroptionsData(otherOptionsComponent.props);
          } else {
            console.warn("otherOptionsComponent data not found ");
          }

           // borderCarousel verilerini çek
           const borderCarouselComponent = localizedComponents.find(
            (comp) => comp.type === "BorderCarousel"
          );
  
          if (borderCarouselComponent) {
            setBordercarouselData(borderCarouselComponent.props);
          } else {
            console.warn("borderCarouselComponent data not found ");
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
  if (!mainsectionData && !contactSectionData && !otheroptionsData && !bordercarouselData) return <p>Loading...</p>;

  const OPTIONS = { loop: true }

  return (
    <div>
      <IndoorpoolMainSection options={OPTIONS} {...mainsectionData}/>
      <IndoorBorderCarousel {...bordercarouselData}/>
      <ContactSection {...contactSectionData}/>
      <OtherRestaurants {...otheroptionsData}/>
      
    </div>
  )
}

export default IndoorpoolPage
