import React, { useState, useEffect }  from "react";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/header/Footer";
import BlogDüzenle from "./pages/PanelPages/BlogDüzenle";
import BookPhoneSection from "./components/BookPhoneSection";
import ScrollToTopButton from "./components/ScrollToTopButton"
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
import AlacartePage from "./pages/Food/AlacartePage";
import food1 from "/images/food1.png"
import barcafes from "/images/barcafes.png"
import logo from "/images/hennessy.png"
import farEast from "/images/FarEastRestaurant 1.png"

import BlogListele from "./pages/PanelPages/BlogListele";
import EastFoodSvg from "./svg/food/EastFoodSvg"
import CupcakeSvg from "./svg/food/CupcakeSvg"
import CoffeePage from "./pages/Food/CoffeePage";
import CoffeeBarsMainPage from "./components/food/CoffeeBarsMainPage";
import alacarte from "../public/images/food/alacarte.png"
import ScrollToTop from "./components/ScrollToTop";
import MainRestaurant from "./pages/Food/MainRestaurant";

import PubBarPage from "./pages/Food/PubBarPage";
import KidsConceptPage from "./pages/Kids/KidsConceptPage";
import AquaparkSvg from "./svg/AquaparkSvg";
import ConcertSvg from "./svg/ConcertSvg";
import SpecialSvg from "./svg/kids/SpecialSvg";
import TedyBearSvg from "./svg/kids/TedyBearSvg";
import SpoonForkSvg from "./svg/kids/SpoonForkSvg";

import GaleriPage from "./pages/PanelPages/GaleriPage";
import UploadImage from "./pages/PanelPages/UploadImage";
import SearchImage from "./pages/PanelPages/SearchImage";
import AquaPark from "./pages/aquapark/AquaPark";
import davidoffImg from "/images/davidoffMain2.png";
import davidoffLogo from "/images/food/Davidoff_logo.png"
import davidoffsubimg from "/images/food/davidoff2.png"
import DavidoffSvg from "./svg/food/DavidoffSvg"
import Gallery from "./pages/PanelPages/Gallery";

const davidoffCarousel = [davidoffImg, davidoffImg, davidoffImg, davidoffImg,davidoffImg,davidoffImg];
const davidoffCaroTexts=[" Pleasure in a thing of beauty is the","essence of a happy life","ZINO DAVIDOFF"]
const davidoffLogoText="Ищете роскошное кафе, чтобы расслабиться? Смело заходите в Davidoff. Приходите в гости насладиться идеальным сочетанием комфорта, уюта и изысканности в сочетании с уютным ароматом кофейных зерн"
const davidoffSubHeader="Your zest for life sums up the essence of Davidoff brand. It is what makes DAVIDOFF unique.";
const davidoffSubTexts=["Memorable tastes are waiting for you in our restaurants, where the most special flavors of the world cuisine are offered and enriched with different themes and in our bars, where 148 kinds of Premium drinks are offered.","Memorable tastes are waiting for you in our restaurants, where the most special flavors of the world cuisine are offered and enriched with"];

const restaurants = [
  {
    header: "A'LA CARTE",
    text: "Welcoming atmosphere with a cozy our A'la Cartes are the perfect spot to catch up with friends and delicious food.",
    span:"Enjoy your holiday Enjoy your holiday",
    link: "/ala-carte",
    image: alacarte, 
   
  },
  {
    header: "A'LA CARTE",
    text: "Welcoming atmosphere with a cozy our A'la Cartes are the perfect spot to catch up with friends and delicious food.",
    span:"Enjoy your holiday Enjoy your holiday",
    link: "/ala-carte",
    image: alacarte, 
  },
];

const findRestaurants = [
  {
    header: "FAR EAST A'LA CARTE",
    text: "We always offer the freshest. This is the secret of our taste. The freshest was chosen for you.",
    link: "/far-east",
    image: farEast, 
    icon: { Icon: EastFoodSvg, width: 31, height: 29, color: "red-500" },
    time:"",
    kidsFriendly:false,
    ageLimit:"+18"
  },
  {
    header: "FAR EAST A'LA CARTE",
    text: "We always offer the freshest. This is the secret of our taste. The freshest was chosen for you.",
    link: "/cupcake",
    image: farEast, 
    icon: { Icon: CupcakeSvg, width: 31, height: 29, color: "blue-500" },
    time:"",
    kidsFriendly:false,
    ageLimit:"+18"
  },
];

const filterfindRestaurants = [
  {
    header: "FAR EAST A'LA CARTE",
    text: "We always offer the freshest. This is the secret of our taste. The freshest was chosen for you.",
    link: "/far-east",
    image: farEast, 
    icon: { Icon: EastFoodSvg, width: 31, height: 29, color: "red-500" },
    time:"7/24",
    kidsFriendly:"true",
    ageLimit:"7"
  },
  {
    header: "Davidoff Cafe",
    text: "We always offer the freshest. This is the secret of our taste. The freshest was chosen for you.",
    link: "/davidoff-cafe",
    image: farEast, 
    icon: { Icon: CupcakeSvg, width: 31, height: 29, color: "blue-500" },
    time:"",
    kidsFriendly:"false",
    ageLimit:"+18"
  },
];

