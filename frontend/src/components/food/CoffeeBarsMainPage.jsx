import React, { useState, useEffect } from "react";
import FilterFindCafe from './FilterFindCafe'
import ContactSection from '../homepage/ContactSection'
import CafeBarsMainSection from "./CafeBarsMainSection";
import { useLanguage } from "../../../src/context/LanguageContext";

const CoffeeBarsMainPage = () => {
  const [cafesbarsMainSection, setCafesbarsMainSection] = useState(null);
  const [filterCafeSection, setFilterCafeSection] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/cafesbarspage`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }

        
        // FilterCafeSection verilerini çek
        const filterCafeSectionComponent = localizedComponents.find(
          (comp) => comp.type === "FilterCafeSection"
        );

        if (filterCafeSectionComponent) {
          setFilterCafeSection(filterCafeSectionComponent.props);
        } else {
          console.warn("filterCafeSectionComponent data not found");
        }

        // FilterCafeSection verilerini çek
        const cafesbarsMainSectionComponent = localizedComponents.find(
          (comp) => comp.type === "MainSection"
        );

        if (cafesbarsMainSectionComponent) {
          setCafesbarsMainSection(cafesbarsMainSectionComponent.props);
        } else {
          console.warn("cafesbarsMainSectionComponent data not found");
        }

            // Contact verilerini çek
            const contactSectionComponent = localizedComponents.find(
              (comp) => comp.type === "ContactSection"
            );
    
            if (contactSectionComponent) {
              setContactSectionData(contactSectionComponent.props);
            } else {
              console.warn("Contact data not found");
            }

      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!cafesbarsMainSection && !filterCafeSection && !contactSectionData ) return <p>Loading...</p>;

  return (
    <div className='flex flex-col w-screen h-auto items-center justify-center '>
      <CafeBarsMainSection {...cafesbarsMainSection} />
      <FilterFindCafe {...filterCafeSection} />
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default CoffeeBarsMainPage
