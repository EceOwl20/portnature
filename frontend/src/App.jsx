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
