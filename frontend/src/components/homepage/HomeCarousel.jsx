
import React, {useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const HomeCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex w-full min-h-screen overflow-visible">
      <div
      className=" overflow-hidden relative flex w-full"
      ref={emblaRef}
    >
      <div className="flex grid-flow-col min-h-screen w-full">
        {images.map((image, index) => (
          <div className="flex-[0_0_auto] h-screen w-full" key={index}>
            <img src={image} style={{objectFit:'cover'}} width={image.width} height={image.height} alt={`Slide ${index + 1}`} className=" flex h-screen w-full"/>
          </div>
        ))}
      </div>

      
    </div>

    </div>
  );
};
export default HomeCarousel;
