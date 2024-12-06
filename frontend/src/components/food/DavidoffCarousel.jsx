import React, { useEffect, useRef, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img from "/images/davidoffMain2.png";
import davidoffLogo from "../../../public/images/food/Davidoff_logo.png"

const images = [img, img, img, img,img,img];
const TWEEN_FACTOR_BASE = 0.52;

const DavidoffCarousel = () => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "center",
    skipSnaps: false, // Snap noktalarını atlamayı engeller
    startIndex: 0,
  },
  [
    Autoplay({ delay: 3000 }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const tweenFactor = useRef(TWEEN_FACTOR_BASE);
  const tweenNodes = useRef([]);

  // Slide'ları ve ölçekleme değerlerini ayarlar
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes();
  }, []);

  const tweenScale = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      // Sonsuz döngü için farklılığı hesapla
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          if (loopItem.index === snapIndex) {
            diffToTarget = scrollSnap + loopItem.target() - scrollProgress;
          }
        });
      }

      // Ölçekleme ve görünürlük hesaplama
      const scale = Math.max(
        1 - Math.abs(diffToTarget) * tweenFactor.current,
        0.30
      ); // Min scale: 0.75
      const tweenNode = tweenNodes.current[snapIndex];
      if (tweenNode) {
        tweenNode.style.transform = `scale(${scale})`;
      }
    });
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); // Seçili slide'ı günceller
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Slide'ları ve faktörü ayarla
    setTweenNodes(emblaApi);

    // Ölçekleme işlevini bağla
    tweenScale();

    // Embla Carousel olaylarını dinle
    emblaApi.on("scroll", tweenScale);
    emblaApi.on("reInit", tweenScale);
    emblaApi.on("select", onSelect); // Seçili slide'ı takip eder

    return () => {
      if (emblaApi) {
        emblaApi.off("scroll", tweenScale);
        emblaApi.off("reInit", tweenScale);
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, setTweenNodes, tweenScale, onSelect]);

  return (
    <div className="flex flex-col w-full h-auto lg:h-screen items-center justify-center">
      <div className="overflow-hidden relative w-full items-center justify-center h-full" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative flex-[0_0_auto] w-[90%-1rem] h-full lg:h-[653px] transition-transform duration-150 ease-in-out items-center justify-center ${
                index === selectedIndex ? "bg-black/30 " : "bg-white/30"
              }`}
            >
              <img
                className="w-screen lg:w-full h-[40vh] lg:h-full object-cover rounded-md overflow-hidden"
                src={image}
                alt={`Slide ${index + 1}`}
              />

             {(index == selectedIndex-1 || index == selectedIndex+1) && (
                <div className="absolute inset-0 z-10 bg-white/30 flex flex-col items-end justify-center text-right text-white text-[28px] italic font-lora font-medium leading-[42px] pr-5">
                 
                </div>
              )} 
              
              {index === selectedIndex && (
                <div className="absolute inset-0 z-10 bg-black/30 flex flex-col items-end justify-center text-right  lg:text-[28px] italic font-lora font-medium text-[#F8F8F8] text-[12px] leading-[20px] lg:leading-[42px] pr-5">
                  <h2 className="">
                    Pleasure in a thing of beauty is the <br></br> essence of a happy life
                  </h2>
                  <div className="flex w-[40%] mt-[25px] mb-[15px] justify-end items-end">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                  <p className="">ZINO DAVIDOFF</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:w-[85%] lg:w-[90%] items-center justify-around gap-[30px] lg:gap-0 mt-0 lg:mt-0">
        <img src={davidoffLogo} alt="davidoff" width={davidoffLogo.width} height={davidoffLogo.height} className="hidden lg:flex"/>
        <img src={davidoffLogo} alt="davidoff" width={335} height={45} className="hidden md:flex lg:hidden"/>
        <img src={davidoffLogo} alt="davidoff" width={200} height={28} className="flex md:hidden"/>
        <div className=" flex items-center justify-center lg:justify-start text-center lg:text-start w-[85%] md:w-[60%] lg:w-[40%] xl:w-[35%]">
            <p className="text-[14px] lg:text-[15px] text-black font-monserrat font-normal leading-[22.5px]">Ищете роскошное кафе, чтобы расслабиться? Смело заходите в Davidoff. Приходите в гости насладиться идеальным сочетанием комфорта, уюта и изысканности в сочетании с уютным ароматом кофейных зерн.</p>
        </div>
      </div>
    </div>
  );
};

export default DavidoffCarousel;