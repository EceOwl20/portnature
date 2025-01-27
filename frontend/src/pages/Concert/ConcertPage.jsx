import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../src/context/LanguageContext";
import MiniClubSlider from "../Kids/components/MiniClubSlider";
import IndoorpoolMainSection from "../Indoorpool/components/IndoorpoolMainSection";

const ConcertPage = () => {
    const [mainCarouselData, setMainCarouselData] = useState(null);
    const [contactSectionData, setContactSectionData] = useState(null);
    const [specialOffersData, setSpecialOffersData] = useState(null);
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
                const specialOffersComponents = localizedComponents.find(
                  (comp) => comp.type === "SpecialOfferss"
                );
        
                if (specialOffersComponents) {
                  setSpecialOffersData(specialOffersComponents.props);
                } else {
                  console.warn("specialOffersComponents data not found ");
                }
    
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchPageData();
      }, []);
    
      if (error) return <p>Error: {error}</p>;
      if (!mainCarouselData && !contactSectionData && !specialOffersData) return <p>Loading...</p>;
        
      const OPTIONS = { loop: true }

  return (
    <div>
      <IndoorpoolMainSection {...mainCarouselData} options={OPTIONS}/>
    </div>
  )
}

export default ConcertPage
