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
