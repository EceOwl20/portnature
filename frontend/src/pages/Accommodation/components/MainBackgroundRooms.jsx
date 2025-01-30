import React from 'react'
import { Link } from 'react-router-dom'

const MainBackgroundRooms = ({image,header, buttonText,buttonText2,buttonText3, buttonText4, buttonLink,buttonLink2,buttonLink3, buttonLink4}) => {

  const handleScrollTo = (hash) => {
    if (hash.startsWith("#")) {
      const elementId = hash.replace("#", ""); // Hash'ten ID'yi al
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
      }
    } else {
      // Harici bir bağlantı ise
      window.location.href = hash;
    }
  };

  return (
    <>
    <div className="flex flex-col w-screen h-[45vw] lg:h-[34vw] bg-cover bg-center items-center justify-end text-center" style={{ backgroundImage: `url(${image.firebaseUrl})` }}>
      <h2 className='text-[25px] leading-[37px] lg:text-[40px] w-[85%] font-lora text-white font-medium lg:leading-normal uppercase  text-shadow-custom'>{header}</h2>
    </div>
    {buttonLink && buttonLink2 && buttonLink3 && (
    <div className='flex flex-col w-screen h-auto my-[50px] items-center justify-center'>
    <div className='flex flex-col gap-5 lg:gap-0 md:flex-row w-[98%] sm:w-[68%] md:w-[90%] lg:w-[80%] lg:min-w-[1010px] items-center justify-center lg:justify-around'>
     <Link className='flex py-[11px] lg:py-[13px] xl:py-[16px] w-[80%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white'   onClick={() => handleScrollTo(buttonLink)} to={buttonLink}>{buttonText}</Link>
     <Link className='flex py-[11px] lg:py-[13px] xl:py-[16px] w-[80%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white'   onClick={() => handleScrollTo(buttonLink2)} to={buttonLink2}>{buttonText2}</Link>
     <Link className='flex py-[11px] lg:py-[13px] xl:py-[16px] w-[80%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white'   onClick={() => handleScrollTo(buttonLink3)} to={buttonLink3}>{buttonText3}</Link>
    {buttonLink4 &&(
       <Link className='flex py-[11px] lg:py-[13px] xl:py-[16px] w-[80%] lg:w-[16%] text-[#233038] border border-black/20 text-[15px] lg:text-[20px] font-monserrat font-light leading-normal text-center items-center justify-center bg-white hover:bg-[#233038] hover:text-white'   onClick={() => handleScrollTo(buttonLink4)} to={buttonLink4}>{buttonText4}</Link>
    )}
    </div>
  </div>
  )}
    </>
  )
}

export default MainBackgroundRooms
