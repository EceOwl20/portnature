import React from 'react'

const BeachSection2 = ({restaurantItems}) => {
  return (
    <section className="flex flex-col max-w-[1920px] mx-auto items-center justify-center mt-28 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center w-[95%] justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex max-w-[700px] max-h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={restaurantItems[0].image.firebaseUrl}
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">{restaurantItems[0].header}</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg text-[#000]">
            {restaurantItems[0].text}
            </p>
          </div>
        </div>
    </section>
  )
}

export default BeachSection2