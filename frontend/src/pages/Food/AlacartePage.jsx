import React, { useState, useEffect } from "react";
import AlaCarteMain from '../../components/food/AlaCarteMain'
import FindRestaurantSection from '../../components/food/FindRestaurantSection'
import ContactSection from '../../components/homepage/ContactSection'

const AlacartePage = () => {
  const [alacarteMainData, setAlacarteMainData] = useState(null);
  const [findRestaurantSectionData, setFindRestaurantSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/alacarte");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // AlaCarteMain verilerini çek
        const alacarteMainComponent = data.components.find(
          (comp) => comp.type === "AlaCarteMain"
        );

        if (alacarteMainComponent) {
          setAlacarteMainData(alacarteMainComponent.props);
        } else {
          console.warn("AlaCarteMain data not found");
        }

        // FindRestaurantSection verilerini çek
        const findRestaurantComponent = data.components.find(
          (comp) => comp.type === "FindRestaurantSection"
        );

        if (findRestaurantComponent) {
          setFindRestaurantSectionData(findRestaurantComponent.props);
        } else {
          console.warn("FindRestaurantSection data not found");
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
  if (!alacarteMainData && !findRestaurantSectionData && !contactSectionData) return <p>Loading...</p>;

  return (
    <div >
      <AlaCarteMain {...alacarteMainData}/>
      <FindRestaurantSection {...findRestaurantSectionData}/>
      {/* <ContactSection/> */}
    </div>
  )
}

export default AlacartePage
