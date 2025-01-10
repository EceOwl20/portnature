import React, { useState, useEffect } from "react";
import FoodCarousel from "../../components/food/FoodCarousel";
import FoodMenu from "../../components/food/FoodMenu";
import LogoSection from "../../components/LogoSection";
import ContactSection from "../../components/homepage/ContactSection";
import FindRestaurantSection from "../../components/food/FindRestaurantSection";
import RestaurantSection from "../../components/food/RestaurantSection";
import AllRestaurantSection from "../../pages/Food/AllRestaurantSection"
import Cookies from "js-cookie";

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

  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/page/fooddrinks"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        // FoodCarousel verilerini çek
        const foodCarouselComponent = data.components.find(
          (comp) => comp.type === "FoodCarousel"
        );

        if (foodCarouselComponent) {
          setFoodCarouselData(foodCarouselComponent.props);
        } else {
          console.warn("FoodCarousel data not found");
        }

        // FoodMenu verilerini çek
        const foodMenuComponent = data.components.find(
          (comp) => comp.type === "FoodMenu"
        );

        if (foodMenuComponent) {
          setFoodMenuData(foodMenuComponent.props);
        } else {
          console.warn("FoodMenu data not found");
        }

        // LogoSection verilerini çek
        const logoSectionComponent = data.components.find(
          (comp) => comp.type === "LogoSection"
        );

        if (logoSectionComponent) {
          setLogoSectionData(logoSectionComponent.props);
        } else {
          console.warn("LogoSection data not found");
        }

        // RestaurantSection verilerini çek
        const restaurantSectionComponent = data.components.find(
          (comp) => comp.type === "RestaurantSection"
        );

        if (restaurantSectionComponent) {
          setRestaurantSectionData(restaurantSectionComponent.props);
        } else {
          console.warn("RestaurantSection data not found");
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
      <FoodCarousel {...foodCarouselData} lang={lang}/>
      <FoodMenu {...foodMenuData} lang={lang}/>
       <LogoSection {...logoSectionData} lang={lang}/>
      <AllRestaurantSection {...restaurantSectionData} lang={lang}/>
      {/* <FindRestaurantSection findRestaurants={findRestaurants} /> */}
      {/* <ContactSection/> */}
    </div>
  );
};

export default FoodDrinkPage;
