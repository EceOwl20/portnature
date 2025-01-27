import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const TWEEN_FACTOR_BASE = 0.12

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const MiniClubSlider = ({images=[],header, text, items=[],
  options}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

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
      
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor])

  // Autoplay Effect
  useEffect(() => {
    if (!emblaApi) return

    const AUTOPLAY_INTERVAL = 3000
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
   <>
    <div className="max-w-[1920px] mx-auto mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex"> {/* Resimler arasındaki boşluk minimuma indirildi */}
          {Array.isArray(images) && images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_50%] min-w-0 transform-gpu" // Genişlik %50'ye çıkarıldı
            >
              <div className="slide-number shadow-inner border-gray-300 flex items-center justify-center  select-none overflow-hidden"> {/* Yükseklik artırıldı */}
                <img 
                  src={image.firebaseUrl} 
                  alt={image.altText} 
                  className="w-full h-full object-cover" // Kenar kıvrımları kaldırıldı
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



<section className="flex items-center justify-center max-w-[1920px] mx-auto mt-32">
      <div className="flex flex-col gap-16 items-center justify-center w-full"> 
      <div className="flex flex-row items-center justify-center gap-60 font-monserrat text-[14px] font-bold leading-normal">
      {items.map((item, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <img
            src={item.firebaseUrl}
            alt={item.text}
            className="w-[39px] h-[39px] mb-4"
          />
          {item.text}
        </div>
      ))}
    </div>
        <div className="flex flex-row items-center justify-center gap-8 mt-8"> {/* Başlık, çizgiler ve paragraf yanyana */}
          <h1 className="font-lora text-[40px] leading-normal font-medium text-center">{header}</h1>
          <div className="flex flex-col items-center justify-center">
            <LineVerticalSvg width={1} height={90} />
            <LineVertical2Svg width={1} height={90} />
          </div>
          <p className="font-monserrat text-[15px] font-normal leading-5 w-7/12 text-left">
           {text}
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default MiniClubSlider
