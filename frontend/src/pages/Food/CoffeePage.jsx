import React, { useState, useEffect } from "react";
import DavidoffCarousel from '../../components/food/DavidoffCarousel'
import ContactSection from "../../components/homepage/ContactSection"
import CoffeeTextSection from '../../components/food/CoffeeTextSection'

const CoffeePage = ({page}) => {
  const [cafeCarouselData, setCafeCarouselData] = useState(null);
  const [cafeTextSectionData, setCafeTextSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/page/${page}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // Carousel verilerini çek
        const cafeCarouselComponent = data.components.find(
          (comp) => comp.type === "CafeCarousel"
        );

        if (cafeCarouselComponent) {
          setCafeCarouselData(cafeCarouselComponent.props);
        } else {
          console.warn("CafeCarousel data not found");
        }

        // BarLoungeCarousel verilerini çek
        const cafeTextSectionComponent = data.components.find(
          (comp) => comp.type === "CafeTextSection"
        );

        if (cafeTextSectionComponent) {
          setCafeTextSectionData(cafeTextSectionComponent.props);
        } else {
          console.warn("CafeTextSection data not found");
        }

            // Contact verilerini çek
            const contactSectionComponent = data.components.find(
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

  return (
    <div>
      <DavidoffCarousel {...cafeCarouselData}/>
       <CoffeeTextSection {...cafeTextSectionData}/>
      {/*<ContactSection/> */}
    </div>
  )
}

export default CoffeePage
