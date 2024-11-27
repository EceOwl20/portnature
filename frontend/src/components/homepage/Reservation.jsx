import React, { useState,useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuests, setShowGuests] = useState(false); // Varsayılan olarak false
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [guestInfo, setGuestInfo] = useState({});

  // Konuk bilgilerini her değişiklikte güncelle
  useEffect(() => {
    setGuestInfo({
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  }, [checkInDate, checkOutDate, adults, children]);

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


  return (
    <div className='flex w-screen h-[300px] items-center justify-center bg-[#ffffff] '>
      <div className='lg:flex lg:flex-row grid grid-cols-2 w-[90%] lg:w-[60%] items-center justify-center text-[#233038] font-monserrat font-light text-[15px] lg:text-[20px] leading-normal text-center py-[100px]'>
          {/* Check-In Input */}
        <div className="relative">
          <DatePicker
             selected={checkInDate}
             onChange={(date) => setCheckInDate(date)}
             placeholderText="Check In"
              className="px-8 py-3 w-full text-customGray focus:outline-none border-[0.7px] border-black/20 items-center justify-center placeholder:text-customGray"
               popperPlacement="bottom-start"
              calendarClassName="custom-calendar"
              dayClassName={(date) =>
                "custom-day hover:bg-blue-100 focus:outline-none"
              }
             
            
          />
        </div>

        {/* Check-Out Input */}
        <div className="relative">
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check Out"
             className="px-4 py-3 text-customGray focus:outline-none border-[0.7px] border-black/20 items-center justify-center placeholder:text-customGray"
            popperPlacement="bottom-start"
             calendarClassName="custom-calendar"
             dayClassName={(date) =>
              "custom-day hover:bg-blue-100 focus:outline-none"
            }
          />
        </div>
      
       
         {/* Guests Dropdown */}
         <div className="relative">
          <button
            onClick={toggleGuestsDropdown}
            className="px-6 py-3 w-full text-customGray focus:outline-none relative border-[0.7px] border-black/20"
          >
            Guests
          </button>
          {showGuests && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-52 p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-700">Adult(s)</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementAdults}
                    className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-gray-700"
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Child(ren)</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementChildren}
                    className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-gray-700"
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={incrementChildren}
                    className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>



        <button onClick={() => console.log("Final Guest Information:", guestInfo)} className='border-[0.7px] border-[#00000033]  py-[12px] px-[40px] font-bold text-white bg-[#233038] lg:max-w-[304px] max-h-[60px] whitespace-nowrap'>Book Now</button>
      </div>
    </div>
  )
}

export default Reservation
