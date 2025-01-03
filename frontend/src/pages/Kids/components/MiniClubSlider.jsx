import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const TWEEN_FACTOR_BASE = 0.12

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const MiniClubSlider = (props, {images=[],header, text, items=[]}) => {
  const { slides, options } = props
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
          {Array.isArray(slides) && slides.map((slideSrc, index) => (
            <div
              key={index}
              className="flex-[0_0_50%] min-w-0 transform-gpu" // Genişlik %50'ye çıkarıldı
            >
              <div className="slide-number shadow-inner border-gray-300 flex items-center justify-center h-[28rem] select-none overflow-hidden"> {/* Yükseklik artırıldı */}
                <img 
                  src={slideSrc} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover" // Kenar kıvrımları kaldırıldı
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



<section className="flex items-center justify-center max-w-[1920px] mx-auto mt-32"> {/* Tüm section tam ortalandı */}
      <div className="flex flex-col gap-16 items-center justify-center w-full"> {/* İçerikler dikeyde ortalandı */}
        <div className="flex flex-row items-center justify-center gap-60 font-monserrat text-[14px] font-bold leading-normal">
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/console1.png" className="w-[39px] h-[39px] mb-4" alt="console" />
            GAMES
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/paint1.png" className="w-[39px] h-[39px] mb-4" alt="paint" />
            PAINTING
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/children1.png" className="w-[39px] h-[39px] mb-4" alt="sports activities" />
            SPORTS ACTIVITIES
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/chef1.png" className="w-[39px] h-[39px] mb-4" alt="cooking" />
            COOKING
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 mt-8"> {/* Başlık, çizgiler ve paragraf yanyana */}
          <h1 className="font-lora text-[40px] leading-normal font-medium text-center">MINI CLUB</h1>
          <div className="flex flex-col items-center justify-center">
            <LineVerticalSvg width={1} height={90} />
            <LineVertical2Svg width={1} height={90} />
          </div>
          <p className="font-monserrat text-[15px] font-normal leading-5 w-7/12 text-left">
            Welcome to our luxurious paradise! Step onto the pristine private sandy beach, where the sun-kissed experience becomes a thrilling adventure. Get comfortable on our high-quality sunbeds, soaking up the golden rays and letting all worries drift away. For the ultimate VIP treatment, pre-book a pavilion and immerse yourself in premium service, savoring every moment of your sun-drenched escape.
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default MiniClubSlider
