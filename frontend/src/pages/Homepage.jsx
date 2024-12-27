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
import followus1 from "../../public/images/homepage/follow1.png"
import followus2 from "../../public/images/homepage/follow2.png"
import followus3 from "../../public/images/homepage/follow3.png"
import followus4 from "../../public/images/homepage/follow4.png"
import followus5 from "../../public/images/homepage/follow5.png"
import followus6 from "../../public/images/homepage/follow6.png"
import followus7 from "../../public/images/homepage/follow7.png"
import instagramImg from "../../public/images/homepage/newinsta.png"
import BarLoungeCarousel from '../components/homepage/BarLoungeCarousel'
import AlacarteSection from '../components/homepage/AlacarteSection'
import SpecialOffersCarousel from '../components/homepage/SpecialOffersCarousel'
import MultipleImages from '../components/Image/MultipleImages'
// import InstagramSection from "../components/homepage/InstagramSection"
import Cookies from "js-cookie";

const Homepage = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [barLoungeData, setBarLoungeData] = useState(null);
  const [iconSectionData, setIconSectionData] = useState(null);
  const [allInclusiveData, setAllInclusiveDataData] = useState(null);
  const [holidayImageSectionData, setHolidayImageSectionData] = useState(null);
  const [childrenSectionData, setChildrenSectionData] = useState(null);
  const [backgroundSectionData, setBackgroundSectionData] = useState(null);
  const [alacarteSectionData, setAlacarteSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/homepage");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // Carousel verilerini çek
        const carouselComponent = data.components.find(
          (comp) => comp.type === "Carousel"
        );

        if (carouselComponent) {
          setCarouselData(carouselComponent.props);
        } else {
          console.warn("Carousel data not found in homepage");
        }

        // BarLoungeCarousel verilerini çek
        const barLoungeComponent = data.components.find(
          (comp) => comp.type === "BarLoungeCarousel"
        );

        if (barLoungeComponent) {
          setBarLoungeData(barLoungeComponent.props);
        } else {
          console.warn("BarLoungeCarousel data not found in homepage");
        }

         // Icon verilerini çek
         const iconSectionComponent = data.components.find(
          (comp) => comp.type === "HomeIconSection"
        );

        if (iconSectionComponent) {
          setIconSectionData(iconSectionComponent.props);
        } else {
          console.warn("iconSection data not found in homepage");
        }

         // AllIncllusive verilerini çek
         const allInclusiveComponent = data.components.find(
          (comp) => comp.type === "AllInclusive"
        );

        if (allInclusiveComponent) {
          setAllInclusiveDataData(allInclusiveComponent.props);
        } else {
          console.warn("allInclusive data not found in homepage");
        }


         // HolidayImageSection verilerini çek
         const holidayImageSectionComponent = data.components.find(
          (comp) => comp.type === "HolidayImageSection"
        );

        if (holidayImageSectionComponent) {
          setHolidayImageSectionData(holidayImageSectionComponent.props);
        } else {
          console.warn("HolidayImageSection data not found in homepage");
        }

         // ChildrenSection verilerini çek
         const childrenSectionComponent = data.components.find(
          (comp) => comp.type === "ChildrenSection"
        );

        if (childrenSectionComponent) {
          setChildrenSectionData(childrenSectionComponent.props);
        } else {
          console.warn("ChildrenSection data not found in homepage");
        }

          // BackgroundSection verilerini çek
          const backgroundSectionComponent = data.components.find(
            (comp) => comp.type === "ImageBackgroundSection"
          );
  
          if (backgroundSectionComponent) {
            setBackgroundSectionData(backgroundSectionComponent.props);
          } else {
            console.warn("BackgroundSection data not found in homepage");
          }

          // Alacarte verilerini çek
          const alacarteSectionComponent = data.components.find(
            (comp) => comp.type === "AlacarteSection"
          );
  
          if (alacarteSectionComponent) {
            setAlacarteSectionData(alacarteSectionComponent.props);
          } else {
            console.warn("Alacarte data not found in homepage");
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
  if (!carouselData && !barLoungeData && !iconSectionData && !allInclusiveData && !childrenSectionData && !backgroundSectionData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <HomeCarousel images={images}/> */}
      <HomeCarousel {...carouselData} lang={lang}/>
      <Reservation/>
      <HomeIconSection {...iconSectionData} lang={lang}/>
      <div className='flex w-screen mt-20'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <AllInclusive {...allInclusiveData} lang={lang}/>
      <HolidayImageSection  {...holidayImageSectionData} lang={lang}/>
      <Accommodation/>
      <ChildrenSection {...childrenSectionData} lang={lang}/>
      <ImageBackgroundSection {...backgroundSectionData} lang={lang}/>
      <SpecialOffersCarousel/>
      <AlacarteSection {...alacarteSectionData} lang={lang}/>
       <BarLoungeCarousel {...barLoungeData} lang={lang}/>
      <ContactSection {...contactSectionData} lang={lang}/>
      {/* <InstagramSection images={instagramImages}/> */}
      <img src={instagramImg} alt='instagram' width={323.06149} height={630.77972} className='flex md:hidden  '/>
    </div>
  )
}

export default Homepage
