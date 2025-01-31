import React from "react";
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
import "./App.css"
import Rooms from "./pages/Accommodation/Rooms";
import SubRooms from "./pages/Accommodation/SubRooms";

import StandardRooms from "./pages/Accommodation/StandardRooms";
import BlogEkle from "./pages/PanelPages/BlogEkle";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";

import FoodDrinkPage from "./pages/Food/FoodDrinkPage";
import AlacartePage from "./pages/Food/AlacartePage";

import BlogListele from "./pages/PanelPages/BlogListele";
import CoffeePage from "./pages/Food/CoffeePage";
import CoffeeBarsMainPage from "./components/food/CoffeeBarsMainPage";
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

import Gallery from "./pages/PanelPages/Gallery";
import EditImage from "./pages/PanelPages/EditImage";
import MiniAlaCarte from "./pages/Kids/MiniAlaCarte";
import MiniClub from "./pages/Kids/MiniClub";

import DynamicPage from "./pages/PanelPages/DynamicPage";
import EditDynamicPage from "./pages/PanelPages/EditDynamicPage";
import EditPage from "./pages/PanelPages/EditPage";
import PageDetails from "./pages/PanelPages/PageDetails";
import PageList from "./pages/PanelPages/PageList";
import EditComponent from "./pages/PanelPages/EditComponent";
import Beach from "./pages/Beach/Beach";
import { LanguageProvider } from "./context/LanguageContext";
import Offers from "./pages/Offers/Offers";
import Entertainment from "./pages/Entertainment/Entertainment";
import Activities from "./pages/Activities/Activities";
import Users from "./pages/PanelPages/Users";
import ProfilEditor from "./pages/PanelPages/ProfilEditor";
import ContactSection from "./components/homepage/ContactSection";
import SpaPage from "./pages/Spa/SpaPage";
import IndoorpoolPage from "./pages/Indoorpool/IndoorpoolPage";
import MeetingPage from "./pages/Meeting/MeetingPage";
import ContactPage from "./pages/Contact/ContactPage";
import ConcertPage from "./pages/Concert/ConcertPage";
import CookiePopup from "./components/CookiePopup";
// import ThreeVisualizerPage from "./pages/ThreeVisualizerPage";

const App = () => {
 const { activeUser } = useSelector((state) => state.user);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
       <LanguageProvider>
       {activeUser ? (
            <HeaderDgtl />
          ) : (
            <>
              <Header />
            </>
          )}
          <main>
          {/* <ScrollToTop /> */}
           <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/three" element={<ThreeVisualizerPage />} /> */}
            <Route path="/rooms" element={<Rooms />}/>
            <Route path="/family-room" element={<SubRooms page="familyroom"/>}/>
            <Route path="/king-suite-room" element={<SubRooms page="kingsuiteroom"/>}/>
            <Route path="/standard-rooms" element={<StandardRooms />}/>
            <Route path="/standard-sea-view-room" element={<SubRooms page="standardseaview"/>}/>
            <Route path="/standard-side-view-room" element={<SubRooms page="standardsideview"/>}/>
            <Route path="/standard-land-view-room" element={<SubRooms page="standardlandview"/>}/>
            <Route path="/food-drinks" element={<FoodDrinkPage />}/>
            <Route path="/davidoff-cafe" element={<CoffeePage  page="davidoffcafe" />}/>
            <Route path="/kit-kat-cafe" element={<CoffeePage  page="kitkatcafe" />}/>
            <Route path="/script-chivas-lounge" element={<CoffeePage  page="chivas"/>}/>
            <Route path="/born9-hennessy-lounge" element={<CoffeePage  page="hennessy"/>}/>
            <Route path="/nespresso-cafe" element={<CoffeePage  page="nespresso"/>}/>
            <Route path="/pastahouse" element={<CoffeePage  page="pastahouse"/>}/>
            <Route path="/bars-cafes" element={<CoffeeBarsMainPage />}/>
            <Route path="/alacarte-restaurant" element={<AlacartePage/>}/>
            
            <Route path="/main-restaurant" element={<MainRestaurant page="mainrestaurant"/>}/>
            <Route path="/all-day-dining-alacarte-restaurant" element={<MainRestaurant page="allDayDining"/>}/>
            <Route path="/far-east-alacarte-restaurant" element={<MainRestaurant page="farEastAlacarte"/>}/>
            <Route path="/french-alacarte-restaurant" element={<MainRestaurant page="frenchalacarte"/>}/>
            <Route path="/mini-club-alacarte-restaurant" element={<MainRestaurant page="minialacarte"/>}/>
            <Route path="/seaside-alacarte-restaurant" element={<MainRestaurant page="seasidealacarte"/>}/>

            <Route path="/irish-pub" element={<PubBarPage page="irishpub"/>}/>
            <Route path="/lobby-bar" element={<PubBarPage page="lobbybar"/>}/>
            <Route path="/flamingo-bar" element={<PubBarPage page="flamingobar"/>}/>

            <Route path="/kids-concept" element={<KidsConceptPage/>}/>
            <Route path="/aquapark" element={<AquaPark />}/>
            {/* <Route path='/minialacarte' element={<MiniAlaCarte/>}/> */}
            <Route path='/miniclub' element={<MiniClub/>}/>
            <Route path='/beach' element={<Beach/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/entertainment" element={<Entertainment/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/contacts" element={<ContactPage/>}/>
            <Route path="/spa-wellness" element={<SpaPage/>}/>
            <Route path="/indoor-pool" element={<IndoorpoolPage/>}/>
            <Route path="/meeting-congress" element={<MeetingPage/>}/>
            <Route path="/concert" element={<ConcertPage/>}/>

            <Route path="/panel" element={<Panel />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit-ol" element={<Register />} />
            <Route path="/panel" element={<Panel />}>
                {/* <Route path="/panel/dashboard" element={<Dashboard />} /> */}
               
                <Route path="/panel/upload-image" element={<UploadImage />} />
                <Route path="/panel/search-image" element={<SearchImage />} />
                <Route path="/panel/gallery" element={<Gallery />} />

                <Route path="/panel/users" element={<Users />}></Route>
                <Route path="users/:id" element={<ProfilEditor />} />

                <Route path="/panel/bloglar" element={<BlogListele />} />
                <Route path="/panel/blog/guncelle/:slug" element={<BlogDüzenle />} />
                <Route path="/panel/yeniblogekle" element={<BlogEkle />} />
                <Route path="/panel/edit/:page" element={<EditDynamicPage />} />
                
                <Route path="/panel/pages" element={<PageList />} />
                <Route path="/panel/pages/:pageName/:language" element={<PageDetails />} />
                <Route path="/panel/pages/:pageName/translations/:language/components/:componentIndex" element={<EditComponent />} />


            </Route>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<EditImage />} />
        
           </Routes>
          </main>
          <BookPhoneSection/>
          <div className="flex items-center w-screen justify-center mb-4">
          <ScrollToTopButton/>
          </div>
          <CookiePopup/>
          <Footer/>
       </LanguageProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>

          
  );
};

export default App;
