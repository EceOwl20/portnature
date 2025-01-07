import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import expediaLogo from "../../../../public/images/expediaLogo.png";
import tripadvisorLogo from "../../../../public/images/Tripadvisor-Logo.png";
import bookingcomLogo from "../../../../public/images/Booking.com_logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const images = [
  tripadvisorLogo,
  bookingcomLogo,
  expediaLogo,
  tripadvisorLogo,
  bookingcomLogo,
  expediaLogo,
];

const PlanYourTrip = () => {
    const [selectRoom, setSelectRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuests, setShowGuests] = useState(false); // Varsayılan olarak false
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

  // Konuk bilgilerini konsola yazdır
  useEffect(() => {
    console.log("Guest Information:", guestInfo);
  }, [guestInfo]);

  const toggleGuestsDropdown = () => {
    setShowGuests((prev) => !prev); // Sadece tıklamayla açılır veya kapanır
  };

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 0 && setAdults(adults - 1);

  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
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
    <div className="flex w-screen items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row w-[90%]">
        <div className="flex flex-col w-[90%] lg:w-1/2 xl:w-[40%] bg-[#243039] lg:h-[627px] text-white justify-center items-center text-center">
          <h3 className="text-[35px] font-normal uppercase font-lora leading-[50px]">
            PLAN YOUR TRIP
          </h3>
          <span className="text-[20px] font-monserrat font-bold leading-[30px]">
            With our hotel
          </span>

          <div className="flex w-full bg-white items-center justify-center py-[23px]">
            <div
              className="overflow-hidden relative flex w-full "
              ref={emblaRef}
            >
              <div className="flex grid-flow-col h-full w-full items-center justify-center">
                {images.map((image, index) => (
                  <div
                    className="flex-[0_0_auto] items-center justify-center w-[calc(33%-1.2rem)] mx-[0.6rem] relative"
                    key={index}
                  >
                    <img
                      src={image}
                      style={{ objectFit: "contain" }}
                      width={118}
                      height={34}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-[90%] flex-col items-center justify-center gap-[20px] mt-[93px]">
          <div className="flex w-full gap-[2%]">
          <div className="relative flex items-center justify-center w-[49%] lg:w-auto">
          <DatePicker
             selected={checkInDate}
             onChange={(date) => setCheckInDate(date)}
             placeholderText="Check In"
              className="lg:px-[3vw] py-[1.2vh] min-h-[30px] w-[45vw] lg:w-auto flex text-[#CFCFCF] focus:outline-none border-[0.7px] border-[#CFCFCF] items-center justify-center text-center placeholder:text-[#CFCFCF] bg-transparent"
               popperPlacement="bottom-start"
              calendarClassName="custom-calendar"
              dayClassName={(date) =>
                "custom-day hover:bg-blue-100 focus:outline-none"
              }
             
            
          />
        </div>

        {/* Check-Out Input */}
        <div className="relative flex items-center justify-center w-[49%] lg:w-auto ">
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check Out"
             className="px-[3vw] py-[1.2vh] w-[45vw] lg:w-auto  flex text-[#CFCFCF] focus:outline-none border-[0.7px] border-[#CFCFCF] items-center justify-center placeholder:text-[#CFCFCF] bg-transparent text-center"
            popperPlacement="bottom-start"
             calendarClassName="custom-calendar"
             dayClassName={(date) =>
              "custom-day hover:bg-blue-100 focus:outline-none"
            }
          />
        </div>
          </div>

        <div className="flex w-full gap-[2%]">
          {/* Guests Dropdown */}
        <div className="relative w-[49%]">
          <button
            onClick={toggleGuestsDropdown}
            className="px-[3vw] py-[1.2vh] w-full text-[#CFCFCF] focus:outline-none relative border-[0.7px] border-[#CFCFCF] text-center items-center justify-center "
          >
            Adult(s)
          </button>
          {showGuests && (
            <div className="absolute top-full left-0 mt-2 bg-transparent border border-gray-300 text-[#CFCFCF] text-[14px] font-semibold rounded-lg shadow-lg w-full min-w-[180px] p-3 xl:p-4 ">
              <div className="flex justify-between items-center mb-3">
                <span className=" text-[#CFCFCF]">Adult(s)</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <button
                    onClick={decrementAdults}
                    className="w-5 h-5 xl:w-6 xl:h-6 border border-[#CFCFCF] rounded-full flex items-center justify-center  font-medium"
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
              {/* <div className="flex justify-between items-center">
                <span className="text-gray-700">Child(ren)</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <button
                    onClick={decrementChildren}
                    className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center  font-medium"
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
              </div> */}
            </div>
          )}
        </div>

        {/* child */}
        <div className="relative w-[49%]">
          <button
            onClick={toggleGuestsDropdown}
            className="px-[3vw] py-[1.2vh] w-full text-[#CFCFCF] focus:outline-none relative border-[0.7px] border-[#CFCFCF] text-center items-center justify-center "
          >
            Child(ren)
          </button>
          {showGuests && (
            <div className="absolute top-full left-0 mt-2 bg-transparent border border-gray-300 text-[#CFCFCF] text-[14px] font-semibold rounded-lg shadow-lg w-full min-w-[180px] p-3 xl:p-4 ">
              {/* <div className="flex justify-between items-center mb-3">
                <span className=" ">Adult(s)</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <button
                    onClick={decrementAdults}
                    className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center  font-medium"
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
              </div> */}
              <div className="flex justify-between items-center">
                <span className="text-[#CFCFCF]">Child(ren)</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <button
                    onClick={decrementChildren}
                    className="w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 rounded-full flex items-center justify-center  font-medium"
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

        <button onClick={() => console.log("Final Guest Information:", guestInfo)} className='border-[0.7px] border-[#00000033]  px-[3vw] py-[1.2vh] font-bold text-customGray bg-[#ffffff] lg:max-w-[304px] max-h-[60px] whitespace-nowrap'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
