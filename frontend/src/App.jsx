import React, { useState, useEffect }  from "react";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/header/Footer";
import BookPhoneSection from "./components/BookPhoneSection";
import ScrollToTop from "./components/ScrollToTop"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import ChildrenSection from "./components/homepage/ChildrenSection";
import Login from "./pages/Login";
import HeaderDgtl from "./components/header/HeaderDgtl";
import Register from "./pages/Register";
import Panel from "./pages/PanelPages/Panel";
import HomeCarousel from "./components/homepage/HomeCarousel";
import img1 from "../public/images/PortCover1.png"
import img2 from "../public/images/PortCover31.png"
import img3 from "../public/images/PortCover41.png"
import Reservation from "./components/homepage/Reservation";
import HomeIconSection from "./components/homepage/HomeIconSection";
import "./App.css"
import Rooms from "./pages/Accommodation/Rooms";
import SubRooms from "./pages/Accommodation/SubRooms";
import familyroomBanner from "../public/images/rooms/familyroom-banner.png"
import kingsuiteBanner from "../public/images/rooms/kingsuite-banner.png"
import familyroom1 from "../public/images/rooms/familyroom1.png"
import familyroom2 from "../public/images/rooms/familyroom2.png"
import familyroom3 from "../public/images/rooms/familyroom3.png"
import kingsuite1 from "../public/images/rooms/kingsuite1.png"
import kingsuite2 from "../public/images/rooms/kingsuite2.png"
import kingsuite3 from "../public/images/rooms/kingsuite3.png"
import familyroomPlan from "../public/images/rooms/familyroomPlan.png"
import kingPlan from "../public/images/rooms/kingPlan.png"
import PersonSvg from "./svg/room/PersonSvg"
import SingleBedSvg from './svg/SingleBedSvg'
import BedSvg from './svg/BedSvg'
import AreaSvg from './svg/room/AreaSvg'
import SeaViewSvg from './svg/SeaViewSvg'

import allrooms from "../public/images/rooms/Photo-All-Rooms.png"
import roomsfamily from "../public/images/rooms/familyroom-1.png"
import roomskingsuite from "../public/images/rooms/kingSuite-1.png"
import roomsstandardroom from "../public/images/rooms/standardRoom-1.png"
import standardBanner from "../public/images/rooms/standardroom-banner.png"
import StandardRoomComponent from "./pages/Accommodation/components/StandardRoomComponent";
import StandardRooms from "./pages/Accommodation/StandardRooms";

const allStandardroomslinks=["/standard-side-view","/standard-sea-view","/standard-land-view"];
const allStandardroomslinkstexts=["Side Sea View","Sea View","Land View"];

const allroomslinks=["/family-room","/king-suite-room","/standard-rooms"];
const allroomslinkstexts=["Family Room","King Suite Room","Standard Room"];
const roomsFamilyImg = [roomsfamily, roomsfamily, roomsfamily];
const roomsKingImg = [roomskingsuite, roomskingsuite, roomskingsuite];
const roomsStandardImg = [roomsstandardroom, roomsstandardroom, roomsstandardroom];

import Dashboard from "./pages/PanelPages/Dashboard";
import BlogEkle from "./pages/PanelPages/BlogEkle";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import FoodDrinkPage from "./pages/Food/FoodDrinkPage";


const familyImages = [familyroom1, familyroom2, familyroom3];
const kingsuiteImages = [kingsuite1, kingsuite2, kingsuite3];

const familyText=["FAMILY ROOM","A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home","2","2","45m2","Corner Sea View",];
const kingText=["KING SUITE","A luxurious holiday with your loved ones is waiting for you in Family Rooms, designed in the comfort of your own home","1","2","110m2","Sea View",];
const standardText=["STANDARD ROOM","You will find the unique harmony of modern architecture in comfortable and spacious rooms decorated in pastel colors","1","1","35m2","Side View/Sea View/Land View ",];

const FamilyItems = [
  {
    SvgComponent: PersonSvg,
    svgProps: { width: 53, height: 35 },
    text: '4 Adults + 1',
  },
  {
    SvgComponent: SingleBedSvg,
    svgProps: { width: 26, height: 44, color: "#CFCFCF" },
    text: '2 Single Beds',
  },
  {
    SvgComponent: BedSvg,
    svgProps: { width: 43, height: 47, color: "#CFCFCF" },
    text: '1 Double Bed',
  },
  {
    SvgComponent: AreaSvg,
    svgProps: { width: 41, height: 41 },
    text: '45 m2',
  },
  {
    SvgComponent: SeaViewSvg,
    svgProps: { width: 40, height: 28, color: "#CFCFCF" },
    text: 'Corner Sea View',
  },
];

const App = () => {
 const { activeUser } = useSelector((state) => state.user);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
        {activeUser ? (
            <HeaderDgtl />
          ) : (
            <>
              <Header />
            </>
          )}
          <main>
           <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms img={allrooms} header="Feel every advantage of our rooms" links={allroomslinks} linkstext={allroomslinkstexts} images1={roomsFamilyImg} images2={roomsKingImg} images3={roomsStandardImg} text1={familyText} text2={kingText} text3={standardText}/>}/>
            <Route path="/family-room" element={<SubRooms img={familyroomBanner} images={familyImages} header="Family Rooms" text="A luxurious holiday with your loved ones is waiting for you in Family Rooms,designed in the comfort of your own home" items={FamilyItems} planImg={familyroomPlan}/>}/>
            <Route path="/king-suite-room" element={<SubRooms img={kingsuiteBanner} images={kingsuiteImages} header="King Suite Rooms" text="A luxurious holiday with your loved ones is waiting for you in Family Rooms,designed in the comfort of your own home" items={FamilyItems} planImg={kingPlan}/>}/>
            <Route path="/standard-rooms" element={<StandardRooms img={standardBanner} header="Standard Rooms" links={allStandardroomslinks} linkstext={allStandardroomslinkstexts} />}/>
            {/* links={allStandardroomslinks} linkstext={allStandardroomslinkstext} images1={roomsFamilyImg} images2={roomsKingImg} images3={roomsStandardImg} text1={familyText} text2={kingText} text3={standardText} */}
            <Route path="/food-drinks" element={<FoodDrinkPage/>}/>
            <Route path="/panel" element={<Panel />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit-ol" element={<Register />} />
            <Route path="/panel" element={<Panel />}>
                <Route path="/panel/dashboard" element={<Dashboard />} />
                <Route path="/panel/yeniblogekle" element={<BlogEkle />} />
            </Route>
            <Route path="/bloglar" element={<BlogPage />} />
            <Route path="/blog/:url" element={<BlogDetails />} /> 
           </Routes>
          </main>
          <BookPhoneSection/>
          <ScrollToTop/>
          <Footer/>
        </BrowserRouter>
      </HelmetProvider>
    </>
    
        //  <main>
        //   <Header/>
        //     <Homepage />
        //     <BookPhoneSection/>
        //     <Footer/>
        //   </main>
          
  );
};

export default App;
