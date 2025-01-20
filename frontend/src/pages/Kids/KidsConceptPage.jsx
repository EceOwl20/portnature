import React from "react";
import MainBackgroundRooms from "../Accommodation/components/MainBackgroundRooms";
import mainImg from "../../../public/images/children/kidsconcept.png";
import InfoIconSection from "../../components/InfoIconSection";
import BorderCarousel from "../../components/BorderCarousel";
import BorderCarousel2 from "../../components/BorderCarousel2";
import KidsBannerSection from "../../components/kids/KidsBannerSection";
import ContactSection from "../../components/homepage/ContactSection";

const images = [mainImg, mainImg, mainImg];

const KidsConceptPage = ({ items }) => {
  return (
    <div>
      {/* <MainBackgroundRooms img={mainImg} header="KIDS CONCEPT" /> */}
      <InfoIconSection
        items={items}
        text="Port Nature kids' concept hotel is a family-friendly establishment specifically for children's needs and interests.
We provide play areas, children's menus, and organized activities."
      />
      <BorderCarousel />
      <BorderCarousel2 />
      <KidsBannerSection />
      {/* <ContactSection/>  */}
    </div>
  );
};

export default KidsConceptPage;
