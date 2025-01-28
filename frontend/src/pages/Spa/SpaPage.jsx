import React, { useState, useEffect } from "react";
import SpaMainSection from '../../components/spa/SpaMainSection'
import Section2 from '../Activities/Components/Section2'
import Section3 from '../Activities/Components/Section3'
import ContactSection from '../../components/homepage/ContactSection'
import { useLanguage } from "../../context/LanguageContext";

const SpaPage = () => {
  const [mainsectionData, setMainsectionData] = useState(null);
  const [section2Data, setSection2Data] = useState(null);
  const [section3Data, setSection3Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/spa`);
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
            (comp) => comp.type === "SpaMainSection"
          );
  
          if (mainsectionComponent) {
            setMainsectionData(mainsectionComponent.props);
          } else {
            console.warn("mainsectionComponent data not found");
          }

           // section2Components verilerini çek
           const section2Components = localizedComponents.find(
            (comp) => comp.type === "Section2"
          );
  
          if (section2Components) {
            setSection2Data(section2Components.props);
          } else {
            console.warn("section2Components data not found");
          }

           // section3Components verilerini çek
           const section3Components = localizedComponents.find(
            (comp) => comp.type === "Section3"
          );
  
          if (section3Components) {
            setSection3Data(section3Components.props);
          } else {
            console.warn("section3Components data not found");
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
  if (!mainsectionData && !section2Data && !section3Data && !contactSectionData) return <p>Loading...</p>;
  

  return (
    <div>
      <SpaMainSection {...mainsectionData}/>
      <Section2 {...section2Data}/>
      <Section3 {...section3Data}/>
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default SpaPage
