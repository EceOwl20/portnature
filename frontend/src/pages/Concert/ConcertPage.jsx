import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../src/context/LanguageContext";
import IndoorpoolMainSection from "../Indoorpool/components/IndoorpoolMainSection";
import ConcertImagesSection from "./components/ConcertImagesSection";
import ContactSection from "../../components/homepage/ContactSection";
import SingleImage from "./components/SingleImage";
import OtherRestaurants from "../Kids/components/OtherRestaurants";
import SingleVideo from "./components/SingleVideo";
import IndoorBorderCarousel from "../Indoorpool/components/IndoorBorderCarousel";

const ConcertPage = () => {
    const [mainCarouselData, setMainCarouselData] = useState(null);
    const [imagesSectionData, setImagesSectionData] = useState(null);
    const [contactSectionData, setContactSectionData] = useState(null);
    const [specialGuestsData, setSpecialGuestsData] = useState(null);
    const [otherOptionsData, setOtherOptionsData] = useState(null);
    const [error, setError] = useState(null);
  
    const { language: lang } = useLanguage(); 

    useEffect(() => {
        const fetchPageData = async () => {
          try {
            const response = await fetch(`/api/page/concert`);
            const data = await response.json();
    
            if (!response.ok) {
              throw new Error(data.message || "Failed to fetch page data");
            }
    
             // Dil bazında transactions verisini al
             const localizedComponents = data.translations[lang];
      
             if (!localizedComponents) {
               throw new Error(`No translations found for language: ${lang}`);
             }
       
    
              // mainCarouselComponent verilerini çek
              const mainCarouselComponent = localizedComponents.find(
                (comp) => comp.type === "MainCarousel"
              );
      
              if (mainCarouselComponent) {
                setMainCarouselData(mainCarouselComponent.props);
              } else {
                console.warn("mainCarouselComponent data not found");
              }

              // imagesSectionComponent verilerini çek
              const imagesSectionComponent = localizedComponents.find(
                (comp) => comp.type === "ImagesSection"
              );
      
              if (imagesSectionComponent) {
                setImagesSectionData(imagesSectionComponent.props);
              } else {
                console.warn("imagesSectionComponent data not found ");
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
    
                // specialOffers verilerini çek
                const specialGuestsComponent = localizedComponents.find(
                  (comp) => comp.type === "SpecialGuests"
                );
        
                if (specialGuestsComponent) {
                  setSpecialGuestsData(specialGuestsComponent.props);
                } else {
                  console.warn("specialGuestsComponent data not found ");
                }

                 // specialOffers verilerini çek
                 const otherOptionsComponent = localizedComponents.find(
                  (comp) => comp.type === "OtherOptions"
                );
        
                if (otherOptionsComponent) {
                  setOtherOptionsData(otherOptionsComponent.props);
                } else {
                  console.warn("otherOptionsComponent data not found ");
                }
    
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchPageData();
      }, []);
    
      if (error) return <p>Error: {error}</p>;
      if (!mainCarouselData && !imagesSectionData && !contactSectionData && !specialGuestsData && !otherOptionsData) return <p>Loading...</p>;
        
      const OPTIONS = { loop: true }

  return (
    <div>
      <IndoorpoolMainSection {...mainCarouselData} options={OPTIONS}/>
      <SingleImage {...mainCarouselData}/>
      <ConcertImagesSection {...imagesSectionData}/>
      <IndoorBorderCarousel {...specialGuestsData}/>
      <SingleVideo {...specialGuestsData}/>
      <ContactSection {...contactSectionData}/>
      <OtherRestaurants {...otherOptionsData}/>
    </div>
  )
}

export default ConcertPage
