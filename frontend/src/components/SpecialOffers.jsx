import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const images = [
  '/images/child1.png',
  '/images/child3.png',
  '/images/jumpingtrack.png',
  '/images/babysitting.png'
]

const repeatedImages = [
  ...images,
  ...images,
  ...images,
  ...images,
  ...images
]

const SpecialOffers = () => {
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
  }, [emblaApi, onSelect])

  return (
    <section className="my-32">
      {/* "Special Offer" metnini carousel'in dışında, sabit bir konumda tutuyoruz */}
      <div className="flex mb-11 ml-12">
        <h2 className="text-[28px] leading-10 italic font-lora font-normal text-black">
          Special Offer
        </h2>
      </div>

      {/* Carousel kapsayıcısı */}
      <div className="overflow-hidden relative" ref={emblaRef}>
        {/* Embla container: Bu div görselleri içerir ve kaydırma işlemi bunun üzerinde gerçekleşir */}
        <div className="flex gap-x-4">
          {repeatedImages.map((src, index) => (
            <div 
              className="relative flex-[0_0_25%] flex justify-center items-start" 
              key={index}
              style={{ position: 'relative' }}
            >
              <div className="absolute border border-dotted border-[#CFCFCF] top-0 right-0 w-10/12 h-[550px] z-10"></div>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-9/12 h-[560px] relative z-20 mt-10 mr-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
