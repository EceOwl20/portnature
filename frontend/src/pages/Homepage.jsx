import React, { useState, useEffect } from "react";
import HomeCarousel from '../components/homepage/HomeCarousel'
import Reservation from '../components/homepage/Reservation'
import HomeIconSection from '../components/homepage/HomeIconSection'
import AllInclusive from '../components/homepage/AllInclusive'
import HolidayImageSection from '../components/homepage/HolidayImageSection'
import Accommodation from '../components/homepage/Accommodation'
import ChildrenSection from '../components/homepage/ChildrenSection'
import ImageBackgroundSection from '../components/homepage/ImageBackgroundSection'
import ContactSection from '../components/homepage/ContactSection'
import BarLoungeCarousel from '../components/homepage/BarLoungeCarousel'
import AlacarteSection from '../components/homepage/AlacarteSection'
import SpecialOffersCarousel from '../components/homepage/SpecialOffersCarousel'
// import InstagramSection from "../components/homepage/InstagramSection"
import Cookies from "js-cookie";
import { useLanguage } from "../context/LanguageContext";
import { InstagramSection } from "../components/homepage/InstagramSection";

const Homepage = () => {
  const { language: lang } = useLanguage(); // Cookie yerine context'i kullan
  const [carouselData, setCarouselData] = useState(null);
  const [barLoungeData, setBarLoungeData] = useState(null);
  const [iconSectionData, setIconSectionData] = useState(null);
  const [allInclusiveData, setAllInclusiveDataData] = useState(null);
  const [holidayImageSectionData, setHolidayImageSectionData] = useState(null);
  const [childrenSectionData, setChildrenSectionData] = useState(null);
  const [backgroundSectionData, setBackgroundSectionData] = useState(null);
  const [alacarteSectionData, setAlacarteSectionData] = useState(null);
  const [accommodationData, setAccommodationData] = useState(null);
  const [specialoffersData, setSpecialoffersData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [instagramData, setInstagramData] = useState(null);
  const [error, setError] = useState(null);

  //const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/homepage");
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
        const carouselComponent = localizedComponents.find(
          (comp) => comp.type === "Carousel"
        );
  
        if (carouselComponent) {
          setCarouselData(carouselComponent.props);
        } else {
          console.warn("Carousel data not found in homepage");
        }
  
        // BarLoungeCarousel verilerini çek
        const barLoungeComponent = localizedComponents.find(
          (comp) => comp.type === "BarLoungeCarousel"
        );
  
        if (barLoungeComponent) {
          setBarLoungeData(barLoungeComponent.props);
        } else {
          console.warn("BarLoungeCarousel data not found in homepage");
        }
  
        // IconSection verilerini çek
        const iconSectionComponent = localizedComponents.find(
          (comp) => comp.type === "HomeIconSection"
        );
  
        if (iconSectionComponent) {
          setIconSectionData(iconSectionComponent.props);
        } else {
          console.warn("IconSection data not found in homepage");
        }
  
        // AllInclusive verilerini çek
        const allInclusiveComponent = localizedComponents.find(
          (comp) => comp.type === "AllInclusive"
        );
  
        if (allInclusiveComponent) {
          setAllInclusiveDataData(allInclusiveComponent.props);
        } else {
          console.warn("AllInclusive data not found in homepage");
        }
  
        // HolidayImageSection verilerini çek
        const holidayImageSectionComponent = localizedComponents.find(
          (comp) => comp.type === "HolidayImageSection"
        );
  
        if (holidayImageSectionComponent) {
          setHolidayImageSectionData(holidayImageSectionComponent.props);
        } else {
          console.warn("HolidayImageSection data not found in homepage");
        }
  
        // ChildrenSection verilerini çek
        const childrenSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ChildrenSection"
        );
  
        if (childrenSectionComponent) {
          setChildrenSectionData(childrenSectionComponent.props);
        } else {
          console.warn("ChildrenSection data not found in homepage");
        }
  
        // BackgroundSection verilerini çek
        const backgroundSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ImageBackgroundSection"
        );
  
        if (backgroundSectionComponent) {
          setBackgroundSectionData(backgroundSectionComponent.props);
        } else {
          console.warn("BackgroundSection data not found in homepage");
        }
  
        // Alacarte verilerini çek
        const alacarteSectionComponent = localizedComponents.find(
          (comp) => comp.type === "AlacarteSection"
        );
  
        if (alacarteSectionComponent) {
          setAlacarteSectionData(alacarteSectionComponent.props);
        } else {
          console.warn("AlacarteSection data not found in homepage");
        }

         // Accommodation verilerini çek
         const accommodationComponent = localizedComponents.find(
          (comp) => comp.type === "AccommodationSection"
        );
  
        if (accommodationComponent) {
          setAccommodationData(accommodationComponent.props);
        } else {
          console.warn("accommodationComponent data not found in homepage");
        }
        
        // specialoffersComponent verilerini çek
        const specialoffersComponent = localizedComponents.find(
          (comp) => comp.type === "SpecialOffersSection"
        );
  
        if (specialoffersComponent) {
          setSpecialoffersData(specialoffersComponent.props);
        } else {
          console.warn("specialoffersComponent data not found in homepage");
        }

         // instagram verilerini çek
         const instagramComponent = localizedComponents.find(
          (comp) => comp.type === "InstagramSection"
        );
  
        if (instagramComponent) {
          setInstagramData(instagramComponent.props);
        } else {
          console.warn("instagramComponent data not found in homepage");
        }
  
        // ContactSection verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found in homepage");
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchPageData();
  }, [lang]); // Dil değiştiğinde useEffect yeniden çalışır
  

  if (error) return <p>Error: {error}</p>;
  if (!carouselData && !barLoungeData && !iconSectionData && !allInclusiveData && !childrenSectionData && !backgroundSectionData && !accommodationData && !specialoffersData && !instagramData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col items-center justify-center'>
      <HomeCarousel {...carouselData} />
      <Reservation/>
      <HomeIconSection {...iconSectionData} />
      <div className='flex w-screen mt-20'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <AllInclusive {...allInclusiveData} />
      <HolidayImageSection  {...holidayImageSectionData} />
      <Accommodation {...accommodationData}/>
      <ChildrenSection {...childrenSectionData} />
      <ImageBackgroundSection {...backgroundSectionData} />
      <SpecialOffersCarousel {...specialoffersData}/>
      <AlacarteSection {...alacarteSectionData} />
       <BarLoungeCarousel {...barLoungeData} />
      <ContactSection {...contactSectionData} />
      <InstagramSection {...instagramData}/>
     
    </div>
  )
}

export default Homepage
