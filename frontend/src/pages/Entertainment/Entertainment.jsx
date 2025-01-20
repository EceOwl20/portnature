import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../src/context/LanguageContext";
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import ContactSection from '../../components/homepage/ContactSection'

const Entertainment = () => {
  const [section1Data, setSection1Data] = useState(null);
  const [section2Data, setSection2Data] = useState(null);
  const [section3Data, setSection3Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/entertainment");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

         // Dil bazında transactions verisini al
         const localizedComponents = data.translations[lang];
  
         if (!localizedComponents) {
           throw new Error(`No translations found for language: ${lang}`);
         }

           // Section1 verilerini çek
           const section1Component = localizedComponents.find(
            (comp) => comp.type === "Section1"
          );
  
          if (section1Component) {
            setSection1Data(section1Component.props);
          } else {
            console.warn("Section1 not found in homepage");
          }

          // Section2 verilerini çek
          const section2Component = localizedComponents.find(
            (comp) => comp.type === "Section2"
          );
  
          if (section2Component) {
            setSection2Data(section2Component.props);
          } else {
            console.warn("Section2 not found in homepage");
          }

          // Section3 verilerini çek
          const section3Component = localizedComponents.find(
            (comp) => comp.type === "Section3"
          );
  
          if (section3Component) {
            setSection3Data(section3Component.props);
          } else {
            console.warn("Section3 not found in homepage");
          }

            // Contact verilerini çek
            const contactSectionComponent = localizedComponents.find(
              (comp) => comp.type === "ContactSection"
            );
    
            if (contactSectionComponent) {
              setContactSectionData(contactSectionComponent.props);
            } else {
              console.warn("Contact data not found in homepage");
            }

      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!section1Data && !section2Data && !section3Data && !contactSectionData) return <p>Loading...</p>;

  return (
    <section>
        <Section1 {...section1Data} />
        <Section2 {...section2Data} />
        <Section3 {...section3Data} />
        <ContactSection {...contactSectionData} />
    </section>
  )
}

export default Entertainment