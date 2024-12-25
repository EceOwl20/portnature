import React, { useState, useEffect } from "react";
import RestaurantMainSection from '../../components/food/RestaurantMainSection'
import ContactSection from '../../components/homepage/ContactSection'

const MainRestaurant = ({page}) => {
  const [mainSectionData, setMainSection] = useState(null);
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

          // mainSectionComponent verilerini çek
          const mainSectionComponent = data.components.find(
            (comp) => comp.type === "MainSection"
          );
  
          if (mainSectionComponent) {
            setMainSection(mainSectionComponent.props);
          } else {
            console.warn("mainSectionComponent data not found");
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
  if (!mainSectionData) return <p>Loading...</p>;

  return (
    <div>
      <RestaurantMainSection {...mainSectionData}/>
      {/* <ContactSection/> */}
    </div>
  )
}

export default MainRestaurant
