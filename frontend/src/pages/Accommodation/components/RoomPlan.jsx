import React, { useState }  from 'react'
import img from "../../../../public/images/rooms/familyroomPlan.png"
import PlusSvg from "../../../svg/room/PlusSvg"
import UnderLine from '../../../svg/UnderLine/UnderLine';
import NewUnderline from '../../../svg/NewUnderline';
import CircleCrossSvg from '../../../svg/room/CircleCrossSvg';

const RoomPlan = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='flex bg-[#f8f8f8] w-screen h-auto justify-center items-center '>
      <div className='flex flex-col justify-center items-center w-[90%] lg:w-[80%] my-[40px] gap-2'>
      <img src={img} alt='img' width={img.width} height={img.height}/>

      <div className='flex flex-col justify-center items-center text-center w-[80%] gap-6'>
        <button onClick={() => setIsModalOpen(true)} >
        <PlusSvg width={48} height={48} />
      </button>
            
        <p className='text-[12px] lg:text-[15px] text-[#4f595e] font-monserrat font-bold leading-normal lg:leading-[22px]'>4 Adults + 1  ·  1 double bed  ·  2 single beds <br></br> 45 m²  ·  Corner Sea View</p>
      </div>
      </div>
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 w-screen">
    <div className="absolute inset-0 opacity-50 bg-black w-full" onClick={() => setIsModalOpen(false)}></div>
    <div className="relative z-10 bg-white w-full h-screen lg:h-[80vh] items-center justify-start lg:justify-center flex flex-col gap-5">
      <button onClick={() => setIsModalOpen(false)}>  <CircleCrossSvg className='text-xl font-bold text-black absolute right-4 top-3' width={40} height={40}/></button>
        <h4 className='text-[#170000] text-[30px] font-monserrat font-medium leading-normal mt-[15%]'>Family Room</h4>
       <div className='flex h-[1px] w-[90%] bg-[#c5bfbf] mb-5'></div>
      <img
        src={img}
        alt="img"
        // style={{ width: '85vw', height: '60vh', objectFit: 'contain' }}
        className='rotate-90 lg:rotate-0 w-full h-auto lg:w-[85vw] lg:h-[60vh] object-contain mx-auto mt-[30%]'
      />
    </div>
  </div>
)}

    </div>
  )
}

export default RoomPlan
