import React, { useState, useEffect } from "react";
import MiniClubSlider from './components/MiniClubSlider'
import MiniClubSection2 from './components/MiniClubSection2';
import ContactSection from '../../components/homepage/ContactSection';
import SpecialOffers from '../../components/SpecialOffers';
import { useLanguage } from "../../../src/context/LanguageContext";

const MiniClub = () => {
  const [miniClubSliderData, setMiniClubSliderData] = useState(null);
  const [miniClubSection2Data, setMiniClubSection2Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [specialOffersData, setSpecialOffersData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/miniclub`);
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

           // miniClubSection2Data verilerini çek
           const miniClubSection2Component = localizedComponents.find(
            (comp) => comp.type === "MiniClubSection2"
          );
  
          if (miniClubSection2Component) {
            setMiniClubSection2Data(miniClubSection2Component.props);
          } else {
            console.warn("miniClubSection2Component data not found");
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
  if (!miniClubSliderData && !contactSectionData && !miniClubSection2Data && !specialOffersData) return <p>Loading...</p>;

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section>
        <MiniClubSlider options={OPTIONS} {...miniClubSliderData}/>
        {/* <MınıClubSection1 /> */}
        <MiniClubSection2 {...miniClubSection2Data} />
        <ContactSection {...contactSectionData} />
        <SpecialOffers {...specialOffersData} />
    </section>
  )
}

export default MiniClub