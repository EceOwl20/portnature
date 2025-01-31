import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HomeCarousel = ({ images = [], header, autoplay, delay }) => {
  const plugins = autoplay ? [Autoplay({ delay })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="flex w-screen min-h-screen overflow-x-hidden"
      aria-label="Home Carousel"
    >
      <div className="relative flex w-full overflow-hidden" ref={emblaRef}>
        <div className="flex grid-flow-col min-h-screen w-full">
          {images.map((image, index) => (
            <figure
              className="flex-[0_0_auto] h-screen w-full relative"
              key={index}
            >
              <img
                src={image.firebaseUrl}
                style={{ objectFit: "cover", aspectRatio: "16 / 9" }}
                width={image.width}
                height={image.height}
                alt={
                  image.altText && image.altText["en"]
                }
                className="flex h-screen w-full"
                loading="lazy" 
              />
              <figcaption className="absolute flex flex-col text-center top-[30%] -translate-y-1/2 left-[50%] transform -translate-x-1/2">
                <h2 className="text-[28px] lg:text-[40px] leading-normal text-white uppercase font-medium font-lora mb-[10px] lg:mb-[20px]">
                  {header}
                </h2>
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          onClick={scrollPrev}
          className="hidden absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
          aria-label="Previous Slide"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="absolute hidden right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
          aria-label="Next Slide"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HomeCarousel;
