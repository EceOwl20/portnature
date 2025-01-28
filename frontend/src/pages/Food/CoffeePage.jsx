import React, { useState, useEffect } from "react";
import DavidoffCarousel from '../../components/food/DavidoffCarousel'
import ContactSection from "../../components/homepage/ContactSection"
import CoffeeTextSection from '../../components/food/CoffeeTextSection'
import { useLanguage } from "../../../src/context/LanguageContext";

const CoffeePage = ({page}) => {
  const [cafeCarouselData, setCafeCarouselData] = useState(null);
  const [cafeTextSectionData, setCafeTextSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/page/${page}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }


        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }

        // Carousel verilerini çek
        const cafeCarouselComponent = localizedComponents.find(
          (comp) => comp.type === "CafeCarousel"
        );

        if (cafeCarouselComponent) {
          setCafeCarouselData(cafeCarouselComponent.props);
        } else {
          console.warn("CafeCarousel data not found");
        }

        // BarLoungeCarousel verilerini çek
        const cafeTextSectionComponent = localizedComponents.find(
          (comp) => comp.type === "CoffeeTextSection"
        );

        if (cafeTextSectionComponent) {
          setCafeTextSectionData(cafeTextSectionComponent.props);
        } else {
          console.warn("CafeTextSection data not found");
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
  if (!cafeCarouselData && !cafeTextSectionData && !contactSectionData ) return <p>Loading...</p>;
  const OPTIONS = { loop: true }
  return (
    <div>
      <DavidoffCarousel options={OPTIONS} {...cafeCarouselData} />
       <CoffeeTextSection {...cafeTextSectionData} />
      <ContactSection {...contactSectionData}/>
    </div>
  )
}

export default CoffeePage
