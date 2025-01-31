import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown } from "react-icons/bs";
import RoomsCarousel from "./RoomsCarousel";

const PlanYourTrip = ({image,header,text,span,button,images=[],restaurantItems=[]}) => {
  // ROOM STATE
  const [selectRoom, setSelectRoom] = useState(null);
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);

  // DATES, GUESTS, vb.
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuests, setShowGuests] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [guestInfo, setGuestInfo] = useState({});

  // Konuk bilgilerini her değişiklikte güncelle
  useEffect(() => {
    setGuestInfo({
      selectRoom,
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  }, [selectRoom, checkInDate, checkOutDate, adults, children]);

  // Konsola yaz
  useEffect(() => {
    console.log("Guest Information:", guestInfo);
  }, [guestInfo]);

  // ROOM DROPDOWN TOGGLE
  const toggleRoomDropdown = () => {
    setShowRoomDropdown((prev) => !prev);
  };

  // Oda seçimi
  const handleSelectRoom = (roomType) => {
    setSelectRoom(roomType);
    setShowRoomDropdown(false); // Seçim yapılınca dropdown kapansın
  };

  // Adult
  const toggleGuestsDropdown = () => {
    setShowGuests((prev) => !prev);
  };

    // Child
    const toggleChildDropdown = () => {
      setShowChild((prev) => !prev);
    };

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 0 && setAdults(adults - 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  // EMBLA
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center",  slidesToScroll: 1,},
    [Autoplay({ delay: 3000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col md:flex-row w-screen items-start justify-center min-h-screen">
      <div className="flex flex-col w-[100%] md:w-[55%] lg::w-[45%] items-center justify-center text-center gap-[45px]">
        {/* LEFT SIDE */}
        <div className="flex flex-col w-[100%] lg:w-1/2 xl:w-[80%] bg-[#243039] py-10 lg:pt-[84px] lg:pb-[51px] lg:min-h-[627px] text-white justify-center items-center text-center">
          <h3 className="text-[25px] lg:text-[35px] font-normal uppercase font-lora leading-[50px]">
            {header}
          </h3>
          <span className="text-[16px] lg:text-[20px] font-monserrat font-bold leading-[30px]">
            {text}
          </span>

          {/* Embla carousel logos */}
          <div className="flex w-full bg-white items-center justify-center py-[23px] mt-[28px] ">
            <div className="overflow-hidden relative flex w-full " ref={emblaRef}>
              <div className="flex grid-flow-col items-center justify-center">
                {images.map((image, index) => (
                  <div
                    className="flex-[0_0_auto] items-center justify-center w-[calc(33%-1.2rem)] mx-[0.6rem] relative"
                    key={index}
                  >
                    <img
                      src={image.firebaseurl}
                      style={{ objectFit: "contain" }}
                      width={118}
                      height={34}
                      alt=""
                      className="cursor-pointer"
                       loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="flex w-[90%] flex-col items-center justify-center gap-[20px] mt-10 lg:mt-[93px] z-10 text-[14px]">

            {/* SELECT ROOM */}
            <div className="relative w-full">
              <button
                onClick={toggleRoomDropdown}
                className="flex px-[3vw] py-[1.2vh] w-full text-[#CFCFCF] focus:outline-none relative border-[0.7px] border-[#CFCFCF] text-start items-center justify-between"
              >
                {selectRoom || "Select Room"}
                <BsChevronDown className="flex" width={22.742} height={23.281}/>
              </button>
              {showRoomDropdown && (
                <div className="absolute top-full z-50 left-0 mt-2 bg-transparent border border-gray-300 text-customGray bg-white text-[14px] font-semibold rounded-lg shadow-lg w-full min-w-[180px] p-3 xl:p-4 ">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleSelectRoom("Family")}
                      className="text-left hover:bg-gray-200 px-2 py-1"
                    >
                      Family
                    </button>
                    <button
                      onClick={() => handleSelectRoom("King Suits")}
                      className="text-left hover:bg-gray-200 px-2 py-1"
                    >
                      King Suits
                    </button>
                    <button
                      onClick={() => handleSelectRoom("Standard")}
                      className="text-left hover:bg-gray-200 px-2 py-1"
                    >
                      Standard
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CHECK-IN / CHECK-OUT */}
            <div className="flex w-full gap-[2%]">
              {/* Check-In Input */}
              <div className="relative w-[49%] border-[0.7px] border-[#CFCFCF] items-center justify-center">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Check In"
                  className="w-full py-[1.2vh] min-h-[30px] flex text-[#CFCFCF] focus:outline-none items-center justify-center text-center placeholder:text-[#CFCFCF] bg-transparent"
                  popperPlacement="bottom-start"
                  calendarClassName="custom-calendar"
                  dayClassName={(date) =>
                    "custom-day hover:bg-blue-100 focus:outline-none"
                  }
                />
              </div>

              {/* Check-Out Input */}
              <div className="relative flex  w-[49%] border-[0.7px] border-[#CFCFCF] items-center justify-center">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Check Out"
                  className="w-full py-[1.2vh] flex text-[#CFCFCF] focus:outline-none items-center justify-center placeholder:text-[#CFCFCF] bg-transparent text-center"
                  popperPlacement="bottom-start"
                  calendarClassName="custom-calendar"
                  dayClassName={(date) =>
                    "custom-day hover:bg-blue-100 focus:outline-none"
                  }
                />
              </div>
            </div>

            {/* ADULT(S) / CHILD(REN) */}
            <div className="flex w-full gap-[2%]">
              {/* Adults */}
              <div className="relative w-[49%]">
                <button
                  onClick={toggleGuestsDropdown}
                  className="px-[3vw] py-[1.2vh] w-full text-[#CFCFCF] focus:outline-none relative border-[0.7px] border-[#CFCFCF] text-center items-center justify-center "
                >
                  Adult(s)
                </button>
                {showGuests && (
                  <div className="absolute top-full left-0 mt-2 bg-transparent border border-gray-300 text-customGray bg-white text-[14px] font-semibold rounded-lg shadow-lg w-full min-w-[180px] p-3 xl:p-4 ">
                    <div className="flex justify-between items-center mb-3 ">
                      <span className="text-customGray">Adult(s)</span>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <button
                          onClick={decrementAdults}
                          className="w-5 h-5 xl:w-6 xl:h-6 border border-[#CFCFCF] rounded-full flex items-center justify-center font-medium"
                        >
                          -
                        </button>
                        <span>{adults}</span>
                        <button
                          onClick={incrementAdults}
                          className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center font-medium"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Children */}
              <div className="relative w-[49%]">
                <button
                  onClick={toggleChildDropdown}
                  className="px-[3vw] py-[1.2vh] w-full text-[#CFCFCF] focus:outline-none relative border-[0.7px] border-[#CFCFCF] text-center items-center justify-center "
                >
                  Child(ren)
                </button>
                {showChild && (
                  <div className="absolute top-full left-0 mt-2 bg-transparent border border-gray-300 text-customGray bg-white text-[14px] font-semibold rounded-lg shadow-lg w-full min-w-[180px] p-3 xl:p-4 ">
                    <div className="flex justify-between items-center">
                      <span className="text-customGray">Child(ren)</span>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <button
                          onClick={decrementChildren}
                          className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center font-medium"
                        >
                          -
                        </button>
                        <span>{children}</span>
                        <button
                          onClick={incrementChildren}
                          className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center font-medium"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Book Now */}
            <button
              onClick={() => console.log("Final Guest Information:", guestInfo)}
              className="border-[0.7px] border-[#00000033]  px-[3vw] py-[1.2vh] font-bold text-customGray bg-[#ffffff] lg:max-w-[304px] max-h-[60px] whitespace-nowrap"
            >
             {button}
            </button>
          </div>
        </div>
        <span className="text-[17px] lg:text-[20px] font-monserrat text-[#AAA] leading-[30px] font-bold">{span}</span>
        {/* RIGHT SIDE (if any) */}
      </div>

      <div className="flex flex-col w-[90%] md:w-[55%] h-full items-center justify-center gap-2">
        <div className="flex w-full justify-center items-center">
          <RoomsCarousel images={restaurantItems}/>
        </div>

        <div className="flex w-full items-center justify-center">
          <img src={image.firebaseUrl} className="flex" width={841} height={238}  loading="lazy"/>
        </div>
      </div>

    </div>
  );
};

export default PlanYourTrip;
