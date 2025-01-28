import React, { useState, useEffect } from "react";
import MiniClubSlider from '../Kids/components/MiniClubSlider'
import BeachSection2 from './components/BeachSection2';
import ContactSection from '../../components/homepage/ContactSection';
import SpecialOffers from '../../components/SpecialOffers';
import { useLanguage } from "../../../src/context/LanguageContext";

const Beach = () => {
  const [miniClubSliderData, setMiniClubSliderData] = useState(null);
  const [beachSectionData, setBeachSectionData] = useState(null);
  const [beachSection2Data, setBeachSection2Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [specialOffersData, setSpecialOffersData] = useState(null);
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
   

          // miniClubSliderData verilerini çek
          const miniClubSliderComponent = localizedComponents.find(
            (comp) => comp.type === "MiniClubSlider"
          );
  
          if (miniClubSliderComponent) {
            setMiniClubSliderData(miniClubSliderComponent.props);
          } else {
            console.warn("miniClubSliderComponent data not found");
          }

           // setBeachSectionData verilerini çek
           const beachSectionComponent = localizedComponents.find(
            (comp) => comp.type === "BeachSection"
          );
  
          if (beachSectionComponent) {
            setBeachSectionData(beachSectionComponent.props);
          } else {
            console.warn("beachSectionComponent data not found");
          }

           // setBeachSection2Data verilerini çek
           const beachSection2Component = localizedComponents.find(
            (comp) => comp.type === "BeachSection2"
          );
  
          if (beachSection2Component) {
            setBeachSection2Data(beachSection2Component.props);
          } else {
            console.warn("beachSection2Component data not found");
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
  if (!miniClubSliderData && !contactSectionData && !beachSectionData && !beachSection2Data && !specialOffersData) return <p>Loading...</p>;

      
    
      const OPTIONS = { loop: true }

  return (
    <section>
        <MiniClubSlider options={OPTIONS} {...miniClubSliderData} />
        {/* <BeachSection1 /> */}
        <BeachSection2 {...beachSection2Data} />
        <ContactSection {...contactSectionData} />
        <SpecialOffers {...specialOffersData} />
    </section>
  )
}

export default Beach