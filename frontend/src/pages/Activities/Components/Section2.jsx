import React from 'react'
import EmblaCarousel from './Embla/EmblaCarousel'

const Section2 = ({images=[], items=[]}) => {
  const options = { loop: true, align: 'start', }

  return (
    <section className="my-2">
      {/* İlk Slider */}
      <div className="flex w-full mt-5">
        <div className="bg-custom-gradient h-[1px] w-[50%]" />
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]" />
      </div>
      <div className="w-[90%] md:w-[83%] lg:w-[75%] xl:w-[85%] xl:max-w-[1400px] ml-auto items-end justify-end mt-10">
        <EmblaCarousel slides={images} options={options} />
      </div>

      {/* İkinci Slider - Soldan Başlama */}
      <div className="flex justify-start mt-5">
        <div className="w-[90%] md:w-[83%] lg:w-[75%] xl:w-[85%] xl:max-w-[1400px]">
          <EmblaCarousel slides={items} options={options} />
        </div>
      </div>
    </section>
  )
}

export default Section2
