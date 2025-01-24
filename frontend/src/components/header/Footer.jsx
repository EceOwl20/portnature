import React, { useState, useEffect } from "react";
import YoutubeSvg from '../../svg/YoutubeSvg'
import FacebookSvg from '../../svg/FacebookSvg'
import InstagramSvg from '../../svg/InstagramSvg'
import WkSvg from '../../svg/WkSvg'
import TrivagoSvg from '../../svg/TrivagoSvg'
import Location2Svg from '../../svg/Location2Svg'
import WhatsappSvg from '../../svg/WhatsappSvg'
import FooterLineSvg from '../../svg/FooterLineSvg'
import { useLanguage } from "../../context/LanguageContext";
import FooterData from "./FooterData";

const Footer = () => {
  const { language: lang } = useLanguage(); // Cookie yerine context'i kullan

  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/layout");
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }
  
        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }
  
       
        const footerComponent = localizedComponents.find(
          (comp) => comp.type === "Footer"
        );
  
        if (footerComponent) {
          setFooterData(footerComponent.props);
        } else {
          console.warn("footerComponent data not found");
        }
  
        
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchPageData();
  }, [lang]); // Dil değiştiğinde useEffect yeniden çalışır
  

  if (!footerData) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
   <div>
    <FooterData {...footerData}/>
   </div>
  )
}

export default Footer