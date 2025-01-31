import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

const OtherRestaurants = ({header, headers=[],images=[], links=[]}) => {
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
    <section className="flex flex-col w-screen my-24">
      <div className="flex mb-11 md:w-3/4 md:ml-auto justify-center items-center md:justify-start">
        <h2 className="text-[28px] leading-10 italic font-lora font-normal text-black">
        {header}
        </h2>
      </div>
      <div className="overflow-hidden relative w-5/6 ml-[4vw]" ref={emblaRef}>
        <div className="flex gap-x-4">
          {images.map((image, index) => (
            <Link 
              to={links[index]}
              className="relative flex-[0_0_auto] flex justify-center items-start w-[calc(90%-1rem] md:w-[calc(50%-1rem] min-w-[280px] md:min-w-[343px] lg:w-[calc(33.3%-1rem] xl:w-[calc(25%-1rem)]" 
              key={index}
              style={{ position: 'relative' }}
            >
              <div className="absolute border border-dotted border-[#CFCFCF] top-0 right-0 w-11/12 md:w-10/12 h-[450px] z-10"></div>
              <img
                src={image.firebaseUrl}
                alt={`Slide ${index + 1}`}
                className="object-cover w-11/12 md:w-10/12 h-[450px] relative z-20 mt-10 mr-1"
                 loading="lazy"
              />
            
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2  bg-opacity-70 text-white px-4 py-2 rounded z-30">
                <p className="text-[25px] font-lora whitespace-nowrap font-medium text-start leading-normal">{headers[index]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherRestaurants
