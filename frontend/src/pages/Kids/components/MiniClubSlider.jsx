import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../components/sliderComponents/EmblaArrow'
import { DotButton, useDotButton } from '../components/sliderComponents/EmblaDot'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const MiniClubSlider = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

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
    <div className="max-w-[48rem] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {Array.isArray(slides) && slides.map((slideSrc, index) => (
            <div
              key={index}
              className="flex-[0_0_55%] min-w-0 transform-gpu"
            >
              <div className="slide-number shadow-inner border border-gray-300 rounded-[1.8rem] flex items-center justify-center h-[19rem] select-none overflow-hidden">
                <img 
                  src={slideSrc} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover rounded-[1.8rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isSelected={index === selectedIndex}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiniClubSlider
