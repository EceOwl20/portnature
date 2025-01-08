import React, { useState, useEffect } from 'react'
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
    <div className="max-w-[80rem] mx-auto mt-28">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] px-4 ${
                index === slides.length - 1 ? 'mr-16' : ''
              }`}
            >
              <div className="relative h-[750px] flex items-start justify-center overflow-visible">
                {/* Border */}
                <div className="absolute h-[610px] inset-0 border-2 border-dotted translate-x-12 translate-y-10"></div>
                {/* Resim Kutusu */}
                <div className="h-[606px] w-full flex items-center justify-center bg-gray-200 shadow-md z-50 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel