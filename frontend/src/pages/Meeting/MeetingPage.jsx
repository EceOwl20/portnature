import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import MainBackgroundRooms from "../Accommodation/components/MainBackgroundRooms";
import MeetingSection from "./components/MeetingSection";
import MeetingReverseSection from "./components/MeetingReverseSection";
import ContactSection from "../../components/homepage/ContactSection";

const MeetingPage = () => {
  const [mainsectionData, setMainsectionData] = useState(null);
  const [section2Data, setSection2Data] = useState(null);
  const [section3Data, setSection3Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/meeting`);
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
            (comp) => comp.type === "MainBackground"
          );
  
          if (mainsectionComponent) {
            setMainsectionData(mainsectionComponent.props);
          } else {
            console.warn("mainsectionComponent data not found");
          }

           // Section2 verilerini çek
           const section2Component = localizedComponents.find(
            (comp) => comp.type === "Section2"
          );
  
          if (section2Component) {
            setSection2Data(section2Component.props);
          } else {
            console.warn("sectionComponent data not found ");
          }

            // Section2 verilerini çek
            const section3Component = localizedComponents.find(
                (comp) => comp.type === "Section3"
              );
      
              if (section3Component) {
                setSection3Data(section3Component.props);
              } else {
                console.warn("section3Component data not found ");
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
  if (!mainsectionData && !contactSectionData && !section2Data && !section3Data) return <p>Loading...</p>;

  return (
    <div>
      <MainBackgroundRooms {...mainsectionData}/> 
      <MeetingSection {...section2Data}/>
      <MeetingReverseSection {...section3Data}/>
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default MeetingPage
