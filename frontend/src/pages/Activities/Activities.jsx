import React, { useState, useEffect } from "react";
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import { useLanguage } from "../../context/LanguageContext";
import ContactSection from "../../components/homepage/ContactSection";

const Activities = () => {
  const [section1Data, setSection1Data] = useState(null);
  const [section2Data, setSection2Data] = useState(null);
  const [section3Data, setSection3Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/activities`);
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
          const section1Components = localizedComponents.find(
            (comp) => comp.type === "Section1"
          );
  
          if (section1Components) {
            setSection1Data(section1Components.props);
          } else {
            console.warn("section1Components data not found");
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
  if (!section1Data && !section2Data && !section3Data && !contactSectionData) return <p>Loading...</p>;
  
  return (
    <section>
        <Section1 {...section1Data}/>
       <Section2 {...section2Data}/>
         <Section3 {...section3Data}/>  
        <ContactSection {...contactSectionData}/>
    </section>
  )
}

export default Activities