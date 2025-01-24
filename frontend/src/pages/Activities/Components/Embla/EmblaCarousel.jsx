import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

/**
 * @param {Array} slides - Slider verilerini tutan dizi (her elemanda { id, title, image, description } vs. olabilir).
 * @param {Object} options - Embla ayarları (örn. { loop: true, direction: 'rtl' }).
 * 
 * Autoplay özelliği, her 3 saniyede bir `scrollNext()` ile sonraki slayda geçer.
 */
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
    <div className="max-w-[1920px] w-full mt-10 mx-auto">
      {/* Slider Container */}
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
                {/* Dotted Border (Süs) */}
                <div className="absolute h-[610px] inset-0 border-2 border-dotted translate-x-12 translate-y-10"></div>

                {/* Resim Kutusu */}
                <div className="h-[606px] w-full relative bg-gray-200 shadow-md overflow-hidden">
                  {/* Slide Resmi */}
                  <img
                    src={slide.firebaseUrl}
                    alt={slide.title}
                    className="h-full w-full object-cover"
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
