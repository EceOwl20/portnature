import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const BookOpportunities2 = ({ images = [], header }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="flex w-screen items-center justify-center h-auto lg:h-screen my-10">
      <div className="flex flex-col w-[95%] items-start lg:items-center justify-center gap-[5%] text-center h-[85%]">
        <h2 className="text-customGray lg:text-[40px] text-[25px] leading-normal uppercase font-lora font-medium mb-8">
          {header}
        </h2>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 lg:gap-[31px] items-start justify-center text-start font-monserrat w-[calc(68%-0.5rem)] sm:w-[calc(48%-0.5rem)] lg:w-[32%] relative flex-none px-1 lg:px-4"
              >
                <img
                  src={image.firebaseUrl}
                  width={image.width}
                  height={image.height}
                  className="flex max-w-[513px] max-h-[511px] w-[95%]"
                  alt="booking"
                   loading="lazy"
                />
                <h3 className="text-[20px] lg:text-[30px] text-customGray font-semibold leading-[40px] capitalize w-[90%]">
                  {image.headers}
                </h3>
                <p className="text-[12px] lg:text-[16px] text-[#a8a8a8] leading-[24px] font-medium w-[90%]">
                  {image.text}
                </p>
                <Link to={image.buttonLink} className="absolute inset-0 z-10"></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOpportunities2;