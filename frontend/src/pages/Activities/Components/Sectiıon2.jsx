import React from 'react'
import EmblaCarousel from './Embla/EmblaCarousel'

const Section2 = () => {
  // Slayt verileri (örnek içeriklerle güncellendi)
  const slides = [
    { id: 1, title: 'First Slide', description: 'This is the first slide' },
    { id: 2, title: 'Second Slide', description: 'This is the second slide' },
    { id: 3, title: 'Third Slide', description: 'This is the third slide' },
    { id: 4, title: 'Fourth Slide', description: 'This is the fourth slide' },
    { id: 5, title: 'Fifth Slide', description: 'This is the fifth slide' },
  ]

  // Embla ayarları
  const options = { loop: true, align: 'start' }

  return (
    <section className="p-5">
      {/* Üstteki çizgiler */}
      <div className="flex w-full mt-5 mb-12">
        <div className="bg-custom-gradient h-[1px] w-[50%]" />
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
      </div>

      {/* Embla Carousel */}
      <EmblaCarousel
        slides={slides.map((slide) => (
          <div
            key={slide.id}
            className="h-[606px] flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
            <p className="text-gray-700">{slide.description}</p>
          </div>
        ))}
        options={options}
      />
    </section>
  )
}

export default Section2
