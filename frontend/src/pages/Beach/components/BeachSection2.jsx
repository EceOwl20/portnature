import React from 'react'

const BeachSection2 = ({restaurantItems}) => {
  return (
    <section className="flex flex-col max-w-[1920px] w-screen items-center justify-center mt-10 ">
              <div className="flex w-[600px] overflow-x-hidden lg:hidden">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>

        <div className="flex flex-col-reverse lg:flex-row items-center w-[85%] text-center lg:text-start justify-center max-w-[1920px] mx-auto gap-8 lg:gap-44 mt-10">
          <div className="flex max-w-[700px] max-h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={restaurantItems[0].image.firebaseUrl}
              className="w-full h-full object-cover" 
               loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 w-[95%] items-center justify-center text-center lg:text-start">
            <h2 className="text-[22px] lg:text-[28px] font-lora italic font-medium leading-10 text-start">{restaurantItems[0].header}</h2>
            <div className="flex w-full">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg text-[#000]">
            {restaurantItems[0].text}
            </p>
          </div>
        </div>
    </section>
  )
}

export default BeachSection2