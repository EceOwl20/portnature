import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactSection from '../../components/homepage/ContactSection'

const ContactPage = () => {
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
  if (!contactSectionData) return <p>Loading...</p>;

  return (
    <div>
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default ContactPage
