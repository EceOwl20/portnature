import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }) 

  
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0) 
      }
    }

    const autoplayInterval = setInterval(autoplay, 3000) 

    return () => clearInterval(autoplayInterval) 
  }, [emblaApi])
 
  return (
    <div className="max-w-[80rem] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-16">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] px-4 ${
                index === slides.length - 1 ? 'mr-16' : '' 
              }`}
            >
              <div className="h-[606px] flex items-center justify-center text-4xl font-bold bg-gray-200 ">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