const restaurantIcons = [
  { Icon: EastFoodSvg, width: 31, height: 29, color: "red-500" },
  { Icon: CupcakeSvg, width: 31, height: 29, color: "blue-500" },
];

const findRestaurantHeaders=["FAR EAST A'LA CARTE","FAR EAST A'LA CARTE"]
const findRestaurantTexts=["We always offer the freshest. This is the secret of our taste. The freshest was chosen for you.","We always offer the freshest. This is the secret of our taste. The freshest was chosen for you."]
const findRestaurantLinks = ["/","/"]

const foodFindCardImages=[farEast,farEast];

const FoodLogoImages=[logo,logo,logo,logo,logo]

const FoodCarouselImages=[food1, food1,food1, food1,food1, food1];
const FoodMenuImages=[barcafes, barcafes,barcafes];
const FoodMenuLinks=["", "", ""];

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

const KidsConceptItems = [
  {
    SvgComponent: SpoonForkSvg,
    svgProps: { width: 37, height: 41 },
    text: "MINI A'LA CARTE",
  },
  {
    SvgComponent: TedyBearSvg,
    svgProps: { width: 39, height: 35, color: "#CFCFCF" },
    text: 'BABYSITTING',
  },
  {
    SvgComponent: AquaparkSvg,
    svgProps: { width: 44, height: 45, color: "#CFCFCF" },
    text: 'AQUAPARK',
  },
  {
    SvgComponent: ConcertSvg,
    svgProps: { width: 33, height: 46 },
    text: 'MINI DISCO',
  },
  {
    SvgComponent: SpecialSvg,
    svgProps: { width: 40, height: 37, color: "#CFCFCF" },
    text: 'SPECIAL COURSES',
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
          <ScrollToTop />
           <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms img={allrooms} header="Feel every advantage of our rooms" links={allroomslinks} linkstext={allroomslinkstexts} images1={roomsFamilyImg} images2={roomsKingImg} images3={roomsStandardImg} text1={familyText} text2={kingText} text3={standardText}/>}/>
            <Route path="/family-room" element={<SubRooms img={familyroomBanner} images={familyImages} header="Family Rooms" text="A luxurious holiday with your loved ones is waiting for you in Family Rooms,designed in the comfort of your own home" items={FamilyItems} planImg={familyroomPlan}/>}/>
            <Route path="/king-suite-room" element={<SubRooms img={kingsuiteBanner} images={kingsuiteImages} header="King Suite Rooms" text="A luxurious holiday with your loved ones is waiting for you in Family Rooms,designed in the comfort of your own home" items={FamilyItems} planImg={kingPlan}/>}/>
            <Route path="/standard-rooms" element={<StandardRooms img={standardBanner} header="Standard Rooms" links={allStandardroomslinks} linkstext={allStandardroomslinkstexts} />}/>
            {/* links={allStandardroomslinks} linkstext={allStandardroomslinkstext} images1={roomsFamilyImg} images2={roomsKingImg} images3={roomsStandardImg} text1={familyText} text2={kingText} text3={standardText} */}
            <Route path="/food-drinks" element={<FoodDrinkPage carouselImg={FoodCarouselImages} menuImg={FoodMenuImages} menuLinks={FoodMenuLinks} logoImages={FoodLogoImages} findRestaurants={findRestaurants} restaurants={restaurants}/>}/>
            <Route path="/davidoff-cafe" element={<CoffeePage carouselImg={davidoffCarousel} logo={davidoffLogo} logoText={davidoffLogoText} carouselTexts={davidoffCaroTexts} subheader={davidoffSubHeader} subTexts={davidoffSubTexts} image={davidoffsubimg} children={<DavidoffSvg width={436} height={387} className="absolute top-10 left-[45%] z-1"/>} />}/>
            <Route path="/bars-cafes" element={<CoffeeBarsMainPage filterfindRestaurants={filterfindRestaurants}/>}/>
            <Route path="/alacarte-restaurant" element={<AlacartePage findRestaurants={findRestaurants}/>}/>
            <Route path="/main-restaurant" element={<MainRestaurant/>}/>
            <Route path="/irish-pub" element={<PubBarPage/>}/>
            <Route path="/kids-concept" element={<KidsConceptPage items={KidsConceptItems}/>}/>
            <Route path="/aquapark" element={<AquaPark />}/>
            <Route path="/panel" element={<Panel />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit-ol" element={<Register />} />
            <Route path="/panel" element={<Panel />}>
                <Route path="/panel/dashboard" element={<Dashboard />} />
                <Route path="/panel/galeri" element={<GaleriPage />} />
                <Route path="/panel/upload-image" element={<UploadImage />} />
                <Route path="/panel/search-image" element={<SearchImage />} />
                <Route path="/panel/gallery" element={<Gallery />} />
                <Route path="/panel/bloglar" element={<BlogListele />} />
                <Route path="/panel/blog/guncelle/:id" element={<BlogDüzenle />} />
                <Route path="/panel/yeniblogekle" element={<BlogEkle />} />
            </Route>
            <Route path="/bloglar" element={<BlogPage />} />
            <Route path="/blog/:lang/:slug" element={<BlogDetails />} />
           </Routes>
          </main>
          <BookPhoneSection/>
          <ScrollToTopButton/>
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
