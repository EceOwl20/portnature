import React, { useState, useEffect } from "react";
import AlaCarteMain from '../../components/food/AlaCarteMain'
import FindRestaurantSection from '../../components/food/FindRestaurantSection'
import ContactSection from '../../components/homepage/ContactSection'
import { useLanguage } from "../../../src/context/LanguageContext";

const AlacartePage = () => {
  const [alacarteMainData, setAlacarteMainData] = useState(null);
  const [findRestaurantSectionData, setFindRestaurantSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/alacarte");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

         // Dil bazında transactions verisini al
         const localizedComponents = data.translations[lang];
  
         if (!localizedComponents) {
           throw new Error(`No translations found for language: ${lang}`);
         }

        // AlaCarteMain verilerini çek
        const alacarteMainComponent = localizedComponents.find(
          (comp) => comp.type === "AlaCarteMain"
        );

        if (alacarteMainComponent) {
          setAlacarteMainData(alacarteMainComponent.props);
        } else {
          console.warn("AlaCarteMain data not found");
        }

        // FindRestaurantSection verilerini çek
        const findRestaurantComponent = localizedComponents.find(
          (comp) => comp.type === "FindRestaurantSection"
        );

        if (findRestaurantComponent) {
          setFindRestaurantSectionData(findRestaurantComponent.props);
        } else {
          console.warn("FindRestaurantSection data not found");
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
  if (!alacarteMainData && !findRestaurantSectionData && !contactSectionData) return <p>Loading...</p>;

  return (
    <div >
      <AlaCarteMain {...alacarteMainData} />
      <FindRestaurantSection {...findRestaurantSectionData} />
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default AlacartePage
