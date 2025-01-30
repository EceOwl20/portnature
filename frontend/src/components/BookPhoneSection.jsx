import React from 'react'
import { Link } from 'react-router-dom'
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const BookPhoneSection = () => {
    
  return (
    <div className='flex lg:hidden w-screen fixed items-center bottom-3 lg:bottom-4 left-2 right-4 justify-center z-50'>
      <div className='absolute bottom-3 lg:bottom-4 left-0 w-[50px] h-[50px] flex items-center justify-center rounded-full z-[9999] bg-[#32B345] cursor-pointer animate-zoom text-white'>
        <Link to="tel:2427310707"><LiaPhoneVolumeSolid className="flex z-[9999] animate-wiggle " size={36}/>
        </Link>
        <div className="absolute w-[51px] h-[51px] lg:w-[61px] lg:h-[61px] bg-transparent border border-[#f8f8f8] rounded-full animate-pulseRing"></div>
      </div>

      <button className='absolute bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-md z-[9999]  cursor-pointer bg-customGray text-[15px] font-bold text-[#F8F8F8] font-monserrat text-center py-[10px] lg:py-[20px] w-[55vw] lg:w-[60vw]'>
       Book Now
      </button>

    </div>
  )
}

export default BookPhoneSection
