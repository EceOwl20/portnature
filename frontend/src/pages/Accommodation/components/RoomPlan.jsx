import React, { useState }  from 'react'
import PlusSvg from "../../../svg/room/PlusSvg"
import CircleCrossSvg from '../../../svg/room/CircleCrossSvg';

const RoomPlan = ({image, header, text, text2}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='flex bg-[#f8f8f8] w-screen h-auto justify-center items-center '>
      <div className='flex flex-col justify-center items-center w-[90%] lg:w-[80%] my-[40px] gap-2'>
      <img src={image.firebaseUrl} alt={image.altText} width={image.width} height={image.height} loading="lazy" />

      <div className='flex flex-col justify-center items-center text-center w-[80%] gap-6'>
        <button onClick={() => setIsModalOpen(true)} >
        <PlusSvg width={48} height={48} />
      </button>
            
        <p className='text-[12px] lg:text-[15px] text-[#4f595e] font-monserrat font-bold leading-normal lg:leading-[22px]'>{text} <br></br> {text2} </p>
      </div>
      </div>
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 w-screen">
    <div className="absolute inset-0 opacity-50 bg-black w-full" onClick={() => setIsModalOpen(false)}></div>
    <div className="relative z-10 bg-white w-full h-screen lg:h-[80vh] items-center justify-start lg:justify-center flex flex-col gap-5">
      <button onClick={() => setIsModalOpen(false)}>  <CircleCrossSvg className='text-xl font-bold text-black absolute right-4 top-3' width={40} height={40}/></button>
        <h4 className='text-[#170000] text-[30px] font-monserrat font-medium leading-normal mt-[15%] lg:mt-0'>{header}</h4>
       <div className='flex h-[1px] w-[90%] bg-[#c5bfbf] mb-5'></div>
      <img src={image.firebaseUrl} alt={image.altText} width={image.width} height={image.height}
        className='rotate-90 lg:rotate-0 w-full h-auto lg:w-auto max-w-[943px] max-h-[400px] object-contain mx-auto mt-[30%] lg:mt-0'
        loading="lazy" 
      />
    </div>
  </div>
)}

    </div>
  )
}

export default RoomPlan
