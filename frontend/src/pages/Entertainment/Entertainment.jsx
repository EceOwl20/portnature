import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
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

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/entertainment");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

           // Section1 verilerini çek
           const section1Component = data.components.find(
            (comp) => comp.type === "Section1"
          );
  
          if (section1Component) {
            setSection1Data(section1Component.props);
          } else {
            console.warn("Section1 not found in homepage");
          }

          // Section2 verilerini çek
          const section2Component = data.components.find(
            (comp) => comp.type === "Section2"
          );
  
          if (section2Component) {
            setSection2Data(section2Component.props);
          } else {
            console.warn("Section2 not found in homepage");
          }

          // Section3 verilerini çek
          const section3Component = data.components.find(
            (comp) => comp.type === "Section3"
          );
  
          if (section3Component) {
            setSection3Data(section3Component.props);
          } else {
            console.warn("Section3 not found in homepage");
          }

            // Contact verilerini çek
            const contactSectionComponent = data.components.find(
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
        <Section1 {...section1Data} lang={lang}/>
        <Section2 {...section2Data} lang={lang}/>
        <Section3 {...section3Data} lang={lang}/>
        <ContactSection {...contactSectionData} lang={lang}/>
    </section>
  )
}

export default Entertainment