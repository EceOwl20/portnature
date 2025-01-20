import React, { useState, useEffect } from "react";
import AquaParkSection1 from './components/AquaParkSection1'
import AquaParkSection2 from './components/AquaParkSection2'
import ContactSection from '../../components/homepage/ContactSection'
import SpecialOffers from '../../components/SpecialOffers'
import { useLanguage } from "../../../src/context/LanguageContext";

const AquaPark = () => {
  const [aquaSectionData, setAquaSectionData] = useState(null);
  const [aquaSection2Data, setAquaSection2Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/aquapark`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

         // Dil bazında transactions verisini al
         const localizedComponents = data.translations[lang];
  
         if (!localizedComponents) {
           throw new Error(`No translations found for language: ${lang}`);
         }

          // AquaSectionComponent verilerini çek
          const AquaSectionComponent = localizedComponents.find(
            (comp) => comp.type === "AquaSection"
          );
  
          if (AquaSectionComponent) {
            setAquaSectionData(AquaSectionComponent.props);
          } else {
            console.warn("AquaSectionComponent data not found");
          }

           // AquaSectionComponent2 verilerini çek
           const AquaSectionComponent2 = localizedComponents.find(
            (comp) => comp.type === "AquaSection2"
          );
  
          if (AquaSectionComponent2) {
            setAquaSection2Data(AquaSectionComponent2.props);
          } else {
            console.warn("AquaSectionComponent2 data not found");
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
  if (!aquaSectionData && !aquaSection2Data && !contactSectionData) return <p>Loading...</p>;

  return (
    <section>
      <AquaParkSection1 {...aquaSectionData} />
      <AquaParkSection2 {...aquaSection2Data} />
      <ContactSection {...contactSectionData}/>
      {/* <SpecialOffers/> */}
    </section>
  )
}

export default AquaPark