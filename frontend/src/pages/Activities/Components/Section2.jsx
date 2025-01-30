import React from 'react'
import EmblaCarousel from './Embla/EmblaCarousel'

const Section2 = ({images=[], items=[]}) => {
  const options = { loop: true, align: 'start', }

  return (
    <section className="">
      {/* İlk Slider */}
      <div className="flex w-full mt-5">
        <div className="bg-custom-gradient h-[1px] w-[50%]" />
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
      </div>
      <div className="w-[95%] lg:w-8/12 ml-auto items-end justify-end">
        <EmblaCarousel slides={images} options={options} />
      </div>

      {/* İkinci Slider - Soldan Başlama */}
      <div className="flex justify-start mt-5">
        <div className="w-[95%] lg:w-8/12">
          <EmblaCarousel slides={items} options={options} />
        </div>
      </div>
    </section>
  )
}

export default Section2
