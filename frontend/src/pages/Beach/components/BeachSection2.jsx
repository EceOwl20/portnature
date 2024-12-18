import React from 'react'

const BeachSection2 = () => {
  return (
    <section className="flex flex-col max-w-[1920px] mx-auto items-center justify-center mt-28">
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src="/images/Beach/menonjetski.jpg" 
              alt="Treasure Hunt" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">Unleash Your Inner Adventurer</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg text-[#000]">
                Thrill-seekers, rejoice! Dive into a world of aquatic excitement with our thrilling water sports, where adrenaline flows freely with thrilling jet ski rides, gravity-defying parasailing, and a plethora of other exhilarating activities. Embrace the boundless joy, fun, and memories awaiting you as you dive headfirst into an extraordinary vacation like no other.
            </p>
          </div>
        </div>
    </section>
  )
}

export default BeachSection2