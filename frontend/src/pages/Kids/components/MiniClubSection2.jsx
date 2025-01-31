import React from 'react'

const MiniClubSection2 = ({clubItems}) => {
  return (
    <section className="flex flex-col max-w-[1920px] w-screen items-center justify-center mt-16">
      <div className="flex flex-col gap-10 w-full items-center justify-center">
        {/* Border */}
        <div className="flex border w-screen"></div>

        {/* İlk Bölüm */}
        <div className="flex flex-col-reverse w-[82%] lg:flex-row items-center justify-center max-w-[1920px] mx-auto gap-[25px] mb-[35px]">
          <div className="flex w-[90%] lg:w-[70%] h-[300px] lg:h-[45vh] items-center justify-center "> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              alt=""//{clubItems[0].image.text}
              className="w-full h-full object-cover" 
               loading="lazy"
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-2">
            <h2 className="text-[20px] lg:text-[28px] font-lora italic font-medium leading-10 ">{clubItems[0].header}</h2>
            <div className="flex w-[100%] ">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-[22.5px] font-normal font-monserrat max-w-lg text-[#000]">
            {clubItems[0].text} 
            </p>
          </div>
        </div>

        {/* İkinci Bölüm */}
        <div className="flex flex-col-reverse lg:flex-row-reverse  w-[82%] items-center justify-center max-w-[1920px] mx-auto gap-[25px] mb-[35px]">
          <div className="flex w-[90%] lg:w-[70%] h-[300px] lg:h-[45vh] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              alt="Port Olympiad" 
              className="w-full h-full object-cover" 
               loading="lazy"
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-2">
            <h2 className="text-[20px] lg:text-[28px] font-lora italic font-medium leading-10">{clubItems[0].header}</h2>
            <div className="flex w-[100%] ">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
            {clubItems[0].text}
            </p>
          </div>
        </div>

        {/* Üçüncü Bölüm */}
        <div className="flex flex-col-reverse w-[82%] lg:flex-row items-center justify-center max-w-[1920px] mx-auto gap-[25px] mb-[35px]">
          <div className="flex w-[90%] lg:w-[70%] h-[300px] lg:h-[45vh] items-center justify-center "> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              alt=""//{clubItems[0].image.text}
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-2">
            <h2 className="text-[20px] lg:text-[28px] font-lora italic font-medium leading-10 ">{clubItems[0].header}</h2>
            <div className="flex w-[100%] ">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-[22.5px] font-normal font-monserrat max-w-lg text-[#000]">
            {clubItems[0].text} 
            </p>
          </div>
        </div>

        {/* Dördüncü Bölüm */}
        <div className="flex flex-col-reverse lg:flex-row-reverse  w-[82%] items-center justify-center max-w-[1920px] mx-auto gap-[25px] mb-[35px]]">
          <div className="flex w-full lg:w-[70%] h-[300px] lg:h-[45vh] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              alt="Art Class" 
              className="w-full h-full object-cover" 
               loading="lazy"
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-2">
            <h2 className="text-[20px] lg:text-[28px] font-lora italic font-medium leading-10">{clubItems[0].header}</h2>
            <div className="flex w-[100%] ">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
            {clubItems[0].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniClubSection2
