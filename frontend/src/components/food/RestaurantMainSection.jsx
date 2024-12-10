import React,{ useEffect, useCallback, useState }  from "react";
import image from "../../../public/images/alacarteMain.png";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LineVerticalSvg from "../../svg/LineVerticalSvg"
import LineVertical2Svg from "../../svg/LineVertical2Svg"

const images =[image,image,image]

const RestaurantMainSection = ({img}) => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align:"center",
    startIndex:0,
  }, [
    Autoplay({ delay: 3000 }),
  ]
);

  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

  const handleJump = useCallback(
    (index) => {
      if (emblaApi && emblaApi.scrollTo) emblaApi.scrollTo(index);
      setCurr(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurr(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);


  return (
      <section className="flex w-screen h-[70vh] relative items-start justify-between bg-white">
        <div className="flex flex-col w-full lg:w-[49%] items-center justify-center lg:gap-[20px] text-center lg:text-start ">
          <div className="overflow-hidden relative w-full h-auto" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="flex-[0_0_auto] w-full flex justify-center relative group" key={index}>
              <div className="flex flex-col relative z-10">
              <img
                className="cursor-pointer overflow-hidden object-cover relative"
                height={image.height}
                width={image.width}
                src={image}
                alt={`Slide ${index + 1}`}
              />
              </div>
            </div>
          ))}
        </div>
    </div>
          
          <div className="flex w-[80%] lg:w-[70%] items-center justify-end gap-[28px] mt-[43px] text-center">
           <h2 className="text-[40px] text-customGray font-lora leading-normal font-medium">MAIN RESTAURANT</h2>
          </div>
          <p className="flex lg:hidden text-[12px] w-[95%] text-black font-monserrat font-normal leading-normal"> We offer a wide selection of mouth-watering dishes that will satisfy every palate, from savory meats to fresh salads with open buffet. Our expert chefs use only the freshest ingredients to create flavorful and healthy dishes.</p>
        </div>

        <div className="hidden lg:flex flex-col w-[49%] items-center lg:items-center justify-center lg:gap-[20px] text-center lg:text-center">
        <img
            src={image}
            alt="img"
            width={image.width}
            height={image.height}
          />
          <p className="text-[15px] w-[90%] lg:w-[65%] text-black font-monserrat font-normal leading-[22.5px] lg:mt-[43px]">
          We offer a wide selection of mouth-watering dishes that will satisfy every palate, from savory meats to fresh salads with open buffet. Our expert chefs use only the freshest ingredients to create flavorful and healthy dishes.
          </p>
        </div>
      
      <div className="absolute -bottom-10 left-1/2 flex flex-col w-auto h-auto">
      <LineVerticalSvg width={1} height={150}/>
      <LineVertical2Svg width={1} height={150}/>
      </div>
      </section>
     
   
  );
};

export default RestaurantMainSection;
