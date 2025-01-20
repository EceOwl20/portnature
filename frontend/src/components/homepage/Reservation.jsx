import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [guestInfo, setGuestInfo] = useState({});

  useEffect(() => {
    setGuestInfo({
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  }, [checkInDate, checkOutDate, adults, children]);

  useEffect(() => {
    console.log("Guest Information:", guestInfo);
  }, [guestInfo]);

  const toggleGuestsDropdown = () => {
    setShowGuests((prev) => !prev);
  };

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 0 && setAdults(adults - 1);

  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  return (
    <section
      className="flex w-screen h-[300px] items-center justify-center bg-[#ffffff]"
      aria-labelledby="reservation-heading"
    >
      <h2 id="reservation-heading" className="sr-only">
        Reservation Form
      </h2>

      <form
        className="lg:flex lg:flex-row grid grid-cols-2 w-[90%] lg:w-[80%] 
                   items-center justify-center text-[#233038] font-monserrat 
                   font-light text-[15px] lg:text-[20px] leading-normal 
                   text-center my-[100px]"
      >
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <label htmlFor="checkInDate" className="sr-only">
            Check In Date
          </label>
          <DatePicker
            id="checkInDate"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check In"
            className="cursor-pointer lg:px-[3vw] py-[1.2vh] min-h-[30px] w-[45vw] lg:w-auto
                       flex text-customGray focus:outline-none border-[0.7px] border-black/20
                       items-center justify-center text-center placeholder:text-customGray"
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={(date) =>
              "custom-day hover:bg-blue-100 focus:outline-none"
            }
          />
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <label htmlFor="checkOutDate" className="sr-only">
            Check Out Date
          </label>
          <DatePicker
            id="checkOutDate"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check Out"
            className="cursor-pointer px-[3vw] py-[1.2vh] w-[45vw] lg:w-auto flex
                       text-customGray focus:outline-none border-[0.7px] border-black/20
                       items-center justify-center placeholder:text-customGray text-center"
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={(date) =>
              "custom-day hover:bg-blue-100 focus:outline-none"
            }
          />
        </div>
        <div className="relative">
          <label htmlFor="guests-button" className="sr-only">
            Select number of guests
          </label>
          <button
            id="guests-button"
            onClick={toggleGuestsDropdown}
            className="cursor-pointer px-[3vw] py-[1.2vh] w-full text-customGray 
                       focus:outline-none relative border-[0.7px] border-black/20 text-center"
            aria-haspopup="dialog"
            aria-expanded={showGuests}
            type="button"
          >
            Guests
          </button>

          {showGuests && (
            <div
              className="absolute top-full left-0 mt-2 bg-white border border-gray-300 
                         text-[#233038] text-[14px] font-semibold rounded-lg shadow-lg 
                         w-full min-w-[180px] p-3 xl:p-4"
              role="dialog"
              aria-modal="false"
              aria-label="Select number of adults and children"
            >
              <div className="flex justify-between items-center mb-3">
                <label
                  htmlFor="adultCounter"
                  id="adultCounterLabel"
                  className="whitespace-nowrap"
                >
                  Adult(s)
                </label>
                <div
                  className="flex items-center gap-1 lg:gap-2"
                  id="adultCounter"
                >
                  <button
                    onClick={decrementAdults}
                    className="cursor-pointer w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 
                               rounded-full flex items-center justify-center font-medium"
                    aria-labelledby="adultCounterLabel"
                    aria-label="Decrease adults"
                    type="button"
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="cursor-pointer w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 
                               rounded-full flex items-center justify-center font-medium"
                    aria-labelledby="adultCounterLabel"
                    aria-label="Increase adults"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="childrenCounter"
                  id="childrenCounterLabel"
                  className="whitespace-nowrap"
                >
                  Child(ren)
                </label>
                <div
                  className="flex items-center gap-1 lg:gap-2"
                  id="childrenCounter"
                >
                  <button
                    onClick={decrementChildren}
                    className="cursor-pointer w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 
                               rounded-full flex items-center justify-center font-medium"
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Decrease children"
                    type="button"
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={incrementChildren}
                    className="cursor-pointer w-5 h-5 xl:w-6 xl:h-6 border border-gray-400 
                               rounded-full flex items-center justify-center font-medium"
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Increase children"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => console.log("Final Guest Information:", guestInfo)}
          className="cursor-pointer border-[0.7px] border-[#00000033] px-[3vw] py-[1.2vh] 
                     font-bold text-white bg-[#233038] lg:max-w-[304px] max-h-[60px] 
                     whitespace-nowrap"
          type="button"
        >
          Book Now
        </button>
      </form>
    </section>
  );
};

export default Reservation;
