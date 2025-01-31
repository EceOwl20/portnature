import React, { useEffect, useRef, useCallback, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR_BASE = 0.17;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const DavidoffCarousel = ({images = [], header, text, text2, image, options}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const [selectedIndex, setSelectedIndex] = useState(0);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.slide-number') 
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)
              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`
        }
      })
    })
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return
    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)
    

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on("select", onSelect);
      
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor, onSelect])

  // Autoplay Effect
  useEffect(() => {
    if (!emblaApi) return

    const AUTOPLAY_INTERVAL = 4000
    const autoplay = () => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0)
      } else {
        emblaApi.scrollNext()
      }
    }

    const interval = setInterval(autoplay, AUTOPLAY_INTERVAL)
    return () => clearInterval(interval)
  }, [emblaApi])


  return (
    <div className="flex flex-col w-full mt-3  items-center justify-center min-h-screen">
      <div className="overflow-hidden w-full items-center justify-center h-screen flex max-h-[820px]" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((img, index) => (
            <div
              key={index}
               className="flex-[0_0_60%] min-w-0 transform-gpu "
            >
            <div className="slide-number shadow-inner relative border-gray-300 flex items-center justify-center  select-none overflow-hidden "> {/* Yükseklik artırıldı */}
             <img
                className="w-full h-full object-cover"
                src={img.firebaseUrl}
                alt={`Slide ${index + 1}`}
                 loading="lazy"
              />
              {(index === selectedIndex - 1 || index === selectedIndex + 1) && (
                <div className="absolute inset-0 z-10 bg-white/30 flex flex-col items-end justify-center text-right text-white text-[28px] italic font-lora font-medium leading-[42px] pr-5">
                  {/* Yan slide'lar için isteğe bağlı alan */}
                </div>
              )}

              {index === selectedIndex && (
                <div className="absolute inset-0 z-10 bg-black/30 flex flex-col items-end justify-center text-right lg:text-[28px] italic font-lora font-medium text-[#F8F8F8] text-[12px] leading-[20px] lg:leading-[42px] pr-5">
                  <h2>
                    {header}
                  </h2>
                  <div className="flex w-[40%] mt-[25px] mb-[15px] justify-end items-end">
                    <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
                    <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
                  </div>
                  <p> {text}</p>
                </div>
              )}
             </div>

              

              
            </div>
          ))}
        </div>
      </div>

      {(image || text2) && (
        <div className="flex flex-col lg:flex-row xl:w-[85%] lg:w-[90%] items-center justify-around gap-[30px] lg:gap-0 mt-0 lg:mt-0">
          {image && (
            <>
              <img src={image.firebaseUrl} alt="davidoff" width={335} height={45} className="hidden md:flex lg:hidden" />
              <img src={image.firebaseUrl} alt="davidoff" width={200} height={28} className="flex md:hidden" />
              <img src={image.firebaseUrl} alt="davidoff" width={image.width || 200} height={image.height || 28} className="hidden lg:flex" />
            </>
          )}
          {text2 && (
            <div className="flex items-center justify-center lg:justify-start text-center lg:text-start w-[85%] md:w-[60%] lg:w-[40%] xl:w-[35%]">
              <p className="text-[14px] lg:text-[15px] text-black font-monserrat font-normal leading-[22.5px]">
              {text2}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DavidoffCarousel;
