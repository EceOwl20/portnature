import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

const Activities = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchPageData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/page/activities");
  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw new Error(data.message || "Failed to fetch page data");
  //       }

  //           // Contact verilerini çek
  //           const contactSectionComponent = data.components.find(
  //             (comp) => comp.type === "ContactSection"
  //           );
    
  //           if (contactSectionComponent) {
  //             setContactSectionData(contactSectionComponent.props);
  //           } else {
  //             console.warn("Contact data not found in homepage");
  //           }

  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchPageData();
  // }, []);

  // if (error) return <p>Error: {error}</p>;
  // if ( !contactSectionData) return <p>Loading...</p>;

  return (
    <section>
        <Section1 />
        <Section2 />
        <Section3 />  
    </section>
  )
}

export default Activities