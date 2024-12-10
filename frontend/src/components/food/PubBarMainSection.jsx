import React, { useEffect, useCallback, useState } from "react";
import image from "../../../public/images/alacarteMain.png";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import irishpub from "../../../public/images/food/irishpub6.png";
import ThreeDrinkSvg from "../../svg/food/ThreeDrinkSvg";

const images = [image, image, image];
const images2 = [irishpub, irishpub, irishpub];

const PubBarMainSection = () => {
  const [emblaRef, emblaApi] = useCarousel(
    {
      loop: true,
      align: "center",
      startIndex: 0,
    },
    [Autoplay({ delay: 3000 })]
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
    <section className="flex flex-col w-screen h-auto relative items-center justify-center bg-white my-10">
      <h2 className="text-[40px] text-customGray font-lora font-medium leading-normal lg:mb-[60px]">
        IRISH PUB
      </h2>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full lg:w-[90%]">
        <div className="flex w-full lg:w-[40%] items-center justify-center lg:gap-[20px]">
          <div
            className="overflow-hidden relative w-full h-auto"
            ref={emblaRef}
          >
            <div className="flex grid-flow-col">
              {images2.map((image, index) => (
                <div
                  className="flex-[0_0_auto] w-full flex justify-center relative group"
                  key={index}
                >
                  <div className="flex flex-col relative z-10">
                    <img
                      className="cursor-pointer overflow-hidden object-cover relative lg:max-h-[463px] w-full xl:max-h-[677px]"
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
        </div>

        <div className="flex flex-col w-[100%] lg:w-[60%] items-center justify-center lg:gap-[30px] text-center gap-10 ">
        <div
            className="overflow-hidden relative w-full h-auto"
            ref={emblaRef}
          >
            <div className="flex grid-flow-col">
              {images.map((image, index) => (
                <div
                  className="flex-[0_0_auto] w-full flex justify-center relative group"
                  key={index}
                >
                  <div className="flex flex-col relative w-full">
                    <img
                      className="cursor-pointer overflow-hidden object-cover relative lg:max-h-[353px] xl:max-h-[515px]"
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
          <div className="flex flex-col lg:flex-row w-full lg:w-[90%] items-center justify-center  gap-[30px] lg:gap-[2.5%]">
            
            <ThreeDrinkSvg width={136} height={40}/>
            
          <p className="text-[15px] w-[75%] text-black font-monserrat font-normal leading-[22.5px] mb-10 lg:mb-0">
          Bir bardak alkolün tadını çıkarabileceğiniz Irısh Pub'ın sıcak ve davetkar atmosferine adım atın. Port Nature Irish Pub, dinlenmek ve İrlanda'nın misafirperverliğini yaşamak için mükemmel bir mekandır.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PubBarMainSection;
