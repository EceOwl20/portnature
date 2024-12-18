import React from 'react'
import LineVerticalSvg from '../../../svg/LineVerticalSvg'
import LineVertical2Svg from '../../../svg/LineVertical2Svg'

const MınıClubSection1 = () => {
  return (
    <section className="flex items-center justify-center max-w-[1920px] mx-auto mt-32"> {/* Tüm section tam ortalandı */}
      <div className="flex flex-col gap-16 items-center justify-center w-full"> {/* İçerikler dikeyde ortalandı */}
        <div className="flex flex-row items-center justify-center gap-60 font-monserrat text-[14px] font-bold leading-normal">
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/console1.png" className="w-[39px] h-[39px] mb-4" alt="console" />
            GAMES
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/paint1.png" className="w-[39px] h-[39px] mb-4" alt="paint" />
            PAINTING
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/children1.png" className="w-[39px] h-[39px] mb-4" alt="sports activities" />
            SPORTS ACTIVITIES
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="../../../../public/images/miniclub/Icons/chef1.png" className="w-[39px] h-[39px] mb-4" alt="cooking" />
            COOKING
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 mt-8"> {/* Başlık, çizgiler ve paragraf yanyana */}
          <h1 className="font-lora text-[40px] leading-normal font-medium text-center">MINI CLUB</h1>
          <div className="flex flex-col items-center justify-center">
            <LineVerticalSvg width={1} height={90} />
            <LineVertical2Svg width={1} height={90} />
          </div>
          <p className="font-monserrat text-[15px] font-normal leading-5 w-7/12 text-left">
            Welcome to our luxurious paradise! Step onto the pristine private sandy beach, where the sun-kissed experience becomes a thrilling adventure. Get comfortable on our high-quality sunbeds, soaking up the golden rays and letting all worries drift away. For the ultimate VIP treatment, pre-book a pavilion and immerse yourself in premium service, savoring every moment of your sun-drenched escape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MınıClubSection1
