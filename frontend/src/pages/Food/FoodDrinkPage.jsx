import React, { useState, useEffect } from "react";
import FoodCarousel from "../../components/food/FoodCarousel";
import FoodMenu from "../../components/food/FoodMenu";
import LogoSection from "../../components/LogoSection";
import ContactSection from "../../components/homepage/ContactSection";
import AllRestaurantSection from "../../pages/Food/AllRestaurantSection"
import { useLanguage } from "../../../src/context/LanguageContext";

const FoodDrinkPage = ({
  carouselImg,
  menuImg,
  menuLinks,
  logoImages,
  findRestaurants,
  restaurants,
}) => {
  const [foodCarouselData, setFoodCarouselData] = useState(null);
  const [foodMenuData, setFoodMenuData] = useState(null);
  const [logoSectionData, setLogoSectionData] = useState(null);
  const [restaurantSectionData, setRestaurantSectionData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  const { language: lang } = useLanguage(); 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          "/api/page/fooddrinks"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }

        // FoodCarousel verilerini çek
        const foodCarouselComponent = localizedComponents.find(
          (comp) => comp.type === "FoodCarousel"
        );

        if (foodCarouselComponent) {
          setFoodCarouselData(foodCarouselComponent.props);
        } else {
          console.warn("FoodCarousel data not found");
        }

        // FoodMenu verilerini çek
        const foodMenuComponent = localizedComponents.find(
          (comp) => comp.type === "FoodMenu"
        );

        if (foodMenuComponent) {
          setFoodMenuData(foodMenuComponent.props);
        } else {
          console.warn("FoodMenu data not found");
        }

        // LogoSection verilerini çek
        const logoSectionComponent = localizedComponents.find(
          (comp) => comp.type === "LogoSection"
        );

        if (logoSectionComponent) {
          setLogoSectionData(logoSectionComponent.props);
        } else {
          console.warn("LogoSection data not found");
        }

        // RestaurantSection verilerini çek
        const restaurantSectionComponent = localizedComponents.find(
          (comp) => comp.type === "RestaurantSection"
        );

        if (restaurantSectionComponent) {
          setRestaurantSectionData(restaurantSectionComponent.props);
        } else {
          console.warn("RestaurantSection data not found");
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
  if (
    !foodCarouselData &&
    !foodMenuData &&
    !logoSectionData &&
    !restaurantSectionData &&
    !contactSectionData
  )
    return <p>Loading...</p>;

   
  return (
    <div>
      <FoodCarousel {...foodCarouselData} />
      <FoodMenu {...foodMenuData} />
       <LogoSection {...logoSectionData} />
      <AllRestaurantSection {...restaurantSectionData} />
      {/* <FindRestaurantSection findRestaurants={findRestaurants} /> */}
      <ContactSection {...contactSectionData}/>
    </div>
  );
};

export default FoodDrinkPage;
