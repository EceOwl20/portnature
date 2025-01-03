import React, { useState, useEffect } from "react";
import MiniClubSlider from './components/MiniClubSlider'
import MınıClubSection1 from './components/MınıClubSection1';
import MiniClubSection2 from './components/MiniClubSection2';
import ContactSection from '../../components/homepage/ContactSection';
import SpecialOffers from '../../components/SpecialOffers';
import Cookies from "js-cookie";

const MiniClub = () => {
  const [miniClubSliderData, setMiniClubSliderData] = useState(null);
  const [miniClubSection2Data, setMiniClubSection2Data] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/page/miniclub`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

          // miniClubSliderData verilerini çek
          const miniClubSliderComponent = data.components.find(
            (comp) => comp.type === "MiniClubSlider"
          );
  
          if (miniClubSliderComponent) {
            setMiniClubSliderData(miniClubSliderComponent.props);
          } else {
            console.warn("miniClubSliderComponent data not found");
          }

           // miniClubSection2Data verilerini çek
           const miniClubSection2Component = data.components.find(
            (comp) => comp.type === "MiniClubSection2"
          );
  
          if (miniClubSection2Component) {
            setMiniClubSection2Data(miniClubSection2Component.props);
          } else {
            console.warn("miniClubSection2Component data not found");
          }

            // Contact verilerini çek
            const contactSectionComponent = data.components.find(
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
  if (!miniClubSliderData && !contactSectionData && !miniClubSection2Data) return <p>Loading...</p>;

  const slides = [
    '../../../public/images/miniclub/miniclub1.png',
    '../../../public/images/miniclub/miniclub2.png',
    '../../../public/images/miniclub/miniclub1.png',
    '../../../public/images/miniclub/miniclub2.png',
    '../../../public/images/miniclub/miniclub1.png',
  ];
  

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section>
        <MiniClubSlider slides={slides} options={OPTIONS} {...miniClubSliderData}/>
        {/* <MınıClubSection1 /> */}
        <MiniClubSection2 />
        {/* <ContactSection/> */}
        <SpecialOffers/>
    </section>
  )
}

export default MiniClub