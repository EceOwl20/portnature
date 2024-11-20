import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#233038] w-full h-[92px] flex items-center px-10 justify-between'>
        <Link to="/">
            <img src="/header/Logo Port small.png" alt="Logo" />
        </Link>
        <nav className='text-white flex gap-[35px] h-[20px] font-monserrat text-[16px] text-center items-center justify-center'>
            <div className="relative group">
                <Link to="/" className='flex items-center'>
                    ACCOMMODATION
                    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                    </svg>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                    <Link to="/accommodation/family-room" className="block px-4 py-2 underline-custom">FAMILY ROOM</Link>
                    <Link to="/accommodation/suite-room" className="block px-4 py-2 hover:underline">SUITE ROOM</Link>
                    <Link to="/accommodation/standart-room" className="block px-4 py-2 whitespace-nowrap hover:underline">STANDARD ROOM</Link>
                </div>
            </div>
            <Link>KIDS CONCEPT</Link>
            <Link>OFFERS 2023</Link>
            <Link>FOOD & DRINK</Link>
            <Link>ENTERTAINMENT</Link>
            <Link>CONTACTS</Link>
            <Link>SPA</Link>
            <Link>MEETING & CONGRESS</Link>
            <button className='bg-white text-black font-bold w-[172px] h-[50px] '>
                Book Now
            </button>
        </nav>
        
    </header>
  )
}

export default Header