import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const BookingOpportunities = ({ images = [], header }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align:"start"});

  return (
    <div className="flex w-screen items-center justify-center mb-10 lg:my-20">
      <div className="flex flex-col w-[90%] items-center justify-center gap-[25px] lg:gap-[50px] text-center h-[85%]">
        <h2 className="text-customGray lg:text-[40px] text-[25px] leading-normal uppercase font-lora font-medium">
          {header}
        </h2>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] lg:gap-[30px] items-start justify-center text-start w-[80%] sm:w-[70%] md:w-[45%] lg:w-[32%] flex-none px-4"
              >
                <img
                  src={image.firebaseUrl}
                  width={image.width}
                  height={image.height}
                  className="flex max-w-[513px] max-h-[511px] w-[100%]"
                  alt={image.altText}
                   loading="lazy"
                />
                <h3 className="text-[18px] lg:text-[30px] text-customGray font-semibold font-monserrat leading-[40px] capitalize">
                  {image.header}
                </h3>
                <Link
                  to={image.buttonLink}
                  className="flex py-[12px] px-[34px] text-[14px] border border-[#6b6b6b] text-customGray font-monserrat text-center font-bold leading-normal bg-transparent hover:text-white hover:bg-customGray"
                >
                  {image.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOpportunities;
