import React, { useState, useEffect } from "react";
import img1 from "../../public/images/PortCover1.png"
import img2 from "../../public/images/PortCover31.png"
import img3 from "../../public/images/PortCover41.png"
import HomeCarousel from '../components/homepage/HomeCarousel'
import Reservation from '../components/homepage/Reservation'
import HomeIconSection from '../components/homepage/HomeIconSection'
import AllInclusive from '../components/homepage/AllInclusive'
import SubCarousel from '../components/homepage/SubCarousel'
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
import barImage from "../../public/images/homepage/IrishPub.png"
import bathImage from "../../public/images/homepage/TurkishBath2.png"
import meetnImage from "../../public/images/homepage/IrishPub2.png"
import davidoffImage from "../../public/images/homepage/davidoff.png"
import chivas from "../../public/images/homepage/chivas.png"
import bath from "../../public/images/homepage/TurkishBath3.png"
import meeting from "../../public/images/homepage/meeting-restaurant.png"
import davidoff from "../../public/images/homepage/davidoff2.png"
import AlacarteSection from '../components/homepage/AlacarteSection'
import SpecialOffersCarousel from '../components/homepage/SpecialOffersCarousel'
import BorderCarousel from '../components/BorderCarousel'
import BorderCarousel2 from '../components/BorderCarousel2'
import MultipleImages from '../components/Image/MultipleImages'
// import InstagramSection from "../components/homepage/InstagramSection"

const images =[img1,img2,img3];
const instagramImages=[followus1,followus2,followus3,followus4,followus5,followus6,followus7];
const barImages =[barImage,bathImage,meetnImage,davidoffImage]; 
const subImages =[chivas,bath,meeting,davidoff]; 
const headersBar=["Premium Bar & Lounge","Magic Spa","Meetings and congress","Serenty of Davidoff Cafe"];
const textsBar=["The new destination for a privileged holiday in Belek,Antalya where you are always special","We have created a magical spa center so that our guests can feel themselves in the clouds of bliss","Together with a professional team, waiting for you to carry out all your special and unforgettable events","No reservation required. A’La Carte Srevice or Take Away"];
const linksBar=["/","/","/","/"]

const homeCarouselImages = ["portnaturehotel","portnaturehotel2","portnaturehotel3"];

const Homepage = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [barLoungeData, setBarLoungeData] = useState(null);
  const [iconSectionData, setIconSectionData] = useState(null);
  const [error, setError] = useState(null);

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
          console.warn("Carousel data not found in homepage");
        }

      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!carouselData && !barLoungeData && !iconSectionData) return <p>Loading...</p>;

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <HomeCarousel images={images}/> */}
      <HomeCarousel {...carouselData} />
      <Reservation/>
      <HomeIconSection {...iconSectionData}/>
      <div className='flex w-screen mt-20'>
      <div className="bg-custom-gradient h-[1px] w-[50%]">
      </div>
      <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
      </div>
      </div>
      <AllInclusive/>
      <HolidayImageSection/>
      <Accommodation/>
      <ChildrenSection/>
      <ImageBackgroundSection/>
      <SpecialOffersCarousel/>
      <AlacarteSection/>
       <BarLoungeCarousel {...barLoungeData} />
      <ContactSection/>
      <BorderCarousel/>
      <BorderCarousel2/>
      {/* <InstagramSection images={instagramImages}/> */}
      <img src={instagramImg} alt='instagram' width={323.06149} height={630.77972} className='flex md:hidden  '/>
    </div>
  )
}

export default Homepage
