import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UnderLine from "../../svg/UnderLine/UnderLine";
import ArrowSvg from "../../svg/ArrowSvg";
import logo from "/header/logo.png";
import MenuBar from "../../svg/MenuBar";
import PhoneSvg from "../../svg/PhoneSvg";
import darklogo from "../../../public/images/homepage/LogoPortDark.png";
import YoutubeSvg from "../../svg/YoutubeSvg";
import FacebookSvg from "../../svg/FacebookSvg";
import InstagramSvg from "../../svg/InstagramSvg";
import WkSvg from "../../svg/WkSvg";
import TrivagoSvg from "../../svg/TrivagoSvg";
import CrossSvg from "../../svg/CrossSvg";
import NewUnderline from "../../svg/NewUnderline";
import { app } from "../../firebase.js";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Cookies from "js-cookie";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [headerImages, setHeaderImages] = useState([]);

  const { language, setLanguage } = useLanguage();

  const options = ["en", "tr", "de", "ru"];
  const [isOpen, setIsOpen] = useState(false);

  // Dışarı tıklanınca menüyü kapatmak için referans
  const dropdownRef = useRef(null);

  // Dışarı tıklama ile kapatma (basit versiyon)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Yeni fonksiyon
  const handleChange = (newLang) => {
    // Dili state'te güncelle
    setLanguage(newLang);
    // Cookie'yi güncelle
    Cookies.set("language", newLang);
    // Sayfayı yenile
    window.location.reload();
    // veya window.location.href = '/'; // istenirse anasayfaya yönlendirme
  };

  useEffect(() => {
    const fetchHeaderImages = async () => {
      const storage = getStorage();
      const storageRef = ref(storage, "images/header");

      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map((item) => getDownloadURL(item))
        );
        setHeaderImages(urls);
      } catch (error) {
        console.error("Error fetching header images:", error);
      }
    };

    fetchHeaderImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  //lang
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    window.location.reload();

    // Eğer dil değiştirdiğinde sayfayı yenilemek istiyorsanız:
    // window.location.reload();

    // Yada anasayfaya yönlendirmek istiyorsanız:
    // window.location.href = "/";
  };

  return (
    <>
      <header
        className={`${
          isSticky
            ? "bg-[#233038]/50 w-full h-[92px] flex items-center justify-center sticky top-0 z-[9999]"
            : "bg-[#233038] w-full h-[92px] flex items-center justify-center sticky top-0 z-[9999]"
        }`}
      >
        <div className="flex items-center justify-between w-[92%] lg:w-[97%]">
          <div className="flex items-center justify-center gap-[14.98px] sm:gap-[30px]">
            <button className="flex lg:hidden" onClick={toggleSidebar}>
              <MenuBar
                width={16}
                height={14}
                className="flex"
                onClick={toggleSidebar}
              />
            </button>
            <Link to="/">
              <img
                src={headerImages[1]}
                alt="Logo"
                width={197.315}
                height={111.838}
                className="hidden xl:flex"
              />
              <img
                src={headerImages[1]}
                alt="Logo"
                width={120.973}
                height={68.762}
                className="flex xl:hidden"
              />
            </Link>
          </div>
          <nav className="text-white hidden lgxl-custom:flex gap-[2%] h-[20px] font-monserrat lg:text-[12px] xl:text-[14px] text-center items-center justify-between w-[72%]">
            <div className="relative group">
              <Link to="/rooms" className="flex items-center">
                ACCOMMODATION
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link to="/family-room" className="block px-4 py-2">
                  Family Room
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link to="/king-suite-room" className="block px-4 py-2">
                  King Suite
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/standard-rooms"
                  className="block px-4 py-2 whitespace-nowrap justify-center"
                >
                  Standard Room
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="/kids-concept" className="flex items-center">
                KIDS CONCEPT
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/accommodation/family-room"
                  className="block px-4 py-2"
                >
                  Mini Club
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link to="/aquapark" className="block px-4 py-2">
                  Aquapark
                  <div className="flex">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>
            <Link>OFFERS 2023</Link>
            <div className="relative group">
              <Link to="/food-drinks" className="flex items-center">
                FOOD & DRINK
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link to="/alacarte-restaurant" className="block px-4 py-2">
                  A'la Carte
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link to="/bars-cafes" className="block px-4 py-2">
                  Bars & Cafes
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link to="/main-restaurant" className="block px-4 py-2">
                  Main Restaurant
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link to="/davidoff-cafe" className="block px-4 py-2">
                  Davidoff Cafe
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/" className="flex items-center">
                ENTERTAINMENT
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/accommodation/family-room"
                  className="block px-4 py-2"
                >
                  Concerts
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Activities
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Beach
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>

            <Link>CONTACTS</Link>
            <div className="relative group">
              <Link to="/" className="flex items-center">
                SPA
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/accommodation/family-room"
                  className="block px-4 py-2"
                >
                  Spa & Wellness
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Indoor Pool
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/" className="flex items-center">
                MEETING & CONGRESS
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/accommodation/family-room"
                  className="block px-4 py-2"
                >
                  Thermessos
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Aspendos
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Perge
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/accommodation/suite-room"
                  className="block px-4 py-2"
                >
                  Olympos
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
              </div>
            </div>
            
          </nav>
          <button className="hidden lgxl-custom:flex bg-white text-[#233038] font-bold w-[10%] h-[50px] text-center justify-center items-center">
            Book Now
          </button>

          <div className="flex  items-center gap-[9px]">
            <div
              className="items-center justify-center relative inline-block"
              ref={dropdownRef}
            >
              {/* Dropdown button */}
              <button
                onClick={handleToggle}
                className="flex flex-row items-center justify-center gap-1 px-4 py-2 bg-inherit text-white rounded uppercase"
              >
                {language}
                <ArrowSvg className="flex" width={9} height={4} />
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <ul className="absolute left-0 mt-1 bg-[#233038] shadow-lg">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleChange(option)}
                      className="uppercase text-white px-4 py-2 hover:bg-white hover:text-[#233038] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`flex fixed top-0 left-0 w-[100%] h-screen z-[9999] bg-[#fff] text-[#233038] transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col w-[100%] pt-[30px] items-center justify-between text-[#233038]">
          <div className="flex flex-row items-center justify-between w-[90%] ">
            <div className="flex gap-4">
              <button onClick={toggleSidebar}>
                {" "}
                <CrossSvg width={24} height={24} className="flex" />
              </button>
              <img
                src={darklogo}
                alt="logo dark"
                width={darklogo.width}
                height={darklogo.height}
              />
            </div>
            <div className="flex gap-4">
              <PhoneSvg
                width={19.889}
                height={19.928}
                color="#233038"
                fill="#233038"
              />
              <div className="flex items-center gap-[9px] justify-center">
                <select
                  id="selectBox"
                  className="bg-[#233038] text-[16px]"
                  value={language} // Seçili dili context'ten alıyoruz
                  onChange={handleLanguageChange}
                >
                  <option value="en">EN</option>
                  <option value="tr">TR</option>
                  <option value="ru">RU</option>
                  <option value="de">DE</option>
                </select>
                {/* <ArrowSvg className="flex" width={9} height={4} /> */}
              </div>
            </div>
          </div>

          <nav className="flex flex-col w-[75%] text-[16px] font-normal leading-normal uppercase font-monserrat text-start gap-[20px]">
            <Link to="/" onClick={toggleSidebar}>
              ACCOMMODATION
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              CHILDREN
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              OFFERS 2023
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              FOOD & DRINK
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              ENTERTAINMENT
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              CONTACTS
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              SPA
            </Link>
            <div className="flex bg-[#DDD] h-[1px] w-full"></div>
            <Link to="/" onClick={toggleSidebar}>
              MEETING & CONGRESS
            </Link>
          </nav>

          <div className="flex w-[80%] items-center justify-between">
            <YoutubeSvg width={34} height={24} color="#233038cc" />
            <FacebookSvg width={34} height={24} color="#233038cc" />
            <InstagramSvg width={34} height={24} color="#233038cc" />
            <WkSvg width={34} height={24} color="#233038cc" />
            <TrivagoSvg width={34} height={24} color="#233038cc" />
          </div>

          <button className="flex w-full text-center py-[28px] items-center justify-center text-[20px] font-monserrat font-bold leading-normal text-[#f8f8f8] bg-[#233038]">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
