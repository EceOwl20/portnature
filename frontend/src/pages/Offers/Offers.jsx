import React, { useState, useEffect } from "react";
import Section1 from './Components/Section1'
import BookingOpportunities from './Components/BookingOpportunities'
import OffersContact from './Components/OffersContact'
import PlanYourTrip from './Components/PlanYourTrip'
import LogoCarousel from './Components/LogoCarousel'
import BookTransfer from './Components/BookTransfer'
import ReviewCarousel from './Components/ReviewCarousel'
import BookOpportunities2 from './Components/BookOpportunities2'
import { useLanguage } from "../../context/LanguageContext";

const Offers = () => {
  const { language: lang } = useLanguage();
  const [section1Data, setSection1Data] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [offersContactData, setOffersContactData] = useState(null);
  const [planTripData, setPlanTripData] = useState(null);
  const [logocarouselData, setLogocarouselData] = useState(null);
  const [bookTransferData, setBookTransferData] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/offers");
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }
  
        // Dil bazında transactions verisini al
        const localizedComponents = data.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }
  
        // setSection1Data verilerini çek
        const section1Components = localizedComponents.find(
          (comp) => comp.type === "Section1"
        );
  
        if (section1Components) {
          setSection1Data(section1Components.props);
        } else {
          console.warn("section1Components data not found");
        }
  
        // setBookingData verilerini çek
        const bookingComponent = localizedComponents.find(
          (comp) => comp.type === "BookingOpportunities"
        );
  
        if (bookingComponent) {
          setBookingData(bookingComponent.props);
        } else {
          console.warn("bookingComponent data not found");
        }
  
        // setOffersContactData verilerini çek
        const offersComponents = localizedComponents.find(
          (comp) => comp.type === "OffersContact"
        );
  
        if (offersComponents) {
          setOffersContactData(offersComponents.props);
        } else {
          console.warn("offersComponents data not found ");
        }
  
        // setPlanTripData verilerini çek
        const plantripComponent = localizedComponents.find(
          (comp) => comp.type === "PlanYourTrip"
        );
  
        if (plantripComponent) {
          setPlanTripData(plantripComponent.props);
        } else {
          console.warn("plantripComponent data not found in homepage");
        }
  
        // setLogocarouselData verilerini çek
        const logocarouselComponent = localizedComponents.find(
          (comp) => comp.type === "LogoSection"
        );
  
        if (logocarouselComponent) {
          setLogocarouselData(logocarouselComponent.props);
        } else {
          console.warn("logocarouselComponent data not found ");
        }
  
        // setBookTransferData verilerini çek
        const booktransferComponent = localizedComponents.find(
          (comp) => comp.type === "BookTransfer"
        );
  
        if (booktransferComponent) {
          setBookTransferData(booktransferComponent.props);
        } else {
          console.warn("setBookTransferData data not found ");
        }
  
        // BackgroundSection verilerini çek
        const reviewComponent = localizedComponents.find(
          (comp) => comp.type === "ReviewCarousel"
        );
  
        if (reviewComponent) {
          setReviewData(reviewComponent.props);
        } else {
          console.warn("reviewComponent data not found in homepage");
        }
  
        // Alacarte verilerini çek
        const bookComponent = localizedComponents.find(
          (comp) => comp.type === "BookingOpportunities2"
        );
  
        if (bookComponent) {
          setBookData(bookComponent.props);
        } else {
          console.warn("bookComponent data not found ");
        }
  
        // ContactSection verilerini çek
        const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found ");
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchPageData();
  }, [lang]); 
  

  if (error) return <p>Error: {error}</p>;
  if (!section1Data && !bookingData && !offersContactData && !planTripData && !logocarouselData && !bookTransferData && !reviewData && !bookData) return <p>Loading...</p>;

  return (
    <section>
        <Section1 {...section1Data}/>
        <BookingOpportunities {...bookingData}/>
        <OffersContact  {...offersContactData}/>
        <PlanYourTrip  {...planTripData}/>
        <LogoCarousel  {...logocarouselData}/>
        <BookTransfer  {...bookTransferData}/>
        <ReviewCarousel  {...reviewData}/>
        <BookOpportunities2 {...bookData}/>
        
    </section>
  )
}

export default Offers