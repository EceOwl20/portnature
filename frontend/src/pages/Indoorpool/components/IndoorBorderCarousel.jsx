import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

const IndoorBorderCarousel = ({images=[]}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000 })]
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect])

  return (
    <section className="flex flex-col w-full my-24 justify-center items-center">
      <div className="flex mb-11 md:w-3/4 justify-center items-center md:justify-center">
      </div>
      <div className="overflow-hidden relative w-5/6 justify-center items-center" ref={emblaRef}>
        <div className="flex gap-x-4">
          {images.map((image, index) => (
            <div 
              className="relative flex-[0_0_auto] flex justify-center items-center w-[calc(90%-1rem] md:w-[calc(50%-1rem] min-w-[280px] md:min-w-[343px] lg:w-[calc(33.3%-1rem] xl:w-[calc(25%-1rem)]" 
              key={index}
              style={{ position: 'relative' }}
            >
              <div className="absolute border border-dotted border-[#CFCFCF] top-0 right-0 w-11/12 md:w-10/12 h-[450px] z-10"></div>
              <img
                src={image.firebaseUrl}
                alt={`Slide ${index + 1}`}
                className="object-cover w-11/12 md:w-10/12 h-[450px] relative z-20 mt-10 mr-1"
              />
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndoorBorderCarousel
