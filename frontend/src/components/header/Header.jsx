import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowSvg from "../../svg/ArrowSvg";
import MenuBar from "../../svg/MenuBar";
import PhoneSvg from "../../svg/PhoneSvg";
import YoutubeSvg from "../../svg/YoutubeSvg";
import FacebookSvg from "../../svg/FacebookSvg";
import InstagramSvg from "../../svg/InstagramSvg";
import WkSvg from "../../svg/WkSvg";
import TrivagoSvg from "../../svg/TrivagoSvg";
import CrossSvg from "../../svg/CrossSvg";
import { useLanguage } from "../../context/LanguageContext";
import { IoMdArrowDropright } from "react-icons/io";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [roomsOpen, setRoomsOpen] = useState(false);
  const [kidsOpen, setKidsOpen] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);
  const [entertainmentOpen, setEntertainmentOpen] = useState(false);
  const [spaOpen, setSpaOpen] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);

  const [headerImages, setHeaderImages] = useState([]);

  const { language: lang, setLanguage } = useLanguage(); // useLanguage'den setLanguage'i aldım

  const [headerData, setHeaderData] = useState(null);
  const [error, setError] = useState(null);
  const options = ["en", "tr", "de", "ru"];

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

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

  const handleChange = (newLang) => {
    setLanguage(newLang); // Doğru şekilde dili güncelliyoruz
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/page/layout");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page data");
        }

        const localizedComponents = data.translations[lang];

        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }

        const headerComponent = localizedComponents.find(
          (comp) => comp.type === "Header"
        );

        if (headerComponent) {
          setHeaderData(headerComponent.props);
        } else {
          console.warn("headerComponent data not found");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageData();
  }, [lang]);

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

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang); // Dili doğru şekilde context'ten güncelledik
  };

  if (error) return <p>Error: {error}</p>;
  if (!headerData) return <p>Loading...</p>;

  return (
    <>
      <header
        className={`${
          isSticky
            ? "bg-[#233038]/50 w-screen h-[92px] flex items-center justify-center sticky top-0 z-[9999]"
            : "bg-[#233038] w-screen h-[92px] flex items-center justify-center sticky top-0 z-[9999]"
        }`}
      >
        <div className="flex items-center justify-between w-[92%] lg:w-[97%]">
          <div className="flex items-center justify-center gap-[14.98px] sm:gap-[30px]">
            <button className="flex lgxl-custom:hidden" onClick={toggleSidebar}>
              <MenuBar
                width={16}
                height={14}
                className="flex"
                onClick={toggleSidebar}
              />
            </button>
            <Link to="/">
              <img
                src={headerData?.image.firebaseUrl}
                alt="Logo"
                width={125}
                height={50}
                className="hidden xl:flex"
              />
              <img
                src={headerData?.image.firebaseUrl}
                alt="Logo"
                width={120.973}
                height={68.762}
                className="flex xl:hidden"
              />
            </Link>
          </div>
          <nav className="text-white hidden lgxl-custom:flex gap-[2%] h-[20px] font-monserrat lg:text-[12px] xl:text-[13px] text-center items-center justify-between w-[72%]">
            <div className="relative group">
              <Link to="/rooms" className="flex items-center">
                ROOMS
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
                  to="/miniclub"
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
            <Link to="/offers">OFFERS 2023</Link>
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
              <Link to="/entertainment" className="flex items-center">
                ENTERTAINMENT
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/concert"
                  className="block px-4 py-2"
                >
                  Concerts
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/activities"
                  className="block px-4 py-2"
                >
                  Activities
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/beach"
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

            <Link to="/contacts">CONTACTS</Link>
            <div className="relative group">
              <Link to="/spa-wellness" className="flex items-center">
                SPA
                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/spa-wellness"
                  className="block px-4 py-2"
                >
                  Spa & Wellness
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/indoor-pool"
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
              <Link to="/meeting-congress" className="flex items-center">
                MEETING & CONGRESS
                <svg className=" w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                </svg>
              </Link>

              {/* Alt menü */}
              <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                <Link
                  to="/meeting-congress#thermesos"
                  className="block px-4 py-2"
                >
                  Thermessos
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/meeting-congress#aspendos"
                  className="block px-4 py-2"
                >
                  Aspendos
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/meeting-congress#perge"
                  className="block px-4 py-2"
                >
                  Perge
                  <div className="flex  ">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                </Link>
                <Link
                  to="/meeting-congress#olympos"
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
          <button className="hidden lgxl-custom:flex bg-white text-[#233038] font-bold w-[9%] h-[50px] text-center justify-center items-center">
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
                className="flex flex-row items-center justify-center gap-1 px-0 py-2 bg-inherit text-white rounded uppercase"
              >
                {lang}
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
        className={`flex fixed top-0 left-0 w-[100%] max-w-screen h-screen z-[9999] bg-[#fff] text-[#233038] transition-all duration-300 ease-in-out ${
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
                src={headerData?.image2.firebaseUrl}
                alt="logo dark"
                width={headerData?.image2.width}
                height={headerData?.image2.height}
              />
            </div>
            <div className="flex gap-5">
              <PhoneSvg
                width={19.889}
                height={19.928}
                color="#233038"
                fill="#233038"
              />
              <div className="flex items-center gap-[9px] justify-center ">
                <select
                  id="selectBox"
                  className="text-[#233038] font-medium text-[17px]"
                  value={lang} // Seçili dili context'ten alıyoruz
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

          <nav className="flex flex-col w-[75%] text-[18px] font-normal leading-normal capitalize font-monserrat text-start gap-[18px]">
          <div>
            <Link
            to="/rooms"
              className="w-full text-left flex items-center justify-start gap-2"
              onClick={() => setRoomsOpen(!roomsOpen)}>
              ROOMS
              <IoMdArrowDropright size={20}/>
            </Link>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${roomsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/family-room" onClick={toggleSidebar}>
                  Family Room
                </Link>
                <Link to="/standard-rooms" onClick={toggleSidebar}>
                  Standard Room
                </Link>
                <Link to="/king-suite-room" onClick={toggleSidebar}>
                  King Suite
                </Link>
              </div>
            </div>
          </div>
          <div className="flex bg-[#DDD] h-[1px] w-full "></div>
          <Link to="/children"  className="w-full text-left flex items-center justify-start gap-2" onClick={() => setKidsOpen(!kidsOpen)}>KIDS CONCEPT <IoMdArrowDropright size={20}/></Link>
          <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${kidsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/aquapark" onClick={toggleSidebar}>
                  Aquapark
                </Link>
                <Link to="/miniclub" onClick={toggleSidebar}>
                  Mini Club
                </Link>
              
              </div>
            </div>
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/offers" onClick={toggleSidebar}>OFFERS 2025</Link>
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/food-drink"  className="w-full text-left flex items-center justify-start gap-2" onClick={() => setFoodOpen(!foodOpen)}>FOOD & DRINK <IoMdArrowDropright size={20}/></Link>
          <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${foodOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/alacarte-restaurant" onClick={toggleSidebar}>
                  A'la Carte
                </Link>
                <Link to="/bars-cafes" onClick={toggleSidebar}>
                  Bars & Cafes
                </Link>
                <Link to="/main-restaurant" onClick={toggleSidebar}>
                  Main Restaurant
                </Link>
                <Link to="/davidoff-cafe" onClick={toggleSidebar}>
                  Davidoff Cafe
                </Link>
              
              </div>
            </div>
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/entertainment"  className="w-full text-left flex items-center justify-start gap-2" onClick={() => setEntertainmentOpen(!entertainmentOpen)}>ENTERTAINMENT <IoMdArrowDropright size={20}/></Link>
          <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${entertainmentOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/concert" onClick={toggleSidebar}>
                  Concert
                </Link>
                <Link to="/activities" onClick={toggleSidebar}>
                 Activities
                </Link>
                <Link to="/beach" onClick={toggleSidebar}>
                  Beach
                </Link>
                
              
              </div>
            </div>
          
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/contacts" onClick={toggleSidebar}>CONTACTS</Link>
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/spa-wellness" className="w-full text-left flex items-center justify-start gap-2" onClick={() => setSpaOpen(!spaOpen)}>SPA <IoMdArrowDropright size={20}/></Link>
          <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${spaOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/spa-wellness" onClick={toggleSidebar}>
                  Spa & Wellness
                </Link>
                <Link to="/indoor-pool" onClick={toggleSidebar}>
                 Indoor Pool
                </Link>
              
              </div>
            </div>
          <div className="flex bg-[#DDD] h-[1px] w-full"></div>
          <Link to="/meeting-congress"  className="w-full text-left flex items-center justify-start gap-2" onClick={() => setMeetingOpen(!meetingOpen)}>MEETING & CONGRESS  <IoMdArrowDropright size={20}/></Link>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${meetingOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col pl-4 gap-[10px] text-[16px]">
                <Link to="/meeting-congress/thermesos" onClick={toggleSidebar}>
                  Thermesos
                </Link>
                <Link to="meeting-congress/aspendos" onClick={toggleSidebar}>
                 Aspendos
                </Link>
                <Link to="meeting-congress/perge" onClick={toggleSidebar}>
                  Perge
                </Link>
                <Link to="meeting-congress/olympos" onClick={toggleSidebar}>
                  Olympos
                </Link>
              
              </div>
            </div>
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
