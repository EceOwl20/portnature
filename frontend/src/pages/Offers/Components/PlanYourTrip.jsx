import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import expediaLogo from "../../../../public/images/expediaLogo.png";
import tripadvisorLogo from "../../../../public/images/Tripadvisor-Logo.png";
import bookingcomLogo from "../../../../public/images/Booking.com_logo.png";

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
                    className="flex-[0_0_auto] items-center justify-center w-[calc(33.3%-1.2rem)] mx-[0.6rem] relative"
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

          <div className="flex w-[90%] flex-col items-center justify-center gap-[20px] mt-[93px]"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
