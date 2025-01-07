import React from 'react'

const MiniClubSection2 = ({clubItems, lang}) => {
  return (
    <section className="flex flex-col max-w-[1920px] mx-auto items-center justify-center">
      <div className="flex flex-col gap-16 w-full">
        {/* Border */}
        <div className="flex border border-dotted w-screen"></div>

        {/* İlk Bölüm */}
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[0].image.firebaseUrl}
              alt=""//{clubItems[0].image.text[lang]}
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

        {/* İkinci Bölüm */}
        <div className="flex flex-row-reverse items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[1].image.firebaseUrl}
              alt="Port Olympiad" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10">{clubItems[1].header[lang]}</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
            {clubItems[1].text[lang]}
            </p>
          </div>
        </div>

        {/* Üçüncü Bölüm */}
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[2].image.firebaseUrl}
              alt="Kid Chef" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">{clubItems[2].header[lang]}</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg">
            {clubItems[2].text[lang]}
            </p>
          </div>
        </div>

        {/* Dördüncü Bölüm */}
        <div className="flex flex-row-reverse items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src={clubItems[3].image.firebaseUrl}
              alt="Art Class" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10">{clubItems[3].header[lang]}</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
            {clubItems[3].text[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniClubSection2
