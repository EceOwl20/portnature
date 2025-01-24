import React, { useState, useEffect } from "react";
import MainBackgroundRooms from "../Accommodation/components/MainBackgroundRooms";
import InfoIconSection from "../../components/InfoIconSection";
import BorderCarousel from "../../components/BorderCarousel";
import BorderCarousel2 from "../../components/BorderCarousel2";
import KidsBannerSection from "../../components/kids/KidsBannerSection";
import ContactSection from "../../components/homepage/ContactSection";
import { useLanguage } from "../../context/LanguageContext";

const KidsConceptPage = () => {
  const { language: lang } = useLanguage(); 
  const [mainBackgroundData, setMainBackgroundData] = useState(null);
  const [infoIconSectionData, setInfoIconSectionData] = useState(null);
  const [borderCarouselData, setBorderCarouselData] = useState(null);
  const [borderCarousel2Data, setBorderCarousel2Data] = useState(null);
  const [bannerSectionData, setBannerSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/kidsconcept");
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
        const mainBackgroundComponent = localizedComponents.find(
          (comp) => comp.type === "MainBackground"
        );
  
        if (mainBackgroundComponent) {
          setMainBackgroundData(mainBackgroundComponent.props);
        } else {
          console.warn("mainBackgroundComponent data not found");
        }
  
        // infoIconComponent verilerini çek
        const infoIconComponent = localizedComponents.find(
          (comp) => comp.type === "InfoIconSection"
        );
  
        if (infoIconComponent) {
          setInfoIconSectionData(infoIconComponent.props);
        } else {
          console.warn("infoIconComponent data not found");
        }
  
        // borderCarouselComponent verilerini çek
        const borderCarouselComponent = localizedComponents.find(
          (comp) => comp.type === "BorderCarousel"
        );
  
        if (borderCarouselComponent) {
          setBorderCarouselData(borderCarouselComponent.props);
        } else {
          console.warn("borderCarouselComponent data not found");
        }
  
         // borderCarousel2Component verilerini çek
         const borderCarousel2Component = localizedComponents.find(
          (comp) => comp.type === "BorderCarousel2"
        );
  
        if (borderCarousel2Component) {
          setBorderCarousel2Data(borderCarousel2Component.props);
        } else {
          console.warn("borderCarousel2Component data not found");
        }

          // banner verilerini çek
          const kidsBannerComponent = localizedComponents.find(
            (comp) => comp.type === "KidsBannerSection"
          );
    
          if (kidsBannerComponent) {
            setBannerSectionData(kidsBannerComponent.props);
          } else {
            console.warn("kidsBannerComponent data not found");
          }
  
        // ContactSection verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found");
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchPageData();
  }, [lang]); // Dil değiştiğinde useEffect yeniden çalışır
  

  if (error) return <p>Error: {error}</p>;
  if (!mainBackgroundData && !infoIconSectionData && !borderCarouselData && !borderCarousel2Data && !bannerSectionData && !contactSectionData) return <p>Loading...</p>;

  return (
    <div>
      <MainBackgroundRooms {...mainBackgroundData} />

      <InfoIconSection
        {...infoIconSectionData}
      />

      <BorderCarousel {...borderCarouselData}/>
      <BorderCarousel2 {...borderCarousel2Data}/>
      <KidsBannerSection {...bannerSectionData}/>
      <ContactSection {...contactSectionData}/> 

    </div>
  );
};

export default KidsConceptPage;
