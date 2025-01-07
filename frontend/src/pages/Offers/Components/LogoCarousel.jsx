import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import expediaLogo from "../../../../public/images/expediaLogo.png";

const images = [
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo,
    expediaLogo
  ];

const LogoCarousel = () => {
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
    <div className="flex w-screen bg-[#F8F8F8] items-center justify-center py-[55px] ">
    <div className="overflow-hidden relative flex w-full " ref={emblaRef}>
      <div className="flex grid-flow-col items-center justify-center w-full">
        {images.map((image, index) => (
          <div
            className="flex-[0_0_auto] w-[calc(90%)] lg:w-[calc(25%)] xl:w-[calc(20%)] relative"
            key={index}
          >
            <img
              src={image}
              width={118}
              height={34}
              alt="index"
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default LogoCarousel
