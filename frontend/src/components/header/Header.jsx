import React from 'react'
import { Link } from 'react-router-dom'
import UnderLine from "../../svg/UnderLine/UnderLine"

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
                    <Link to="/accommodation/family-room" className="block px-4 py-2">FAMILY ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/suite-room" className="block px-4 py-2">SUITE ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/standart-room" className="block px-4 py-2 whitespace-nowrap justify-center">STANDARD ROOM
                        <UnderLine/>
                    </Link>
                    
                </div>
            </div>
            <div className="relative group">
                <Link to="/" className='flex items-center'>
                    ACCOMMODATION2
                    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                    </svg>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                    <Link to="/accommodation/family-room" className="block px-4 py-2">FAMILY ROOM
                        <UnderLine className="flex justify-start items-end z-10 mt-1"/>
                    </Link>
                    
                    <Link to="/accommodation/suite-room" className="block px-4 py-2">SUITE ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/standart-room" className="block px-4 py-2 whitespace-nowrap justify-center">STANDARD ROOM
                        <UnderLine/>
                    </Link>
                    
                </div>
            </div>
            <div className="relative group">
                <Link to="/" className='flex items-center'>
                    ACCOMMODATION
                    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                    </svg>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                    <Link to="/accommodation/family-room" className="block px-4 py-2">FAMILY ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/suite-room" className="block px-4 py-2">SUITE ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/standart-room" className="block px-4 py-2 whitespace-nowrap justify-center">STANDARD ROOM
                        <UnderLine/>
                    </Link>
                    
                </div>
            </div>
            <div className="relative group">
                <Link to="/" className='flex items-center'>
                    ACCOMMODATION
                    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.25 7.75L10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
                    </svg>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-[#233038] text-white pt-8 z-10 text-start">
                    <Link to="/accommodation/family-room" className="block px-4 py-2">FAMILY ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/suite-room" className="block px-4 py-2">SUITE ROOM
                        <UnderLine/>
                    </Link>
                    
                    <Link to="/accommodation/standart-room" className="block px-4 py-2 whitespace-nowrap justify-center">STANDARD ROOM
                        <UnderLine/>
                    </Link>
                    
                </div>
            </div>
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