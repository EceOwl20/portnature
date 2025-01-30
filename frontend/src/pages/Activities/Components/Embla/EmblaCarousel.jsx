import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    if (!emblaApi) return

    // Basit autoplay fonksiyonu
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
    <div className="max-w-[1920px] w-full mt-5 mx-auto ">
      {/* Slider Container */}
      <div className="overflow-hidden max-h-[60vh] md:max-h-[80vh]" ref={emblaRef}>
        <div className="flex gap-20 grif-flow-col">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-[0_0_auto] w-w-[calc(90%-1rem)] md:w-[calc(61%-1rem)] lg:w-[calc(48%-1rem)] xl:w-[calc(35%-0.5rem)] px-2 lg:px-4 ${
                index === slides.length - 1 ? 'mr-16' : ''
              }`}
            >
              <div className="relative min-h-[411px] md:min-h-[602px] h-[750px] flex items-start justify-center overflow-visible">
                {/* Dotted Border (Süs) */}
                <div className="absolute h-[411px] md:h-[610px] inset-0 border-2 border-dotted translate-x-12 translate-y-10"></div>

                {/* Resim Kutusu */}
                <div className="h-[411px] md:h-[610px] w-full relative bg-gray-200 shadow-md overflow-hidden">
                  {/* Slide Resmi */}
                  <img
                    src={slide.firebaseUrl}
                    alt={slide.title}
                    className="h-full w-full object-cover min-h-[411px] md:min-h-[602px]"
                    width={slide.width}
                    height={slide.height}
                  />

                  {/* Yazı Katmanı */}
                  <div className="absolute inset-0 bg-black/10 flex flex-col leading-normal justify-start font-lora text-[25px] font-thin text-white p-4">
                    <h2 className="text-2xl font-bold">{slide.text}</h2>
                    {/* <p className="text-sm mt-2">{slide.description}</p> */}
                  </div>
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
