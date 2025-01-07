import React from 'react'

const BeachSection2 = ({clubItems, lang}) => {
  return (
    <section className="flex flex-col max-w-[1920px] mx-auto items-center justify-center mt-28">
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">{clubItems[0].header[lang]}</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg text-[#000]">
            {clubItems[0].text[lang]}
            </p>
          </div>
        </div>
    </section>
  )
}

export default BeachSection2