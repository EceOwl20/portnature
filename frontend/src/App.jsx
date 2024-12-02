import React from "react";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/header/Footer";
import BookPhoneSection from "./components/BookPhoneSection";
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
import familyroom1 from "../public/images/rooms/familyroom1.png"
import familyroom2 from "../public/images/rooms/familyroom2.png"
import familyroom3 from "../public/images/rooms/familyroom3.png"
import PersonSvg from "./svg/room/PersonSvg"
import SingleBedSvg from './svg/SingleBedSvg'
import BedSvg from './svg/BedSvg'
import AreaSvg from './svg/room/AreaSvg'
import SeaViewSvg from './svg/SeaViewSvg'

const familyImages = [familyroom1, familyroom2, familyroom3];

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
            <Route path="/rooms" element={<Rooms/>}/>
            <Route path="/family-room" element={<SubRooms img={familyroomBanner} images={familyImages} header="Family Rooms" text="A luxurious holiday with your loved ones is waiting for you in Family Rooms,designed in the comfort of your own home" items={FamilyItems}/>}/>
            <Route path="/panel" element={<Panel />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit-ol" element={<Register />} />
            <Route path="/panel" element={<Panel />} />
           </Routes>
          </main>
          <BookPhoneSection/>
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
